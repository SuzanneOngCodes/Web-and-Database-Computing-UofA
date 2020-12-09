#include <string>
#include "Task.h"
#include "HighPriority.h"
#include "RewardsMaster.h"
#include <iostream>

int main(){
    int testsRun = 0;
    int testsPassed = 0;
    
    {// Unit testing for the function setReward()
        /* Tested using five different input: when day difference = 0 , day difference = 5, day difference = 10, day difference = 1415 and day difference = -1 */
        testsRun++;
        HighPriority *test1 = new HighPriority("High", "a" , "a");
        int money = test1->setReward(0);
        if ( money != 10 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        HighPriority *test2 = new HighPriority("High", "a" , "a");
        int money2 = test2->setReward(5);
        if ( money2 != 20 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        HighPriority *test3 = new HighPriority("High", "a" , "a");
        int money3 = test3->setReward(10);
        if ( money3 != 30 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        HighPriority *test4 = new HighPriority("High", "a" , "a");
        int money4 = test4->setReward(1415);
        if ( money4 != 30 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        HighPriority *test5 = new HighPriority("High", "a" , "a");
        int money5 = test5->setReward(-1);
        if ( money5 != 10 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }

        // Check if any functions does not behave as expected while undergoing unit testing
        if (testsPassed < testsRun) {
            std::cout << "Tests in HighPriority.cpp failed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }else{
            std::cout << "Tests in HighPriority.cpp passed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }
return 0;
}
