import numpy as np
import matplotlib.pyplot as plt
import resource 
import time
# First, we're going to do is to import scipy library to build dendrograms. 
import scipy.cluster.hierarchy as sch

## Main function
def main():
    # Start time
    start_time = time.perf_counter()
    # Using the dendrogram to find the optimal numbers of clusters. 
    # Create the 1-D set of points 
    points = np.array([1,4,9,16,25,36,49,64,81])

    # Create a dendrogram
    plt.figure(figsize=((10,8)))
    plt.title('Hierarchical Clustering Dendrogram for 1-D set of points')
    plt.xlabel('Points')
    plt.ylabel('Euclidean distance')
    dendrogram = sch.dendrogram(sch.linkage(np.reshape(points, (len(points), 1)), method = "ward"), labels = points)
    plt.tight_layout()
    plt.savefig("output/ex3part1.pdf")
    plt.show()

    # Elapsed time
    elapsed_time = (time.perf_counter() - start_time)
    # Memory
    memory_in_MB=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0
    # Computational time and memory
    print("\n----------------------------------------------------------------------\n")
    print ("The dendrogram used %5.1f seconds and %5.1f megabyte" % (elapsed_time,memory_in_MB))
    print("\n----------------------------------------------------------------------\n")
if __name__ == "__main__":
    main()