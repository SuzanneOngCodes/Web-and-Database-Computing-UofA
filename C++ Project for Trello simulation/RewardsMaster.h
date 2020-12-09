#ifndef RewardsMaster_h
#define RewardsMaster_h

#include <vector>
#include <string>

using namespace std;

// This C++ program has a class named "RewardsMaster" to find the number of days and hours between two given dates
class RewardsMaster {
public:
    RewardsMaster();
    void setDateTaskCompleted(int year, int month, int day);
    int getCompletedYear();
    int getCompletedMonth();
    int getCompletedDay();
    void setDateTaskDue(int year, int month, int day);
    int getDueYear();
    int getDueMonth();
    int getDueDay();
    bool identity_leap_year(int year);
    int number_of_days_for_all_months(int month, int year);
    int difference_in_time();
    void show_time_left();
    vector<string> getRewardsList();

    ~RewardsMaster();

private:
    // A date has day, month and year
    int day_difference, month_difference, year_difference;
    int difference;
    int bd, bm, by, ed, em , ey;
};
#endif
