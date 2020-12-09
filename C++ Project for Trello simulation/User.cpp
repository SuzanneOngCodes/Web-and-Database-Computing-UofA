#include "User.h"
#include "Task.h"
#include "HighPriority.h"
#include "MediumPriority.h"
#include "LowPriority.h"

#include <vector>
#include <string>

using namespace std;

//Implementation of constructor for User with name and coins.
User::User(string pname) : name(pname), coins(0) {
	ToDo = new vector<Task*>;
	InProgress = new vector<Task*>;
	Complete = new vector<Task*>;	
}

//Function to set name.
void User::setName(string pname) {
    name = pname;
}

//Function to return name.
string User::getName() {
    return name;
}

//Function to add coins.
void User::addCoins(int reward) {
	coins = coins + reward;
}

//Function to remove coins.
void User::removeCoins(int redemption) {
	coins = coins - redemption;
}

//Function to return coins.
int User::getCoins() {
    return coins;
}

//Function to add task.
void User::addTask(int priorityOption, string aTitle, string aDescription) {
	//Create object depending on priority.
	switch (priorityOption) {
		case 1:
			ToDo->push_back(new HighPriority("High", aTitle, aDescription));
			break;
		case 2:
			ToDo->push_back(new MediumPriority("Medium", aTitle, aDescription));
			break;
		case 3:
			ToDo->push_back(new LowPriority("Low", aTitle, aDescription));
			break;
	}
}

//Function to delete task.
void User::deleteTask (vector<Task*>* list, int i) {
    list->erase(list->begin() + i);
}

//Function to move task.
void User::moveTask (vector<Task*>* oldList, vector<Task*>* newList, int i) {
    newList->push_back(oldList->at(i)); //Move task to new list.
    oldList->erase(oldList->begin() + i); //Erase from old list.
}

//Function to get ToDo list.
vector<Task*>* User::ToDoList() {
   	vector<Task*>* pointer = ToDo;
    return ToDo;
}

//Function to get InProgress List.
vector<Task*>* User::InProgressList() {
	vector<Task*>* pointer = InProgress;
    return InProgress;
}

//Function to get Complete List.
vector<Task*>* User::CompleteList() {
   	vector<Task*>* pointer = Complete;	
    return Complete;
}

//Implementation of User destructor.
User::~User() {
	for (int i = 0; i < ToDo->size(); i++) {
		delete ToDo->at(i);
	}
	for (int i = 0; i < InProgress->size(); i++) {
		delete InProgress->at(i);
	}
	for (int i = 0; i < Complete->size(); i++) {
		delete Complete->at(i);
	}
	delete ToDo;
	delete InProgress;
	delete Complete;
}
