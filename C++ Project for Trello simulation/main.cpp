#include <iostream>
#include <string>
#include <vector>
#include <ios>
#include <limits>
#include "Task.h"
#include "HighPriority.h"
#include "MediumPriority.h"
#include "LowPriority.h"
#include "User.h"
#include "RewardsMaster.h"

using namespace std;

//Function to validate input.
void validateInput() {
	cin.clear(); //Clear input stream.
	cin.ignore (numeric_limits<streamsize>::max(), '\n'); //Discard any input that has not been processed yet.
	cout << "\n\nInvalid input! Enter a valid option: "; //Print error message.
}

//Function for main menu display.
void mainMenuOptions(User* owner) {
	cout << "\033[2J\033[1;1H";	//Special character combination to clear the screen.
	cout << "\n_____________MAIN MENU______________\n";
	cout << "What would you like to do today, " << owner->getName() << "?" << endl;
	cout << "1 - View To-Do list\n" << "2 - View In-Progress list\n" <<	"3 - View Complete list\n" 
		 << "4 - Create a task\n" << "5 - Edit user details\n" << "6 - View rewards\n" 
		 << "7 - Redeem rewards\n" << endl;
	cout << "***Press 8 to quit.***\n\n" << "Selection: ";
}

//Function to get list.
vector<Task*>* getList(User* owner, int input) {
	vector<Task*>* list; //Initialise variable for list vector.
	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.

	//Switch statement for lists.
	switch (input) {
		case 1:
			cout << "\n_____________TO-DO LIST_____________\n";
			//Get To-Do list.
			list = owner->ToDoList();
			break;
		case 2:
			cout << "\n___________IN-PROGRESS LIST_________\n";
			//Get In-Progress list.
			list = owner->InProgressList();
			break;
		case 3:
			cout << "\n____________COMPLETE LIST___________\n";
			//Get Complete list.
			list = owner->CompleteList();
			break;
	}
	return list;
}

//Function to print titles of tasks in list and return bool value to determine if vector is empty.
bool printTitles(vector<Task*>* list) {
	//Initialise variable for input and bool variable for emptyvector.
	int input;
	bool emptyVector;

	//If list is empty.
	if (list->empty()) {
		emptyVector = 1; //Set emptyVector to true.
		cout << "No tasks to list.\n" << endl;		
		cout << "***Press any key and hit ENTER to return to main menu***" << endl;
		cin >> input;
	}
	else {
		emptyVector = 0; //Set emptyVector to false.
		//Loop to print titles of tasks in list.
		for (int i = 0; i < list->size(); i++) {
			
	 		cout << i+1 << " - "<< list->at(i)->getTitle() << " (Priority: " << list->at(i)->getPriority() << ")" << endl;
	 	}
	}
	return emptyVector;
}

//Function for applying reward to user for completing a task.
void applyReward(User* owner, RewardsMaster* giftmaster, vector<Task*>* toNewVector) {
	//Initialise variables.
	int day;
	int month;
	int year;
	int difference;
	int reward;
	int input;

	//Request input for date task completed.
	cout << "\nEnter the date the task was completed.\n";
	cout << "Enter year (eg. 2020): ";
	cin >> year;
	//Input validation.
	while (cin.fail()) {
		validateInput(); //Function for input validation.
		cin >> year;
	}
	cout << "Enter month (1 to 12): ";
	cin >> month;
	//Input validation.
	while (cin.fail() || month < 1 || month > 12) {
		validateInput(); //Function for input validation.
		cin >> month;
	}
	cout << "Enter day (1 to 31): ";
	cin >> day;
	//Input validation.
	while (cin.fail() || day < 1 || day > 31) {
		validateInput(); //Function for input validation.
		cin >> day;
	}

	giftmaster->setDateTaskCompleted(year,month,day); //Function to take in date task completed.

	//Request input for due date of task.
	cout << "\nEnter the due date of the task.\n";
	cout << "Enter year (eg. 2020): ";
	cin >> year;
	//Input validation.
	while (cin.fail()) {
		validateInput(); //Function for input validation.
		cin >> year;
	}
	cout << "Enter month (1 to 12): ";
	cin >> month;
	//Input validation.
	while (cin.fail() || month < 1 || month > 12) {
		validateInput(); //Function for input validation.
		cin >> month;
	}
	cout << "Enter day (1 to 31): ";
	cin >> day;
	//Input validation.
	while (cin.fail() || day < 1 || day > 31) {
		validateInput(); //Function for input validation.
		cin >> day;
	}

	giftmaster->setDateTaskDue(year,month,day); //Function to take in date task was due.

	//Work out reward for completed task and apply to user.
	difference = giftmaster->difference_in_time(); //Function to determine how soon task was completed.
	reward = (toNewVector->back())->setReward(difference); // Determine reward based on how soon task was completed.
	owner->addCoins(reward); //Add reward of coins.
	cout << "\n***Well done on completing the task! You have received a reward of " << reward << " coins!***" << endl;
}

