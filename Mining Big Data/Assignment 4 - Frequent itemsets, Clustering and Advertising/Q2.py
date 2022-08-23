import resource 
import time
import sys
import os
import multiprocessing
from itertools import combinations
from collections import Counter
import random
import logging

# Utility variables
data = []
firstResultTaken = []
length = 0 
candidates = dict()
frequents = dict()

def infrequentSubset(cand, k):
    for subset in combinations(cand, k):
        if frequents[k][frozenset(subset)] < length * 0.01:
            return True
    return False

## a suggested approach to randomize the dataset
def readInputRandom(dataset, sample_size):
    lines = []
    
    with open(dataset, 'r', encoding='utf-8',errors='ignore') as file:
        lines = [ (random.random() < float(1) , line.rstrip('\n')) for line in file ]

    length = int(len(lines) * sample_size -1)
    
    for i in range(length):
        line = lines[i]
        data.append(line[1])
    return data

def writeOutput(dataset, sample_size, itemsets, algorithm = "None"):
    if str(dataset) == "":
        return
    fileName = os.path.join("output/" , str(dataset.split('.',1)[0]) + str(sample_size*100) + "%" + algorithm + ".txt")
    file = open(fileName, "w")
    for itemset,support in itemsets.items():
        file.write(str(itemset) + ":" +  str(support) + "\n")
    file.close()

def getCandidates(temp, k):
    allCandidateSet = set()
    for i, p in enumerate(frequents[k-1]):
        for j, q in enumerate(frequents[k-1]):
            if i < j and len(p - q) == 1:
                cand = p | q  # Joined
                if infrequentSubset(cand, k-1):
                    continue  # Pruned
                else:
                    allCandidateSet.add(cand)
    return allCandidateSet

def getFrequent(temp, k):
        counter = Counter()
        if k == 1:
            for tran in temp:
                for item in tran:
                    counter[frozenset({item})] += 1
        else:
            for tran in temp:
                for itemset in candidates[k]:
                    if itemset.issubset(tran):
                        counter[itemset] += 1
        freq_itemset = {frozenset(itemset): support for itemset,
                        support in counter.items() if support >= length * 0.01}
        freq_itemset = Counter(freq_itemset)
        return freq_itemset

def allFrequentItemsets():
    all = Counter()
    for k in frequents:
        all += frequents[k]
    return all

def runApriori(dataset):
    temp = [set(tran) for tran in dataset]
    k = 1
    frequents[k] = getFrequent(temp, k)
    while frequents[k]:
        # Candidate generation
        candidates[k+1] = getCandidates(temp, k+1)
        # Derive frequent itemsets from candidates
        frequents[k+1] = getFrequent(temp, k+1)
        k += 1

'''SON'''
def splitting(k):
    dataList = []
    for i in range (len(data)):
        if (i %2 == k):
            dataList.append(tuple(data[i]))
    return dataList

def firstProcess(dataset):
    rules = runApriori(dataset)
    return allFrequentItemsets()

def SON(k):
    temp_list = splitting(k)
    if not temp_list:
        return
    return firstProcess(temp_list)

def allResults():
    temp = []
    for item in data:
        temp += item
    temp2 = []
    for result in temp:
        if not result in temp2:
            temp2.append(result)
    return temp2

def secondReduce(storage,k):  
    splitResult = []
    for i in range (len(storage)):
        if (i % 2 == k):
            splitResult.append(storage[i])
    return splitResult

def firstReduce(storage,k,total_lines):
    result = []
    temp = secondReduce(storage,k)
    
    for pair in temp:
        count = 0
        for i in range (len(data)):
            if (str(pair.lhs[0]) in data[i] and str(pair.rhs[0]) in data[i]):
                count += 1
        if (count/total_lines > float(0.01)):
            result.append(pair)
    return result
    
def SONMapReduce():
    # Instead of using Spark, in this implementation we mimic the parallel programming env using multiprocessing twice
    pool = multiprocessing.Pool(processes=2)
    for i in range(2):
        firstResultTaken.append(pool.apply_async(SON, (i,)))
    pool.close()
    pool.join()
    temporary = data
    for res in firstResultTaken:
        temporary.append(res.get())  

    final = []
    storage = allResults()
    pool2 = multiprocessing.Pool(processes=2)
    for i in range(2):
        final.append(pool2.apply_async(firstReduce, (storage,i,length)))
    pool2.close()
    pool2.join()
    
    final = []
    for res in final:
        final.append(res.get())
    return allResults()

