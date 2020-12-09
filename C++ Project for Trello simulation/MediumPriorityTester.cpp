#include <string>
#include "Task.h"
#include "MediumPriority.h"
#include "RewardsMaster.h"
#include <iostream>

int main(){
    int testsRun = 0;
    int testsPassed = 0;
    
    {// Unit testing for the function setReward()
        /* Tested using five different input: when day difference = 0 , day difference = 5, day difference = 10, day difference = 1415 and day difference = -1 */
        testsRun++;
        MediumPriority *test1 = new MediumPriority("Medium", "a" , "a");
        int money = test1->setReward(0);
        if ( money != 5 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        MediumPriority *test2 = new MediumPriority("Medium", "a" , "a");
        int money2 = test2->setReward(5);
        if ( money2 != 10 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        MediumPriority *test3 = new MediumPriority("Medium", "a" , "a");
        int money3 = test3->setReward(10);
        if ( money3 != 20 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        MediumPriority *test4 = new MediumPriority("Medium", "a" , "a");
        int money4 = test4->setReward(1415);
        if ( money4 != 20 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        MediumPriority *test5 = new MediumPriority("Medium", "a" , "a");
        int money5 = test5->setReward(-1);
        if ( money5 != 5 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }

        // Check if any functions does not behave as expected while undergoing unit testing
        if (testsPassed < testsRun) {
            std::cout << "Tests in MediumPriority.cpp failed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }else{
            std::cout << "Tests in MediumPriority.cpp passed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }
return 0;
}
