#include <string>
#include "Task.h"
#include "MediumPriority.h"

using namespace std;

//Implementation of constructor for MediumPriority class.
MediumPriority::MediumPriority (string aPriority, string aTitle, string aDescription) : Task (aPriority, aTitle, aDescription) {
}

//Implementation of virtual reward function.
int MediumPriority::setReward(int difference) {
	int reward;
	if (difference >= 10) {
		reward = 20;
	}
	else if (difference >= 5 && difference < 10) {
		reward = 10;
	}
	else if (difference < 5) {
		reward = 5;
	}
	return reward;
}

//Implementation of default destructor.
MediumPriority::~MediumPriority() {
}

