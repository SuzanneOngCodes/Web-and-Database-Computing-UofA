## Inspired by the in-built function pagerank in networkx graph, but with alteration to better suit the program
## Utility libraries
import networkx as nx
import sys
import time
import resource
import operator

def PageRank(G, beta=0.85, max_iter=100, tol=0.0001, weight='weight'):
    # Create a copy in stochastic graph
    stochastic_graph = nx.stochastic_graph(G)
    nodes = stochastic_graph.number_of_nodes()
 
    ranks = dict.fromkeys(stochastic_graph, 1.0 / nodes)
 
    # Assign uniform probability to dead ends
    m_matrix = dict.fromkeys(stochastic_graph, 1.0 / nodes)
 
    # Use personalization vector to generate a list of deadends
    weights = m_matrix
    # for disconnected nodes, which are the nodes without out links
    dead_ends = [n for n in stochastic_graph if stochastic_graph.out_degree(n, weight) == 0.0]
 
    for _ in range(max_iter):
        new_ranks = ranks
        ranks = dict.fromkeys(new_ranks.keys(), 0)
        d_sum = beta * sum(new_ranks[n] for n in dead_ends)
        for n in ranks:
            for nbr in stochastic_graph[n]:
                ranks[nbr] += beta * new_ranks[n] * stochastic_graph[n][nbr][weight]
        for n in ranks:
            ranks[n] += d_sum * weights[n] + (1.0 - beta) * m_matrix[n] 
        err = sum([abs(ranks[n] - new_ranks[n]) for n in ranks])
        if err < nodes * tol:
            return ranks

## Main function
def main():
    ## Using 100 number of iteration and dangling factor (beta) as 0.85
    g = nx.read_edgelist(sys.argv[1], create_using = nx.DiGraph())

    c = sorted(nx.weakly_connected_components(g), key=len, reverse=True)
    wcc_set = c[0]
    G = g.subgraph(wcc_set)

    # # Start time
    start_time = time.perf_counter()

    ## Naive page rank
    results = PageRank(G)
    
    # Elapsed time
    elapsed_time = (time.perf_counter() - start_time)
    # Memory
    memory_in_MB=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0

     ## Write the output file for all nodes and their respective rankings
    with open(sys.argv[2], 'w') as f:
        f.write("Node\tPage Rank\n")
        for key, value in sorted(results.items(), key = operator.itemgetter(0)):
            f.write("%s\t%s\n"%(key,value))

    print("\n----------------------------------------------------------------------\n")
    ## Printed messages for page rank
    # Top ten nodes in ranking
    print("PageRank, with a list of 10 nodes that have the highest page ranks: \n") 
    print(sorted(results.items(), key = operator.itemgetter(1), reverse = True)[:10])
    # Computational time and memory
    print ("\nThe algorithm for implemented PageRank used %5.1f seconds %5.1f megabyte\n" % (elapsed_time,memory_in_MB))
    
    # Delete memory
    del results

    ## Networkx benchmark for testing
    # Start time
    start_time_networkx = (time.perf_counter() - elapsed_time)
    
    ## Networkx built_in_function
    results_networkx = nx.pagerank(g)

    # Elapsed time
    elapsed_time_networkx = (time.perf_counter() - start_time_networkx)
    # Memory
    memory_in_MB_networkx=resource.getrusage(resource.RUSAGE_SELF).ru_maxrss/1024.0/1024.0

    ## Printed messages for networkx benchmark
    # Top ten nodes in ranking
    print("\nNetworkx results for benchmarking, with a list of 10 nodes that have the highest page ranks: \n") 
    print(sorted(results_networkx.items(), key = operator.itemgetter(1), reverse = True)[:10])
    # Computational time and memory
    print ("\nThe algorithm for networkx built-in PageRank used %5.1f seconds %5.1f megabyte" % (elapsed_time_networkx, memory_in_MB_networkx))
    print("\n----------------------------------------------------------------------\n")
    
if __name__ == "__main__":
    main()