def main():

    # Logfile
    logfile = logging.getLogger()
    logfile.setLevel(logging.DEBUG)
    handler = logging.FileHandler("output/output.log")
    logfile.addHandler(handler)

    sample_sizes = [0.01, 0.02, 0.05, 0.10]

    datasets = []

    if sys.argv[1]!= "all":
        datasets = sys.argv[1]
    else: 
        datasets = os.listdir("datasets")

    for dataset in datasets:
        for i in sample_sizes:
            # Start time
            start_time = time.perf_counter()
            part1 = readInputRandom(os.path.join("datasets/",dataset),i)
            #approach1 = aprioriApproach(part1)
            runApriori(part1)
            writeOutput(dataset, i, allFrequentItemsets(), "PCY")

            # Elapsed time
            elapsed_time = (time.perf_counter() - start_time)

            # Memory
            memory_in_MB=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0
            
            # Computational time and memory
            logfile.debug ("The algorithm for "+ str(dataset) +" using the simple, randomized algorithm used %5.1f seconds and %5.1f megabyte in sample size of %5.1d percent" % (elapsed_time,memory_in_MB,i*100))
            logfile.debug("\n----------------------------------------------------------------------\n")

            # Start time
            start_time = (time.perf_counter() - elapsed_time)

            part2 = SONMapReduce()
            writeOutput(dataset, i,  allFrequentItemsets() , "SON")

            # Elapsed time
            elapsed_time = (time.perf_counter() - start_time)

            # Memory
            memory_in_MB=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0 - memory_in_MB

            # Computational time and memory
            logfile.debug ("The algorithm for "+ str(dataset) +" using the SON algorithm used %5.1f seconds and %5.1f megabyte in sample size of %5.1d percent" % (elapsed_time,memory_in_MB,i*100))
            logfile.debug("\n----------------------------------------------------------------------\n")
            logfile.debug("\n----------------------------------------------------------------------\n")

    handler.close()
    logfile.removeHandler(handler)

if __name__ == '__main__':
    main()


## Some tested implementation
# ## Get Bloom filter version later
# # Defined hash function for hash table
# def hash(value1, value2):
#     return (value1 ^ value2) % 1000

# ''' A combinations function that is heavily inspired by an existing function in the itertools library, 
#     where we create a tuple in ascending order based on the input order and return the size of the input '''
# def combinations(input, size):
#     # For example: combinations(range(4), 3) --> 012 013 023 123
#     pool = tuple(input)
#     n = len(pool)
#     if size > n:
#         return
#     indices = list(range(size))
#     yield tuple(pool[i] for i in indices)
#     while True:
#         for i in reversed(range(size)):
#             if indices[i] != i + n - size:
#                 break
#         else:
#             return
#         indices[i] += 1
#         for j in range(i+1, size):
#             indices[j] = indices[j-1] + 1
#         yield tuple(pool[i] for i in indices)

# def allItemsetsets(dictionaryOfItems):
#     '''Frequent items from the candidate item sets that meets the threshold of 1%'''
#     for k, v in dictionaryOfItems.items():
#         if v < 0.01*100:
#             del dictionaryOfItems[k]

#     return dictionaryOfItems.keys()

# # Get count of the frequent item sets 
# def count(dictionaryOfItems, baskets):
#     count = dict(zip(dictionaryOfItems, [1]*len(dictionaryOfItems)))

#     for b in baskets: 
#         for k in count.iterkeys():
#             if set(list(k)) < set(b):
#                 count[k] += 1
#     return count

# # Find join transactions
# def join(frequent, size):
#     # If not a pair
#     if size <= 2:
#         return list(combinations(frequent, size))
#     else:
#         return list(combinations(set(a for b in frequent for a in b), size))

# # Apriori with PCY implementation
# def runAprioriwithPCY(lines):
#     '''List out all the candidate item sets from the dataset assigned based on their count'''
#     candidateItems = defaultdict(int)
#     buckets = dict()
#     baskets = []

#     # Initiallise buckets
#     for i in range(0,length):
#         buckets[i] = 0

