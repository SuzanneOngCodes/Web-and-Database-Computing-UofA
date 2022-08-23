* Special thanks to Annie's (Thi Ngoc Anh Dang) collaboration for making this possible 😊 *

Instructions for Q3: 
1) For standalone mode, right click the WordCount project, click on run configurations and direct the name to the WordCount class. Change your argument based on the format [INPUT FILE] [OUTPUT DIRECTORY] (eg. 100.txt output_for_testing). Next, click Apply and Run to compile the program. An alternate way to compile the program is by using the Java application in Run when right clicked. 
2) For pseudo-distributed mode, use the command `hadoop fs -put 100-0.txt` to declare the input file. As the JAR file is already exported, we can run the program using the command `hadoop jar WordCountE3.jar edu.stanford.cs246.wordcount.WordCount pg100.txt output_for_testing`. Once completed, we can obtain the output using `hadoop fs -get output_for_testing`

Instructions for Q4: 
Pre-start:
        - Insert the FirstInputFile(pg100.txt) and SecondInputFile(3399.txt) to store the txt files as inputs for Hadoop in pseudo-distributed mode. In this case, the commands used are:
                ‘hadoop fs -put pg100.txt’
                ‘hadoop fs -put 3399.txt’
        - Q4.1 program is stored as MapReduceQ41
        - Q4.3 program is stored as MapReduceQ42
        - The output will be available in the part-* file in their respective output directory, with the length of the word on the left, followed by the frequency on the right.

Q4.1 - 4.2
        - Open Terminal in the MapReduceQ41 directory
                
1) For FirstInputFile: 
        - Use the command `hadoop jar MapReduceQ41.jar ./pg100.txt ./output1psuedo`
2) For SecondInputFile:
        - Use the command `hadoop jar MapReduceQ41.jar ./3399.txt ./output2psuedo`                

Q4.3 - 4.4
        - Open Terminal in the MapReduceQ42 directory

1) For FirstInputFile:
        - Use the command `hadoop jar MapReduceQ42.jar ./pg100.txt ./output12psuedo`
2) For SecondInputFile:
        - Use the command `hadoop jar MapReduceQ42.jar ./3399.txt ./output22psuedo`

- Use `hadoop fs -get [OUTPUT DIRECTORY NAME]` to generate the output directories. In this case, the commands used to obtain the output folders are: 
        ‘hadoop fs  -get output1psuedo’
‘hadoop fs  -get output2psuedo’
‘hadoop fs  -get output 12 pseudo’
‘hadoop fs  -get output 22 pseudo’

There should be part-r-000000 and _SUCCESS files for each directory.