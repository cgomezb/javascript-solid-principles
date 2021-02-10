class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }

  trackCalories(caloriesCount) {
    this.currentCalories += caloriesCount;
    if (this.currentCalories > this.maxCalories) {
      this.logCaloriesSurplus();
    }
  }

  logCaloriesSurplus() {
    console.log('Max calories exceeded');
  }
}

const maxCalories = 2000;
const calorieTracker = new CalorieTracker(maxCalories);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1000);
calorieTracker.trackCalories(700);
