#ifndef TASK_H
#define TASK_H

#include <string>

//Definition of abstract parent class Task that allows user to add Task into the the program.
class Task {
public:
    Task(std::string aPriority, std::string aTitle, std::string aDescription);
    void setTitle(std::string ptitle);
    std::string getTitle();
    void setDescription(std::string pdescription);
    std::string getDescription();
    std::string getPriority();

    //Pure virtual reward function, making the class Task as an abstract class.
    virtual int setReward(int difference) = 0;
    
    virtual ~Task();
    
private:
    std::string title;
    std::string description;
    std::string priority;
};

#endif //TASK_H

// Similar to Monday.com and of course, Trello, it is a PM software simulation that allocates tasks based on what the user entered and categorize them into priorities (High, Medium and Low) as sub classes