//Function for task optons display.
void taskOptions() {
	cout << "\033[2J\033[1;1H";	//Special character combination to clear the screen.
	cout << "\n_____________TASK OPTIONS___________\n";
	cout << "\nChoose from the following options: \n" << "1 - View task\n" << "2 - delete task\n" << "3 - move task\n" << endl;
	cout << "\nSelection: ";	
}

//Function for moving task options display.
void movingtaskOptions(){
		cout << "\033[2J\033[1;1H";	//Special character combination to clear the screen.
		cout << "\n_____________MOVING TASK____________\n";
		cout << "Where would you like to move the task to?\n" << "1 - To Do List\n" << "2 - In-Progress List\n" << "3 - Complete List\n"; 
		cout << "\nSelection: ";
}

//Function for task selection and task options.
void selectTask(User* owner, RewardsMaster* giftmaster, vector<Task*>* returnedVector) {
	//Initialise variables.
	int input;
	int position;
	vector<Task*>* toNewVector = nullptr;

	cout << "\nSelect a task: ";
	cin >> position;

	//Input validation.
 	while (cin.fail() || position < 1 || position > (returnedVector->size())) {
 		 validateInput(); //Function for input validation.
 		 cin >> position;
 	}

	//Adjust position for display and selection purposes.
	position = position - 1;

	//Display task options.
	taskOptions(); //Function with task options.
	cin >> input;
	
	//Input validation.
	while (cin.fail() || input < 1 || input > 3) {
		taskOptions(); //Function with task options.
		validateInput(); //Function for input validation.
		cin >> input;
	}

	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.

	//Switch statement for selected task options.
	switch (input) {
		case 1:
			//View task.
			cout << "\n_____________TASK DETAILS___________\n";
			cout << "Title: " << returnedVector->at(position)->getTitle() << endl;
			cout << "Description: " << returnedVector->at(position)->getDescription() << endl;
			cout << "Priority: " << returnedVector->at(position)->getPriority() << endl;
			break;
		case 2:
			//Delete task.
			owner->deleteTask (returnedVector, position);
			cout << "\n***Task deleted!***\n";
			break;
		case 3: 
			//Move task.
			movingtaskOptions(); //Function with moving task options.
			cin >> input;

		    //Input validation.
			while (cin.fail() || input < 1 || input > 3) {
				movingtaskOptions(); //Function with moving task options.
			 	validateInput(); //Function for input validation.
			 	cin >> input;
			}

			//Switch statement to select new list to move task to.
			switch (input) {
				case 1:
					toNewVector = owner->ToDoList();
					owner->moveTask(returnedVector, toNewVector, position); //Call function to move task.
					break;
				case 2:
					toNewVector = owner->InProgressList();
					owner->moveTask(returnedVector, toNewVector, position); //Call function to move task.
					break;
				case 3:
					toNewVector = owner->CompleteList();
					owner->moveTask(returnedVector, toNewVector, position); //Call function to move task.
					applyReward(owner, giftmaster, toNewVector); //Function to apply reward to user for completing task.
					break;
			}
			cout << "\n***Task moved!***\n" << endl;
	}
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input !=8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
}

//Function to create task.
void createTask(User* owner) {
	//Initialise variables.
	int input;
	string tempTitle;
	string tempDescription;

	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.
		
	//Menu for creating task.
	cout << "\n___________TASK CREATION____________\n";
	cout << "\nHow important is the task? Choose priority:\n" << "1 - High\n2 - Medium\n3 - Low\n" << endl;
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input < 1 || (input > 3 && input !=8)) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.

	//Switch statement for creating task.
	switch (input) {
		case 1:
			cout << "\n_____CREATING HIGH PRIORITY TASK_____\n";
			cin.clear(); //Clear input stream.
			cin.ignore (100, '\n'); //Discard previous input.

			//Prompt user for task details.
			cout << "\nAdd task title: ";
			getline (cin, tempTitle);
			cout << "Add task description: ";
			getline (cin, tempDescription);

			//Add new task.
			owner->addTask(1, tempTitle, tempDescription);
			break;
		case 2:
			cout << "\n____CREATING MEDIUM PRIORITY TASK____\n";
			cin.clear(); //Clear input stream.
			cin.ignore (100, '\n'); //Discard previous input.

			//Prompt user for task details.
			cout << "\nAdd task title: ";
			getline (cin, tempTitle);
			cout << "Add task description: ";
			getline (cin, tempDescription);

			//Add new task.						
			owner->addTask(2, tempTitle, tempDescription);
			break;
		case 3:
			cout << "\n______CREATING LOW PRIORITY TASK______\n";
			cin.clear(); //Clear input stream.
			cin.ignore (100, '\n'); //Discard previous input.

			//Prompt user for task details.
			cout << "\nAdd task title: ";
			getline (cin, tempTitle);
			cout << "Add task description: ";
			getline (cin, tempDescription);

			//Add new task.						
			owner->addTask(3, tempTitle, tempDescription);
			break;
		default:
			break;
	}
	cout << "\n***Task created!***\n" << endl;
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input !=8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
}

