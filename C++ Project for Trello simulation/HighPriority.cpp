#include <string>
#include "Task.h"
#include "HighPriority.h"

using namespace std;

//Implementation of constructor for HighPriority class.
HighPriority::HighPriority (string aPriority, string aTitle, string aDescription) : Task (aPriority, aTitle, aDescription) {
}

//Implementation of virtual reward function.
int HighPriority::setReward(int difference) {
	int reward;
	if (difference >= 10) {
		reward = 30;
	}
	else if (difference >= 5 && difference < 10) {
		reward = 20;
	}
	else if (difference < 5) {
		reward = 10;
	}
	return reward;
}

//Implementation of default destructor.
HighPriority::~HighPriority() {
}

