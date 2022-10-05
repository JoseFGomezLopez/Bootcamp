const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

  
  for(food of foodSchedule){
    for (key in fruits) {
    if(food.isVegan == false && !(food.name.includes(fruits[key]))){
        food.name = fruits[key];
        food.isVegan = true;
    }  
}
}
console.log(foodSchedule);