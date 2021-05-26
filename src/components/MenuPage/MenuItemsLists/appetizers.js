import { v4 as generateUniqueID } from "uuid";

const appetizers = [
  {
    id: generateUniqueID(),
    foodName: "A1. Roti Paratha with Curry Sauce (1pc)",
    foodQuantityClass: "foodQuantityClass",
    foodPrice: "3.50",
  },
  { id: generateUniqueID(), foodName: "A2. Spring Rolls (2pc)", foodQuantityClass: "foodQuantityClass", foodPrice: "3.75" },
  { id: generateUniqueID(), foodName: "A3. Cedar Pancakes", foodPrice: "4.75" },
  { id: generateUniqueID(), foodName: "A4. Steamed Veggie Dumplings (6pc)", foodQuantityClass: "foodQuantityClass", foodPrice: "6.50" },
  { id: generateUniqueID(), foodName: "A5. Pan Fried Veggie Dumplings (6pc)", foodQuantityClass: "foodQuantityClass", foodPrice: "6.50" },
  { id: generateUniqueID(), foodName: "A6. Veggie Burger with Yam Fries", foodPrice: "8.50" },
  { id: generateUniqueID(), foodName: "A7. Roast Soy Ducks (Cold Cut)", foodPrice: "8.95" },
  { id: generateUniqueID(), foodName: "A8. Roast Soy Chicken (Colt Cut)", foodPrice: "8.25" },
  { id: generateUniqueID(), foodName: "A9. Barbeque Veggie Duck", foodPrice: "8.50" },
  { id: generateUniqueID(), foodName: "A10. Barbecue Veggie Ribs", foodPrice: "8.50" },
  { id: generateUniqueID(), foodName: "A11. Veggie Chicken Rolls", foodPrice: "8.75" },
  { id: generateUniqueID(), foodName: "A12. Veggie Roast Pork", foodPrice: "8.75" },
  {
    id: generateUniqueID(),
    foodName: "A13. Mixed Appetizers (2pc)",
    foodQuantityClass: "foodQuantityClass",
    foodDescription: "Soy chicken, roast duck, veggie chicken rolls, veggie roast pork, {sliced golden chops",
    foodPrice: "16.50",
  },
  { id: generateUniqueID(), foodName: "A14. Salted Pepper Organic King Oyster Mushroom Fritters", foodPrice: "8.50" },
  { id: generateUniqueID(), foodName: "A15. Edamame (Japanese Green Peas)", foodPrice: "4.50" },
  { id: generateUniqueID(), foodName: "A16. Golden Sweet Fries (Yam Fries)", foodPrice: "5.50" },
  { id: generateUniqueID(), foodName: "A17. Sliced Golden Chips", foodPrice: "5.75" },
];
export default appetizers;
