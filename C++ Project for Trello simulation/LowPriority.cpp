#include <string>
#include "Task.h"
#include "LowPriority.h"

using namespace std;

//Implementation of constructor for LowPriority class.
LowPriority::LowPriority (string aPriority, string aTitle, string aDescription) : Task (aPriority, aTitle, aDescription) {
}

//Implementation of virtual reward function.
int LowPriority::setReward(int difference) {
	int reward;
	if (difference >= 10) {
		reward = 10;
	}
	else if (difference >= 5 && difference < 10) {
		reward = 5;
	}
	else if (difference < 5) {
		reward = 0;
	}
	return reward;
}

//Implementation of default destructor.
LowPriority::~LowPriority() {
}

