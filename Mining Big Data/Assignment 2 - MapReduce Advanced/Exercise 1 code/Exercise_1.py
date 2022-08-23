import matplotlib.pyplot as plt

def evaluates(s,r,b):
	return 1-(1-s**r)**b

#1, r = 3 and b =10
arr =[]
s = [0,0.1,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1]
print(s)

for i in s:
  arr.append(evaluates(i,3,10))

#2, r=6 and b=20.
arr_1=[]

for i in s:
  arr_1.append(evaluates(i,6,20))

#3. r=5 and b=50.
arr_2=[]

for i in s:
  arr_2.append(evaluates(i,5,50))

#Plotting S curve

#1, r = 3 and b =10
plt.figure()
plt.plot(s, arr)
plt.xlabel('Jaccard similarity of documents')
plt.ylabel('Probability of becoming a candidate')
plt.show()
plt.savefig('Ex1_1.png')

#2, r=6 and b=20.
plt.figure()
plt.plot(s, arr_1)
plt.xlabel('Jaccard similarity of documents')
plt.ylabel('Probability of becoming a candidate')
plt.show()
plt.savefig('Ex1_2.png')

#3. r=5 and b=50.
plt.figure()
plt.plot(s, arr_2)
plt.xlabel('Jaccard similarity of documents')
plt.ylabel('Probability of becoming a candidate')
plt.show()
plt.savefig('Ex1_3.png')

