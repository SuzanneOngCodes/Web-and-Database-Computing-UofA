# Preparation
-   Install all required packages and dependencies used via command `pip install -r requirements.txt`
-   Make sure the current directory of your local console is set at folder `Assignment3`

# Instructions for Q2: 
-   In Terminal or PowerShell, use the command line `python code/PageRank.py [INPUT_FILE] [OUTPUT_FILE] ` or `python3 code/PageRank.py [INPUT_FILE] [OUTPUT_FILE] ` for Python 3.0 and above, to operate the program. 
-   To run the PageRank algorithm locally, command `python code/PageRank.py datasets/web-Google.txt output/ex2.txt`
-   The console should produce a list of 10 nodes with the highest ranks, followed by the computational time and memory for both naive and networkx built-in implementation, with the full list of ranking of all nodes available in the `ex2.txt` in the output directory

# Instructions for Q3: 
1) For Part 1 visualisation
-   To review the dendrogram, in Terminal or PowerShell, use the command line `python code/Dendrogram.py` to reconstruct. 
-   The dendrogram is available at `ex3part1.pdf` in the output directory, followed by the computational time and memory used in the console log once the visualisation is closed

2) For Part 2a K-means algorithm: 
-   In Terminal or PowerShell, use the command line `python code/KMeans.py` to operate the program. 
-   To run the clustering algorithm locally, command `python code/KMeans.py` to review the plotted results
-   The plot is available at `ex3part2a.pdf` in the output directory, followed by the computational time and memory used in the console log

3) For Part 2b K-means algorithm: 
-   In Terminal or PowerShell, use the command line `python code/KMeans.py check_K` to operate the program. 
-   The plot is available at `ex3part2b.pdf` in the output directory, followed by the computational time and memory used in the console log
