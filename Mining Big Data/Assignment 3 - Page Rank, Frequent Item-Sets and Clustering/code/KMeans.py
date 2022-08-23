## Implementation of the K-means algorithm
import numpy as np
import matplotlib.pyplot as plt
import resource 
import time
import sys
import pandas as pd
## Only for iris dataset
import sklearn.datasets as sd

## Implementation of the K-means algorithm
class KMeansAlgorithm:
    ## Set maximum iteration as 150 to compare with sklearn
    def __init__(self, numberOfClusters, maximumIterations=150, randomState= None):
        ## Initialise class and assign number of clusters, maximum itration and random state as objects
        self.numberOfClusters = numberOfClusters
        self.maximumIterations = maximumIterations
        self.randomState = randomState

    def initialiseCentroids(self, inputArray):
        ## Set random state
        np.random.RandomState(self.randomState)
        ## Generate random index to set up centroids
        randomPermutationIndex = np.random.permutation(inputArray.shape[0])
        ## Assign random centroids
        allCentroids = inputArray[randomPermutationIndex[:self.numberOfClusters]]
        return allCentroids

    def getCentroids(self, inputArray, labels):
        ## Set a 0's vector for centroids
        centroids = np.zeros((self.numberOfClusters, inputArray.shape[1]), dtype=float)
        ## Iterate k clusters
        for k in range(self.numberOfClusters):
            ## Use the mean of the total number of labels to get centroids
            centroids[k, :] = np.mean(inputArray[labels == k, :], axis=0)
        return centroids

    def getEuclideanDistance(self, inputArray, centroids):
        ## Set a list of 0's matrix for all distances of the data points
        euclideanDistance = np.zeros((inputArray.shape[0], self.numberOfClusters), dtype=float)
        ## Iterate through k number of clusters
        for k in range(self.numberOfClusters):
            ## Get l1 norm, the sum of the absolute vector values
            l1Norm = np.linalg.norm(inputArray - centroids[k, :], axis=1)
            ## Square root of l1Norm
            euclideanDistance[:, k] = np.square(l1Norm)
        return euclideanDistance

    def getNearestCluster(self, distance):
        ## Get the minimum distance for the nearest cluster
        return np.argmin(distance, axis=1)

    def getSumOfSquaresError(self, inputArray, labels, centroids):
        ## Set a list of 0's matrix for all errors of the data points
        errors = np.zeros(inputArray.shape[0], dtype=float)
        ## Iterate through k number of clusters
        for k in range(self.numberOfClusters):
            ## Calculate the errors using the distance for each of the data points from the regression line
            errors[labels == k] = np.linalg.norm(inputArray[labels == k] - centroids[k], axis=1)
        ## Square and add the distance
        return np.sum(np.square(errors))
    
    ## This function enables us to fit the dataframe into the model and assign errors
    def fit(self, inputArray):
        ## Generate centroids based on data points
        self.centroids = self.initialiseCentroids(inputArray)
        for i in range(self.maximumIterations):
            ## Define centroids from the previous iteration
            old_centroids = self.centroids
            ## Get Euclidean distance
            distance = self.getEuclideanDistance(inputArray, old_centroids)
            ## Set labels as the newly appointed cluster
            self.labels = self.getNearestCluster(distance)
            ## Get the newly defined centroids
            self.centroids = self.getCentroids(inputArray, self.labels)
            ## Stopping condition: When there is no change from the previous centroids
            if np.all(old_centroids == self.centroids):
                break
        ## Get SSE
        self.error = self.getSumOfSquaresError(inputArray, self.labels, self.centroids)
    
    def predict(self, inputArray):
        ## Predict and return the nearest cluster based on all the euclidean distances
        distance = self.getEuclideanDistance(inputArray, self.centroids)
        return self.getNearestCluster(distance)

## Find the optimal K value
class defineKvalue():
    def elbowMethod(X):
        ## Means that you need to calculate the distance in all 4 dimensions but only plot the x&y at the end. 
        sumOfSquaredErrors = []
        ## Iterate between 1 to 10 to get the optimal k value
        for k in range(1, 11):
            kmeans = KMeansAlgorithm(numberOfClusters = k)
            kmeans.fit(X)
            sumOfSquaredErrors.append(kmeans.error)

        ## Plot sse against k
        plt.plot(range(1, 11), sumOfSquaredErrors)
        plt.title('Elbow method')
        plt.xlabel('Number of clusters')
        plt.ylabel('Within the sum of squares of the clusters')
        plt.savefig("output/ex3part2b.pdf")
        plt.show()

## Main function
def main():
    # Start time
    start_time = time.perf_counter()

    ## Load datasest
    df = sd.load_iris()

    ## Convert to panda dataframe
    dfIris = pd.DataFrame(data=df['data'], columns = df['feature_names'])
    dfIris.to_csv('datasets/iris.csv', index = False)

    ## Assign the labels as X
    X = dfIris.iloc[:, [0, 1, 2, 3]].values

    ## If user requested for K-value evaluation
    if (len(sys.argv) == 2 and sys.argv[1] == "check_K"):
        ## Get a line graph to get the best k value via elbow method
        defineKvalue.elbowMethod(X)

    optimalK = 3

    kmeans = KMeansAlgorithm(numberOfClusters = optimalK)
    kmeans.fit(X)
    ## Features used for clustering, which is represented as the predicted nearest clusters for all columns in the dataset
    features = kmeans.predict(X)

    # Visualising the clusters and name each clusters based on their names
    plt.scatter(X[features == 0, 0], X[features == 0, 1], s = 100, c = 'blue', label = 'Iris-setosa')
    plt.scatter(X[features == 1, 0], X[features == 1, 1], s = 100, c = 'green', label = 'Iris-versicolour')
    plt.scatter(X[features == 2, 0], X[features == 2, 1], s = 100, c = 'yellow', label = 'Iris-virginica')

    # Plotting the centroids of the clusters
    plt.scatter(kmeans.centroids[:, 0], kmeans.centroids[:,1], s = 100, c = 'red', label = 'Centroids', marker = 'X')
    plt.title('K-means Clustering')
    plt.legend()
    plt.savefig("output/ex3part2a.pdf")
    plt.show()

    # Elapsed time
    elapsed_time = (time.perf_counter() - start_time)
    # Memory
    memory_in_MB=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0
    # Computational time and memory
    print("\n----------------------------------------------------------------------\n")
    print ("The algorithm for K-means used %5.1f seconds and %5.1f megabyte" % (elapsed_time,memory_in_MB))
    print("\n----------------------------------------------------------------------\n")
    

if __name__ == "__main__":
    main()