#     for line in lines:
#         # Candidate item set
#         candidate_list = map(int, line.split())
#         # get a list of all baskets
#         baskets.append(candidate_list)

#         # count of each item
#         for i in candidate_list:
#             if i not in candidateItems:
#                 candidateItems[i] = 1
#             else:
#                 candidateItems[i] +=1

#         # Record unique items in pairs from each buckets
#         pairs = list(combinations(candidate_list,2))
#         for p in pairs:
#             i = hash(p[0], p[1])
#             if i not in buckets:
#                 buckets[i] = 1 
#             else:
#                 buckets[i]+=1
    
#     # Estabish a bitmap list from the hashed values in the hash table
#     bitMapForValues = []
#     # Get key and value
#     for k, v in buckets.items():
#         # Defined threshold as 1%
#         if v < 0.01*100:
#             bitMapForValues.insert(k, 0)
#         else:
#             bitMapForValues.insert(k, 1)

    
#     f1 = allItemsetsets(candidateItems)

#     # Hash the frequent item into bitmap to convert into binary value to get trailing zeros
#     frequent_pairs = join(f1, 2)
#     for fp in frequent_pairs:
#         value = hash(fp[0], fp[1])
#         if bitMapForValues[value] != 1:
#             frequent_pairs.remove(fp)

#     if not frequent_pairs:
#         return None
#     else:
#         # Initialize with possible frequent pairs
#         final = [frequent_pairs]
#         items = count(final[0], baskets)
#         # check which frequent pairs meet minimum threshold value
#         final[0] = allItemsetsets(items)
#         k = 3
#         while(True):
#             new_list = join(final[k-3], k)
#             items = count(new_list, baskets)

#             allItemsets = allItemsetsets(items)
#             if len(allItemsets) > 0:
#                 final.append(allItemsets)
#                 k+=1
#             else:
#                 break

#     return final[k-3]

# def PCY(lines):
#     counts = dict()
#     frequentItemset = []
#     candidates = dict()
#     buckets = dict()
#     bitmap = []
#     allItemsets = []
    
#     for line in lines:
#         numbersOfLines = line.split()
        
#         # Record all the counts
#         for n in numbersOfLines:
#             if n not in counts:
#                 counts[n] = 1
#             else:
#                 counts[n] += 1

#         # Record buckets
#         for i in range(0, len(numbersOfLines) - 1):
#             for j in range(i + 1, len(numbersOfLines)):
#                 # Hash the buckets
#                 # Let's define a hash function here:
#                 if (buckets[(int(numbersOfLines[i]) ^ int(numbersOfLines[j])) % length]):
#                     buckets[(int(numbersOfLines[i]) ^ int(numbersOfLines[j])) % length] = 1
#                 else:
#                     buckets[(int(numbersOfLines[i]) ^ int(numbersOfLines[j])) % length] += 1

#     # For frequent items
#     for c in counts:
#         # Append the candidate if above or equals to threshold of 0.01
#         if counts[c] >= 0.01*100:
#             frequentItemset.append(c)

#     # Resort item based on the assigned keys
#     frequentItemset.sort(key=int)

#     # Assign bit map
#     for b in buckets:
#         # If below threshold of 0.01
#         if buckets[b] >= 0.01*100:
#             bitmap.append(b)

#     # Assign candidate sets as tuple
#     for i in range(0, len(frequentItemset) - 1):
#         for j in range(i + 1, len(frequentItemset)):
#             if (int(frequentItemset[i]) + int(frequentItemset[j])) % length in bitmap:
#                 if (int(frequentItemset[i]),int(frequentItemset[j])) not in candidates:
#                     candidates[(int(frequentItemset[i]),int(frequentItemset[j]))] = 0

#     for line in lines:
#         numbersOfLines = int(line.split())
#         # count candidates
#         for i in range(0, len(numbersOfLines) - 1):
#             for j in range(i + 1, len(numbersOfLines)):
#                 if (int(numbersOfLines[i]),int(numbersOfLines[j])) in candidates:
#                     candidates[(int(numbersOfLines[i]),int(numbersOfLines[j]))] += 1

#     for candidate in candidates:
#         if candidates[candidate] >= 0.01 * 100:
#             allItemsets.append(candidate)
            
#     allItemsets.sort()
#     return frequentItemset + allItemsets