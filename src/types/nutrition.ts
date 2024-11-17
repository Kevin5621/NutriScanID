export interface NutritionData {
  calories: number;
  protein: number;
  carbohydrates: number;
  fat: number;
  fiber: number;
  sugar: number;
}

export interface FoodItem {
  id: string;
  name: string;
  serving_size: string;
  nutrition: NutritionData;
}

export interface DailyLog {
  date: string;
  meals: {
    breakfast: FoodItem[];
    lunch: FoodItem[];
    dinner: FoodItem[];
    snacks: FoodItem[];
  };
}