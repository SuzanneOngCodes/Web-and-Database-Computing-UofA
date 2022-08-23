package assignment2.q3;

import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.util.Tool;

import java.io.DataInput;
import java.io.DataOutput;
import java.io.IOException;
import java.util.*; 
import java.util.Map.Entry;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.io.Writable;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.ToolRunner;


public class MapReduceAdvanced extends Configured implements Tool {

	public static void main(String[] args) throws Exception {
	      System.out.println(Arrays.toString(args));
	      // Run the configuration
	      int res = ToolRunner.run(new Configuration(), new MapReduceAdvanced(), args);
	      
	      System.exit(res);
	   }
	   
	   // Class to determine the list of recommendations
	   public static class countMutualFriends implements Writable{
		   // Declaration of userId and mutualFriends variables
		   private Long userID ; 
		   private Long mutualFriends; 
		   
		   public void readFields(DataInput in) throws IOException{
			   userID = in.readLong();
			   mutualFriends = in.readLong(); 
		   }
		   
		   public void write(DataOutput out) throws IOException{
			   out.writeLong(userID); 
			   out.writeLong(mutualFriends);
		   }
		   
		   public countMutualFriends(Long userID, Long mutualFriends){
			   this.userID = userID ; 
			   this.mutualFriends = mutualFriends; 
		   }
		   
		   // Define the method countMutualFriends
		   public countMutualFriends(){
			   this(-1L,-1L);
		   }
		   
		   public Long getUserID(){
			   return this.userID; 
		   }
		   
		   public Long getMutualFriends(){
			   return this.mutualFriends; 
		   }
		   
	   }
	   
	   public static class Map extends Mapper<LongWritable, Text, LongWritable, countMutualFriends> {	      
	      @Override
	      public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
	    	  // Split and store the input into a string array to user and friends based on the [tab]
	    	  String inputLine[] = value.toString().split("\t");
	    	  // Get the user ID as a long variable
	    	  Long user = Long.parseLong(inputLine[0]);
	    	  // Declare a list for all the mutual friends
	    	  List<Long> friends = new ArrayList<Long>();
	    	  
	    	  if (inputLine.length == 2){
	    		  // Set the first token as the first friend in the input and the subsequent friends through ','
		    	  StringTokenizer token = new StringTokenizer(inputLine[1], ",");
		    	  // While it has more lines
		    	  while (token.hasMoreTokens()){
		    		  // Convert the friend to long
		    		  Long friend = Long.parseLong(token.nextToken()); 
		    		  friends.add(friend); 
		    		  context.write(new LongWritable(friend), new countMutualFriends(friend, -1L));
		    	  }
		    	  
		    	  // Establish an adjacency list based on the inputs
		    	  for (int i = 0 ; i < friends.size(); i++){
		    		  for (int j = 0 ; j < friends.size(); j++){
		    			  context.write(new LongWritable(friends.get(i)), new countMutualFriends(friends.get(j), user));
		    			  context.write(new LongWritable(friends.get(j)), new countMutualFriends(friends.get(i), user));
		    		  }
		    	  }
	    	  }
	      }
	   }

	   public static class Reduce extends Reducer<LongWritable, countMutualFriends, LongWritable, Text> {
	      public void reduce(LongWritable key, Iterable<countMutualFriends> values, Context context) throws IOException, InterruptedException {
	         // Declare a Hash Map to get a faster lookup of O(1) of users and friends
	    	 final HashMap<Long, List<Long>> mutualFriends = new HashMap<Long, List<Long>>();
	         // For each user U, find the 10 users who are not already friends with U, but have the most number of mutual friends in common with U
	         for (countMutualFriends val : values) {
	        	 // Boolean to identify if the values of friends is considered as a friend in the previous node
	        	 boolean isFriend = (val.mutualFriends == -1); 
	        	 final Long user = val.getUserID(); 
	        	 final Long mutual = val.getMutualFriends();
	        	 
	        	 if (mutualFriends.containsKey(user)){
	        		 if (isFriend){
	        			 mutualFriends.put(user, null);
	        		 } else if (mutualFriends.get(user) != null){
	        			 mutualFriends.get(user).add(mutual);
	        		 }
	        	 } else {
	        		 if (!isFriend){
	        			 List<Long> temporary = new ArrayList<Long>(){{add(mutual);}};
	        			 mutualFriends.put(user, temporary);
	        		 }else{
	        			 mutualFriends.put(user, null);
	        		 }
	        	 }
	        	 
	         }
	         
	         // Sort the mutual friends
	         SortedMap<Long, List<Long>> sortedRecommendations = new TreeMap<Long, List<Long>>(new Comparator<Long>(){
	        	 public int compare(Long user1, Long user2){
	        		 // Compare the lengths between the users
	        		 Integer firstLength = mutualFriends.get(user1).size();
	        		 Integer secondLength = mutualFriends.get(user2).size();
	        		 if (firstLength > secondLength){
	        			 return -1;
	        		 }else if (firstLength < secondLength && firstLength.equals(secondLength)){
	        			 return -1;
	        		 }else{
	        			 return 1; 
	        		 }
	        	 }
	         });
	         
	         for (Entry<Long, List<Long>> entry : mutualFriends.entrySet()){
	        	 if (entry.getValue()!=null){
	        		 sortedRecommendations.put(entry.getKey(), entry.getValue());
	        	 }
	         }
	         
	         Integer i = 0 ; 
	         String output = "" ; 
	         for (Entry<Long, List<Long>> entry : mutualFriends.entrySet()){
	        	 if (i == 0 ){
	        		 output = entry.getKey().toString();
	        	 }else if (i<10){
	        		 output += "," + entry.getKey().toString();
	        	 }
	        	 i++ ; 
	         }
	         
	         context.write(key, new Text(output));
	      }
	   }
	   
	   @Override
	   public int run(String[] args) throws Exception {
	      System.out.println(Arrays.toString(args));
	      Job job = new Job(getConf(), "MapReduceAdvanced");
	      job.setJarByClass(MapReduceAdvanced.class);
	      job.setOutputKeyClass(LongWritable.class);
	      job.setOutputValueClass(countMutualFriends.class);

	      // Set map
	      job.setMapperClass(Map.class);
	      // Set reduce
	      job.setReducerClass(Reduce.class);

	      // Reads byte offset as key and whole line as value
	      job.setInputFormatClass(TextInputFormat.class);
	      // Writes <k, v> pair per line
	      job.setOutputFormatClass(TextOutputFormat.class);
	      
	      // Add the input paths for text file 
	      FileInputFormat.addInputPath(job, new Path(args[0]));
	      // Set the output path from the argument 
	      FileOutputFormat.setOutputPath(job, new Path(args[1]));

	      job.waitForCompletion(true);
	      
	      return 0;
	   }
	   
}

