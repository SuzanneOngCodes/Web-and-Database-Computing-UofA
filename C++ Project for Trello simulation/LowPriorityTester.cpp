#include <string>
#include "Task.h"
#include "LowPriority.h"
#include "RewardsMaster.h"
#include <iostream>

int main(){
    int testsRun = 0;
    int testsPassed = 0;
    
    {// Unit testing for the function reward()
        /* Tested using five different input: when day difference = 0 , day difference = 5, day difference = 10, day difference = 1415 and day difference = -1 */
        testsRun++;
        LowPriority *test1 = new LowPriority("Low", "a" , "a");
        int money = test1->setReward(0);
        if ( money != 0 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        LowPriority *test2 = new LowPriority("Low", "a" , "a");
        int money2 = test2->setReward(5);
        if ( money2 != 5 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        LowPriority *test3 = new LowPriority("Low", "a" , "a");
        int money3 = test3->setReward(10);
        if ( money3 != 10 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        LowPriority *test4 = new LowPriority("Low", "a" , "a");
        int money4 = test4->setReward(1415);
        if ( money4 != 10 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
    
    {
        testsRun++;
        LowPriority *test5 = new LowPriority("Low", "a" , "a");
        int money5 = test5->setReward(-1);
        if ( money5 != 0 ){
            cout << "Rewards Test failed!" << endl;
        }else{
            testsPassed++;
        }
    }
        // Check if any functions does not behave as expected while undergoing unit testing
        if (testsPassed < testsRun) {
            std::cout << "Tests in LowPriority.cpp failed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }else{
            std::cout << "Tests in LowPriority.cpp passed! (" << testsPassed << "/" << testsRun << ")" << std::endl;
        }
return 0;
}


