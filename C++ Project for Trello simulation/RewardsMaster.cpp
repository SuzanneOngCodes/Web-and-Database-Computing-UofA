#include "RewardsMaster.h"
#include <iostream>
#include <limits>

using namespace std;

RewardsMaster::RewardsMaster(){
    // day_difference, month_difference and year_difference has a default value -1 to allow valid input from the user as the difference in dates are always 0 and above
    day_difference = -1;
    month_difference = -1;
    year_difference = -1;
    difference = 0;
}

// Set the date when
void RewardsMaster::setDateTaskCompleted(int year, int month, int day){
    by = year;
    bm = month ;
    bd = day ;
}

// A getter to return the year of completion
int RewardsMaster::getCompletedYear(){
    return by;
}

// A getter to return the month of completion
int RewardsMaster::getCompletedMonth(){
    return bm;
}

// A getter to return the day of completion
int RewardsMaster::getCompletedDay(){
    return bd;
}

void RewardsMaster::setDateTaskDue(int year, int month, int day){
    ey = year;
    em = month ;
    ed = day ;
}

// A getter to return the year of completion
int RewardsMaster::getDueYear(){
    return ey;
}

// A getter to return the month of completion
int RewardsMaster::getDueMonth(){
    return em;
}

// A getter to return the day of completion
int RewardsMaster::getDueDay(){
    return ed;
}

//This function checks if the year is a leap year
bool RewardsMaster::identity_leap_year(int year){
    if((year % 4 == 0 && year % 100!=0 )|| year % 400==0 ){
        return 1;
    }else{
        return 0;
    }
}

int RewardsMaster::number_of_days_for_all_months(int month, int year){
    // For months that contain 31 days
    if( month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12 ){
        return 31;
    // For months that contain 30 days
    }else if( month==4 || month==6 || month==9 || month==11 ){
        return 30;
    // For February
    }else{
        bool n =  identity_leap_year(year);
        // Return 29 days if the year is a leap year
        if(n == 1){
            return 29;
        }else{
            return 28;
        }
    }
}

int RewardsMaster::difference_in_time(){
    int due_month = em ;
    // If the starting day is greater than the day in the ending date
    if(ed < bd){
        ed += number_of_days_for_all_months(em,ey);
        em -= 1;
    }
    // If the starting month is greater than the month in the ending date
    if (em < bm){
        em += 12;
        ey -= 1;
    }

    day_difference = ed - bd;
    month_difference = em - bm;
    year_difference = ey - by;
    
    // When the difference between the dates is less than 0 
    if (year_difference < 0 || month_difference < 0 || day_difference < 0){
        difference = 0;
    }else{
    
    // Calculate total number of days
    // This for loop adds the number of days into the variable "difference" that shows the total number of days left for each year
    for (int i = by ; i < ey ; i++){
        if (year_difference > 0){
            if (identity_leap_year(i)==1){
                difference += 366;
            }else{
                difference += 365;
            }
        }
    }
    // This for loop adds the number of days based on the month
    if (month_difference > 0){
        if (due_month >= bm){
            for (int i = bm ; i < em ; i++){
                difference += number_of_days_for_all_months(i,ey);
            }
        }else{
            for (int i = bm; i < 12 ; i++){
                difference += number_of_days_for_all_months(i,ey);
            }
            for (int i = 1; i < due_month ; i++){
                difference += number_of_days_for_all_months(i,ey);
            }
        }
    }
    
    // The variable "Difference" sums up the total days difference
    difference += day_difference;
    }
    return difference;
}

void RewardsMaster::show_time_left(){
    if (year_difference >= 0 && month_difference >= 0 && day_difference >= 0){
            
        if (year_difference == 0 && month_difference == 0) {
            cout<<"You still have : "<<day_difference<<" days left"<<endl;
            
        }else if (year_difference == 0 ){
                cout<<"You still have : "<<month_difference<<" months and "<<day_difference<<" days left"<<endl;
            
        }else{
            cout<<"You still have : "<<year_difference<<" years, "<<month_difference<<" months and "<<day_difference<<" days left"<<endl;
        }
        
    }
}

//Function to return list of rewards.
vector<string> RewardsMaster::getRewardsList() {
    vector<string> rewards;
    rewards.push_back("  5 points - Have a little treat, like an ice cream or a block of chocolate!");
    rewards.push_back(" 10 points - Play your favourite game for an hour!");
    rewards.push_back(" 20 points - Enjoy a nice meal out.");
    rewards.push_back(" 40 points - Enjoy a shopping trip out for a couple of hours and treat yourself to a nice new toy/shirt.");
    rewards.push_back(" 50 points - Take a trip to the beach if it's a nice sunny day!");
    rewards.push_back(" 80 points - Have a day out with your friends!");
    rewards.push_back("500 points - Go for a holiday!");

    return rewards;
}

RewardsMaster::~RewardsMaster(){
}

