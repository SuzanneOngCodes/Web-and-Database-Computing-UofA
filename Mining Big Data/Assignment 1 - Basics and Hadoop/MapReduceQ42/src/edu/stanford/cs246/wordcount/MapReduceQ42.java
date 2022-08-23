package edu.stanford.cs246.wordcount;

import org.apache.hadoop.conf.Configured;
import org.apache.hadoop.util.Tool;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.StringTokenizer;

import org.apache.hadoop.conf.Configuration;
import org.apache.hadoop.fs.Path;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.LongWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Job;
import org.apache.hadoop.mapreduce.Mapper;
import org.apache.hadoop.mapreduce.Reducer;
import org.apache.hadoop.mapreduce.lib.input.FileInputFormat;
import org.apache.hadoop.mapreduce.lib.input.TextInputFormat;
import org.apache.hadoop.mapreduce.lib.output.FileOutputFormat;
import org.apache.hadoop.mapreduce.lib.output.TextOutputFormat;
import org.apache.hadoop.util.ToolRunner;

public class MapReduceQ42 extends Configured implements Tool {

	public static void main(String[] args) throws Exception {
	      System.out.println(Arrays.toString(args));
	      // Run the configuration
	      int res = ToolRunner.run(new Configuration(), new MapReduceQ42(), args);
	      
	      System.exit(res);
	   }

	   @Override
	   public int run(String[] args) throws Exception {
	      System.out.println(Arrays.toString(args));
	      Job job = new Job(getConf(), "MapReduce2");
	      job.setJarByClass(MapReduceQ42.class);
	      job.setOutputKeyClass(Text.class);
	      job.setOutputValueClass(IntWritable.class);

	      // Set map
	      job.setMapperClass(Map.class);
	      // Set reduce
	      job.setReducerClass(Reduce.class);

	      //Reads byte offset as key and whole line as value
	      job.setInputFormatClass(TextInputFormat.class);
	      //Writes <k, v> pair per line
	      job.setOutputFormatClass(TextOutputFormat.class);
	      
	      // Add the input paths for both pg100 and 3399 text files 
	      FileInputFormat.addInputPath(job, new Path(args[0]));
	      // NOT REQUIRED: FileInputFormat.addInputPath(job, new Path(args[1]));
	      // Set the output path from the argument 
	      FileOutputFormat.setOutputPath(job, new Path(args[1]));

	      job.waitForCompletion(true);
	      
	      return 0;
	   }
	   
	   public static class Map extends Mapper<LongWritable, Text, Text, IntWritable> {
	      private final static IntWritable ONE = new IntWritable(1);
	      private Text word = new Text();
	      private static HashSet<String> dictionary = new HashSet<String>(); // HashSet to remove duplicates

	      @Override
	      public void map(LongWritable key, Text value, Context context) throws IOException, InterruptedException {
	    	  // Use StringTokeniser for each value to be placed in a different line
	    	  // Split each string token
	    	// Remove all punctuation and set to lower case
	    	  StringTokenizer token = new StringTokenizer(value.toString().toLowerCase().replaceAll("\\p{Punct}",""));
	    	  // While it has more lines
	    	  while (token.hasMoreTokens()){
	    		  String temp = token.nextToken() ; 
	    		  if (dictionary.contains(temp)==false){
	    			  int wordLength = temp.length() ; 
		    		  word.set((Integer.toString(wordLength))+" length:");
		    		  context.write(word, ONE);
		    		  dictionary.add(temp);
	    		  }	    		  
	    	  }
	      }
	   }

	   public static class Reduce extends Reducer<Text, IntWritable, Text, IntWritable> {
	      @Override
	      public void reduce(Text key, Iterable<IntWritable> values, Context context) throws IOException, InterruptedException {
	         int sum = 0;
	         // Find which word has the maximum length and its frequency
	         // Find max length word token by storing the current maximum length in integer and the assigned token in Text
	         for (IntWritable val : values) {
	            sum += val.get();
	         }
	        
	         context.write(key, new IntWritable(sum));
	      }
	   }

}

