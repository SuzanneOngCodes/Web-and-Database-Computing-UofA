#ifndef MEDIUMPRIORITY_H
#define MEDIUMPRIORITY_H

#include "Task.h"

//Definition of MediumPriority class.
class MediumPriority : public Task {
public:
	MediumPriority(std::string aPriority, std::string aTitle, std::string aDescription);

	int setReward(int difference) override; //Virtual rewards function.
	
	~MediumPriority();
};

#endif //MEDIUMPRIORITY_H