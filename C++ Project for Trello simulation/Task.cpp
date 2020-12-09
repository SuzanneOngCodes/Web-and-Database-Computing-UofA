#include "Task.h"
#include <string>

using namespace std;

//Implementation of constructor for Task with priority, title and description.
Task::Task(string aPriority, string aTitle, string aDescription) : priority (aPriority), title (aTitle), description (aDescription) {
}

//Function to set title of task.
void Task::setTitle(string ptitle) {
    title = ptitle;
}

//Function to get title of task.
string Task::getTitle() {
    return title;
}

//Function to set description of task.
void Task::setDescription(string pdescription) {
    description = pdescription;
}

//Function to get description of task.
string Task::getDescription() {
    return description;
}

//Function to get priority of task.
string Task::getPriority() {
    return priority;
}

//Implementation of Task destructor.
Task::~Task() {
}
