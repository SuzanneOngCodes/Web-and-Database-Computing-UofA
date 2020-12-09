% This function called Treasure takes a string that determine the difficulty of the game as its parameter and returns a message as 'Treasure_Hunt' based on the conditions given to determine whether the user entered the correct numbers to win the game

function [User]=Treasure(d)

% This while loop displays the 'invalid' message if the user fails to input
% the correct response for the difficulty of the game and reads in another
% string iteratively until the user enters the correct response based on
% the instructions given
while strcmp(d, "Easy")==0 && strcmp(d, "easy")==0 && strcmp(d, "Hard")==0 && strcmp(d, "hard")==0 && strcmp(d, "Depressing")==0 && strcmp(d, "depressing")==0 
    
    % Prints the message
    fprintf("Invalid! Please try again\n");
    fprintf("Choose your difficulty\n");
    
    % Read the input the user entered
    d=input("Easy, Hard , or Depressing?: ","s");
    
end

% This if-statement compares the string entered and identify the level of
% difficulty based on the user's input
% This program operates the game if the user choose the difficulty 'Easy'    
if strcmp(d, "Easy")~=0 || strcmp(d, "easy")~=0 
    
    % This program generates random integers between 1 and 5 for variables in
    % the location of the treasure, which are X and Y
    X=randi([1,5]);
    Y=randi([1,5]);
    
    % This program stores the integers of X and Y into a vector named "Location"
    Location=[X,Y];
        
    % This program allows the user to input a guess of the location of the treasure
    % It only allows numbers that are between 1 and 5 (inclusive)
    n=input("Please enter a number between 1 and 5: ");
    m=input("Please enter another number between 1 and 5: ");
    
    % This while loop displays the message based on the distance between the user's number and the correct answers and reads in the numbers iteratively until the user gets the correct numbers
    while n~=X || m~=Y
        
        % Stores the user's numbers into a vector named "User"
        User=[n,m];
        
        % Displays the plots on the same window
        hold on;
        
        % Displays the error message if the numbers are less than 1 or more than 5
        if n<1||n>5||m<1||m>5 
            fprintf("Invalid! Try again!\n\n");
            
        % Displays the error message if the numbers are less than 1 and more than 5
        elseif n<1||n>5&&m<1||m>5
            fprintf("Invalid! Try again!\n\n");
                
        % Displays the location of the user and a message that informs the user that they are very close to the location of the treasure
        elseif abs(n-X)==0 && abs(m-Y)==1 || abs(m-Y)==0 && abs(n-X)==1
            % Displays the user's input into red 'x' plots (as shown in the book "Introduction to MATLAB Programming pages 95 and 98")
            plot(n,m,'rx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You're almost there!\n\n");
                
        % Displays the location of the user and a message that informs the user that they are close to the location of the treasure
        elseif abs(n-X)<=2 && abs(m-Y)<=2
            % Displays the user's input into green 'x' plots
            plot(n,m,'gx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re getting closer...\n\n");
                
        % Displays the location of the user and a message that informs the user that they are far from the location of the treasure        
        else
            % Displays the user's input into blue 'x' plots
            plot(n,m,'bx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re far, far away from the treasure...\n\n");
        end
        
        % This program asks for the number from the user again if the required number is not achieved in the previous turn
        n=input("Please enter a number between 1 and 5: ");
        m=input("Please enter another number between 1 and 5: ");
        
    end
        
% This program operates the game if the user choose the difficulty 'Hard'    
elseif strcmp(d, "Hard")~=0 || strcmp(d, "hard")~=0
    
    % This program generates random integers between 1 and 10 for variables in the location of the treasure , which are X and Y
    X=randi([1,10]);
    Y=randi([1,10]);
    
    % This program stores the integers of X and Y into a vector named "Location"
    Location=[X,Y];
    
    % This program allows the user to input a guess of the location of the treasure
    % It only allows numbers that are between 1 and 10 (inclusive)
    n=input("Please enter a number between 1 and 10: ");
    m=input("Please enter another number between 1 and 10: ");
        
    % This while loop displays the message based on the distance between the user's number and the correct answers and reads in the numbers iteratively until the user gets the correct numbers
    while n~=X || m~=Y
        
        % Stores the user's numbers into a vector named "User"
        User=[n,m];
        
        % Displays the plots on the same window
        hold on;
            
        % Displays the error message if the numbers are less than 1 or more than 10
        if n<1||n>10||m<1||m>10 
            fprintf("Invalid! Try again!\n\n");
            
        % Displays the error message if the numbers are less than 1 and more than 10
        elseif n<1||n>10&&m<1||m>10 
            fprintf("Invalid! Try again!\n\n");
                
        % Displays the location of the user and a message that informs the user that they are very close to the location of the treasure
        elseif abs(n-X)==0 && abs(m-Y)==1 || abs(m-Y)==0 && abs(n-X)==1
            % Displays the user's input into plots
            plot(n,m,'rx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You're almost there!\n\n");
                
        % Displays the location of the user and a message that informs the user that they are close to the location of the treasure
        elseif abs(n-X)<=2 && abs(m-Y)<=2
            % Displays the user's input into plots
            plot(n,m,'gx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re getting closer...\n\n");
                
         % Displays the location of the user and a message that informs the user that they are far from the location of the treasure        
        else
            % Displays the user's input into plots
            plot(n,m,'bx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re far, far away from the treasure...\n\n");
                
        end
        
        % This program asks for the number from the user again if the required number is not achieved in the previous turn
        n=input("Please enter a number between 1 and 10: ");
        m=input("Please enter another number between 1 and 10: ");
            
    end
        
% This program operates the game if the user choose the difficulty 'Depressing'    
else
    
    % This program generates random integers between 1 and 10 for variables in the location of the treasure, which are X and Y
    X=randi([1,15]);
    Y=randi([1,15]);
        
    % This program stores the integers of X and Y into a vector named "Location"
    Location=[X,Y];
        
    % This program allows the user to input a guess of the location of the treasure
    % It only allows numbers that are between 1 and 15 (inclusive)
    n=input("Please enter a number between 1 and 15: ");
    m=input("Please enter another number between 1 and 15: ");
    
    % This while loop displays the message based on the distance between the user's number and the correct answers and reads in the numbers iteratively until the user gets the correct numbers
    while n~=X || m~=Y
        
        % Stores the user's numbers into a vector named "User"
        User=[n,m];
        
        % Displays the plots on the same window
        hold on;
        
        % Displays the error message if the numbers are less than 1 or more
        % than 15
        if n<1||n>15||m<1||m>15 
            fprintf("Invalid! Try again!\n\n");
            
        % Displays the error message if the numbers are less than 1 and
        % more than 15
        elseif n<1||n>15&&m<1||m>15 
            fprintf("Invalid! Try again!\n\n");
            
        % Displays the location of the user and a message that informs the user that they are very close to the location of the treasure
        elseif abs(n-X)==0 && abs(m-Y)==1 || abs(m-Y)==0 && abs(n-X)==1
            % Displays the user's input into plots
            plot(n,m,'rx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You're almost there!\n\n");
            
        % Displays the location of the user and a message that informs the user that they are close to the location of the treasure
        elseif abs(n-X)<=2 && abs(m-Y)<=2
            % Displays the user's input into plots
            plot(n,m,'gx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re getting closer...\n\n");
            
        % Displays the location of the user and a message that informs the user that they are far from the location of the treasure        
        else
            % Displays the user's input into plots
            plot(n,m,'bx');
            % Prints the message and the user's input 
            fprintf("Your current location is :");
            disp(User);
            fprintf("You’re far, far away from the treasure...\n\n");
        
        end
        
        % This program asks for the number from the user again if the required number is not achieved in the previous turn
        n=input("Please enter a number between 1 and 15: ");
        m=input("Please enter another number between 1 and 15: ");
        
    end
    
end

% Turn off plotting on the same window
hold off;

% Display the message "Congratulations! You found it!" when the user inputs the integers that is identical to the generated location of the treasure
fprintf("\nCongratulations! You found it! The location is :")
disp(Location);
fprintf("Here's the prize!\nGoodbye!\nHave fun with the blast!\n");
    
% This program loads the image which is copied directly from an online search engine
imageData=imread('TreasureBoxImage.jpeg');

% Display the .jpeg file in MATLAB as an image
imshow(imageData);
    
end
