#include "User.h"
#include "Task.h"
#include "HighPriority.h"
#include "MediumPriority.h"
#include "LowPriority.h"

#include <vector>
#include <string>
#include <iostream>

using namespace std;

// Initial unit testing
// Test whether setters and getters in the User.h is functional or not

int main() {
    int testsRun = 0;
    int testsPassed = 0;
    // setName test and getName test
    { // Positive test
        testsRun++;
        User First("Monkey");
        First.setName("Amy");
        string response = First.getName();
        if (response != "Amy"){
            cout << "getName Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
       // Null test
        testsRun++;
        User Zero("Monkey");
        Zero.setName("");
        // Should return ""
        string response1 = Zero.getName();
        if (response1 != ""){
            cout << "getName Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    // addCoins, removeCoins and getCoins test
    { // when reward = 0 test
        testsRun++;
        User t1("Monkey");
        t1.addCoins(0);
        int total = t1.getCoins();
        if (total != 0){
            cout << "addCoins Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
        // when reward = 100 test
        testsRun++;
        User t2("Monkey");
        t2.addCoins(100);
        int total2 = t2.getCoins();
        if (total2 != 100){
            cout << "addCoins Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
        // test for the return value of coins when there are more than one addCoins function in the program
        testsRun++;
        User t3("Monkey");
        t3.addCoins(100);
        t3.addCoins(50);
        t3.addCoins(354);
        int total3 = t3.getCoins();
        if (total3 != 504){
            cout << "addCoins Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
        // test when only removeCoins functions is added in the program, expect to return a negative value as it shows that the user is in debt
        testsRun++;
        User t4("Monkey");
        t4.removeCoins(500);
        int total4 = t4.getCoins();
        if (total4 != -500){
            cout << "removeCoins Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
        // test when both addCoins and removeCoins functions is added in the program
        testsRun++;
        User t5("Monkey");
        t5.addCoins(100);
        t5.addCoins(50);
        t5.addCoins(354);
        t5.removeCoins(104);
        int total5 = t5.getCoins();
        if (total5 != 400){
            cout << "addCoins and removeCoins Test failed!" << endl;
        }else{
            testsPassed++;
        }
        
    }
    
    // addTask, deleteTask, moveTask, ToDo, Inprogress and complete list will be tested using automated testing through makefile

    if (testsPassed < testsRun) {
        std::cout << "Tests in UserTester.cpp failed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
    }else{
        std::cout << "Tests in UserTester.cpp passed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
    }
    
    return 0;
}
