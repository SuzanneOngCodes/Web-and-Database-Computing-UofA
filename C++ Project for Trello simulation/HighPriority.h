#ifndef HIGHPRIORITY_H
#define HIGHPRIORITY_H

#include "Task.h"

//Definition of HighPriority class.
class HighPriority : public Task {
public:
	HighPriority(std::string aPriority, std::string aTitle, std::string aDescription);

	int setReward(int difference) override; //Virtual rewards function.

	~HighPriority();
};

#endif //HIGHPRIORITY_H