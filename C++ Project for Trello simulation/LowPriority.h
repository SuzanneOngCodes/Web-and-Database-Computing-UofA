#ifndef LOWPRIORITY_H
#define LOWPRIORITY_H

#include "Task.h"

//Definition of LowPriority class.
class LowPriority : public Task {
public:
	LowPriority(std::string aPriority, std::string aTitle, std::string aDescription);

	int setReward(int difference) override; //Virtual rewards function.

	~LowPriority();
};

#endif //LOWPRIORITY_H