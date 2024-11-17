import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function calculateTotalNutrition(items: FoodItem[]): NutritionData {
  return items.reduce(
    (acc, item) => ({
      calories: acc.calories + item.nutrition.calories,
      protein: acc.protein + item.nutrition.protein,
      carbohydrates: acc.carbohydrates + item.nutrition.carbohydrates,
      fat: acc.fat + item.nutrition.fat,
      fiber: acc.fiber + item.nutrition.fiber,
      sugar: acc.sugar + item.nutrition.sugar,
    }),
    {
      calories: 0,
      protein: 0,
      carbohydrates: 0,
      fat: 0,
      fiber: 0,
      sugar: 0,
    }
  );
}