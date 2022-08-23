**Special thanks to Annie's (Thi Ngoc Anh Dang) collaboration for making this possible** 😊

# Instructions for Q3: 
1) For standalone mode: 
* Right click the assignment2 project in question3/src folder, click on run configurations and direct the name to the MapReducedAdvanced class. 
* Change your argument based on the format [INPUT FILE] [OUTPUT DIRECTORY] (eg. ex3_friend_recommendation.txt output_test). 
* Next, click Apply and Run to compile the program. 
* An alternate way to compile the program is by using the Java application in Run when right clicked.  
* In this assignment, our output is stored in the `output` folder. 


2) For pseudo-distributed mode: 
* Open Terminal in the Q3 directory. 
* Use the command `hadoop fs -put ex3_friend_recommendation.txt` to declare the input file. 
* As the JAR file is already exported, we can run the program using the command `hadoop jar MapReduceAdvanced.jar ./ex3_friend_recommendation.txt ./[OUTPUT DIRECTORY NAME]`. 
* Once completed, we can obtain the output using `hadoop fs -get [OUTPUT DIRECTORY NAME]`. 
* The output should be available in the part-* file in their respective output directory, with the user ID on the left, followed by the recommendations on the right.
* In this assignment, our output is stored in the `outputAssignment2` folder.
