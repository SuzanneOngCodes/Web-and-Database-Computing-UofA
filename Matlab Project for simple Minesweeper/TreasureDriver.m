% This program covers the key MATLAB programming concepts required by this assignment (I/O, Loops, Vectors/2D Arrays, and Conditional Execution)
% This is a game where the user tries to guess a number 2D location in an imaginary grid based on feedback from the the computer in terms of information like “you’re getting closer” or “you’re far, far away from the treasure”.
% Throughout the game, the user can choose to play or not to play the game,
% decide on the difficulty of the game and view their location in a window
% in the form of coloured plots
% If the user won, the program would stop requesting the numbers from the user, prints out the winning message and displays an image as a prize

% This is a driver test case that tests the function Treasure

clc
close all

% Reads the username
name=input("Please enter your name: ","s");
fprintf("Hi %s\n", name);

% Asks the user whether or not they want to play this game
decision=input("Do you want to play a game? Please enter Yes or No only : ","s");

% This while loop compares the answer entered by the user with the variable "decision"
% It will start the game when the user entered "Yes", stop the game if the user entered "No" and demands another input if the user did not follow the instructions to enter 'Yes' or 'No' only
while strcmp(decision, "Yes")==0 && strcmp(decision, "yes")==0
    
    % The if-statement would stop the game entirely using built-in function
    % break and prints a message if the user enters "No" or "no"
    if strcmp(decision, "No")||strcmp(decision, "no")
    fprintf("Alright then. Goodbye!\n");
    break
    
    % This program would ask for another input from the user and prints a message if the user enters an answer other than "No"
    else
    fprintf("Please follow the instructions! Try again!!\n");
    decision=input("Do you want to play a game? Please enter Yes or No only : ","s");
    
    end
    
end   

% Start the game if the user answered "Yes"
if strcmp(decision, "Yes")~=0 || strcmp(decision, "yes")~=0 
    
    % Prints a message to inform the user the game has begun
    fprintf("\nGreat!! Let's play the game!\n\n");
    
    % Allows player to choose the difficulty between 'Easy', 'Hard' and 'Depressing'
    fprintf("Choose your difficulty\n");
    difficulty=input("Easy, Hard, or Depressing?: ","s");
    
    % Use function "Treasure" to generate a random location of the treasure, start the game based on the difficulty chosen and determine whether the user's guess is close or far from the treasure location based on the conditions and displays an image as a prize if the user wins
    Win=Treasure(difficulty);
    
end
