import { v4 as generateUniqueID } from "uuid";

const soups = [
  { id: generateUniqueID(), foodName: "S1. Veggie Wonton Soup (1)", foodPrice: "2.75+", foodQuantityClass: "foodQuantityClass" },
  { id: generateUniqueID(), foodName: `S2. Veggie Hot & Sour Soup (1)`, foodPrice: "2.75+", foodQuantityClass: "foodQuantityClass" },
  { id: generateUniqueID(), foodName: "S3. Veggie Chicken Corn Soup (2)", foodQuantityClass: "foodQuantityClass", foodPrice: "7.50" },
  { id: generateUniqueID(), foodName: "S4. Veggie Shark Fin Soup (2)", foodQuantityClass: "foodQuantityClass", foodPrice: "9.25" },
  { id: generateUniqueID(), foodName: "S5. Pumpkin Soup (2)", foodQuantityClass: "S5. foodQuantityClass", foodPrice: "9.50" },
  { id: generateUniqueID(), foodName: "S6. Seaweeed Bean Curd Soup (2)", foodQuantityClass: "foodQuantityClass", foodPrice: "7.50" },
  { id: generateUniqueID(), foodName: `N1. Veggie Duck & Wonton Noodle Soup`, foodPrice: "8.75" },
  { id: generateUniqueID(), foodName: "N2. Veggie Roast Duck Noodle Soup", foodPrice: "7.95" },
  { id: generateUniqueID(), foodName: "N3. House Special Noodle Soup", foodPrice: "9.50" },
  { id: generateUniqueID(), foodName: "N4. Curry Veggie Chicken Noodle Soup", isSpicy: true, foodPrice: "8.50" },
  { id: generateUniqueID(), foodName: "N5. Wonton Noodle Soup", foodPrice: "7.95" },
  { id: generateUniqueID(), foodName: "N6. Veggie Roast Pork Noodle Soup", foodPrice: "8.25" },
  { id: generateUniqueID(), foodName: "N7. Mixed Vegetable Curry Noodle Soup", isSpicy: true, foodPrice: "7.95" },
];
export default soups;
