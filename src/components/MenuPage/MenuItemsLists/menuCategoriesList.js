import { v4 as generateUniqueID } from "uuid";

const menuCategoriesList = [
  {
    id: generateUniqueID(),
    name: "Beverages",
    order: 0,
  },
  {
    id: generateUniqueID(),
    name: "Appetizers",
    order: 1,
  },
  {
    id: generateUniqueID(),
    name: "Soups",
    order: 2,
  },
  {
    id: generateUniqueID(),
    name: "Gourmet Specials",
    order: 3,
  },
];

export default menuCategoriesList;
