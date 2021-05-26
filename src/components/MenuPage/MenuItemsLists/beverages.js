import { v4 as generateUniqueID } from "uuid";

const beverages = [
  { id: generateUniqueID(), foodName: "Passion Iced Tea", foodPrice: "4.00" },
  { id: generateUniqueID(), foodName: "Cranberry Iced Tea", foodPrice: "4.00" },
  { id: generateUniqueID(), foodName: "Fresh Juice", foodPrice: "4.00+" },
  { id: generateUniqueID(), foodName: "Fresh Juice", foodDescription: "Two flavors", foodPrice: "4.50+" },
  { id: generateUniqueID(), foodName: "Fresh Juice", foodDescription: "Three flavors: purple cabbage w/ lemon", foodPrice: "4.75" },
  { id: generateUniqueID(), foodName: "Coke", foodPrice: "1.75" },
  { id: generateUniqueID(), foodName: "Diet Coke", foodPrice: "1.75" },
  { id: generateUniqueID(), foodName: "Sprite", foodPrice: "1.75" },
  { id: generateUniqueID(), foodName: "Ginger Ale", foodPrice: "1.75" },
];
export default beverages;