//Function to edit user name.
void editUser(User* owner) {
	int input;
	string tempName;
	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.

	//Menu for changing user details.
	cout << "\n________EDITING USER DETAILS________\n";
	cout << "Enter new name: ";
	cin.clear(); //Clear input stream.
	cin.ignore (100, '\n'); //Discard previous input.
	getline (cin, tempName);
	owner->setName(tempName);

	cout << "\n***User details updated!***" << endl;
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input != 8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
}

//Function to view rewards.
void viewRewards(User* owner) {
	int input;
	cout << "\033[2J\033[1;1H";	//Special character combination to clear the screen.

	//Display coins.
	cout << "\n__________VIEWING REWARDS___________\n";
	cout << "You have " << owner->getCoins() << " coins.\n" << endl;
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input !=8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
}

//Function to redeem rewards.
void redeemRewards(User* owner, RewardsMaster* giftmaster) {
	//Initialise variables.
	int input;
	int redemption = 0;
	vector<string> rewardsList;
	cout << "\033[2J\033[1;1H";	//Special character combination to clear the screen.

	cout << "\n_________REDEEMING REWARDS__________\n";
	rewardsList = giftmaster->getRewardsList(); //Call function from rewardsmaster for rewards list.

	//Print list of rewards options.
	cout << "Which reward would you like to redeem?\n" << endl; 
	for (int i = 0; i < rewardsList.size(); i++) {
	 		cout << i+1 << " - "<< rewardsList.at(i) << endl;
	 	}
	cout << "\n***Press 8 to return to the main menu without redeeming any rewards***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input < 1 || input > 8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}

	//Return to main menu if input is 8.
	if (input==8) {
		return;
	}

	//Switch statement for rewards redemption coins value.
	switch (input) {
		case 1:
			redemption = 5;
			break;
		case 2:
			redemption = 10;
			break;
		case 3:
			redemption = 20;
			break;
		case 4:
			redemption = 40;
			break;
		case 5:
			redemption = 50;
			break;
		case 6:
			redemption = 80;
			break;
		case 7:
			redemption = 500;
			break;
	}

	//If statement to check if user has enough coins to redeem reward.
	if (owner->getCoins() >= redemption) {
		owner->removeCoins(redemption); //Function to remove coins from user.
		cout << "\n***Congratulations, you have redeemed a reward!***" << endl;	
	}
	else {
		cout << "\n***Sorry you do not have enough coins to redeem your desired reward!***";
		cout << "\n***Complete more tasks to collect more coins!***\n";
	}
	
	cout << "\n***Press 8 to return to the main menu***\n";
	cout << "\nSelection: ";
	cin >> input;

	//Input validation.
	while (cin.fail() || input != 8) {
		validateInput(); //Function for input validation.
		cin >> input;
	}
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Main program.
int main (void)
{
	//Initialise variables.
	string tempName;
	int input;
	vector<Task*>* returnedVector = nullptr;
	bool mainMenu = 1;
	bool emptyVector = 1;

	cout << "\033[2J\033[1;1H"; //Special character combination to clear the screen.
	
	//Request name input.
	cout << "\n*****WELCOME TO YOUR ORGANISER!*****\n\n";
	cout << "Enter your name: ";
	getline (cin, tempName);

	//Create new User and RewardsMaster.
	User* owner = new User(tempName);
	RewardsMaster* giftmaster = new RewardsMaster();

	//Keep looping through program until user chooses to quit.
	while (mainMenu==1) {
		//Main menu options.
		mainMenuOptions(owner); //Function with main menu options.
		cin >> input;

		//Input validation.
		while (cin.fail() || input < 1 || input > 8) {
			mainMenuOptions(owner); //Function with main menu options.
			validateInput(); //Function for input validation.
			cin >> input;
		}

		//If user chooses to view any of the lists.
		if (input==1 || input==2 || input==3) {
			returnedVector = getList(owner, input); //Function to get list.
			emptyVector = printTitles(returnedVector); //Function to print titles of tasks in list.
			cin.clear(); //Clear input stream.
			cin.ignore (100, '\n'); //Discard previous input.

    		//If vector is not empty, allow task selection.
    		if (!emptyVector) {
				selectTask(owner, giftmaster, returnedVector); //Function for task selection and task options.
			}
		}
		//If user chooses to create a task.
		else if (input==4) {
			createTask(owner); //Function to create task.
		}
		//If user chooses to edit user details.
		else if (input==5) {
			editUser(owner); //Function to edit user name.
		}
		//If user chooses to view rewards.
		else if (input==6) {
			viewRewards(owner); //Function to view rewards.
		}
		//If user chooses to redeem rewards.
		else if (input==7) {
			redeemRewards(owner, giftmaster); //Function to redeem rewards.
		}
		//If user chooses to quit program.
		else if (input==8) {
			//Exit program.
			cout << "\nExiting program..." << endl;
			mainMenu = 0;
			break;
		}
	}

	//Free memory.
	delete owner;
	delete giftmaster;

	return 0;
}