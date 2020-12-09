#ifndef USER_H
#define USER_H

#include <vector>
#include <string>
#include "Task.h"
#include "HighPriority.h"
#include "MediumPriority.h"
#include "LowPriority.h"

//Definition of User class.
class User {
public:
    User(std::string pname);

    void setName(std::string pname);
    std::string getName();
    void addCoins(int reward);
    void removeCoins(int redemption);
    int getCoins();
    void addTask(int priorityOption, std::string aTitle, std::string aDescription);
    void deleteTask(std::vector<Task*>* list, int i);
    void moveTask(std::vector<Task*>* oldList, std::vector<Task*>* newList, int i);
    
    //Functions to return lists.
    std::vector<Task*>* ToDoList();
    std::vector<Task*>* InProgressList();
    std::vector<Task*>* CompleteList();
    
    ~User();

private:
    std::string name;
    int coins;
    std::vector<Task*>* ToDo;
    std::vector<Task*>* InProgress;
    std::vector<Task*>* Complete;
};

#endif //USER_H
