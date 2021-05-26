import { SCROLL_TO_CATEGORY, MENU_VEIL_IN_POSITION, MENU_IN_TRANSITION, SET_MENU_CATEGORY } from "../actions/types";
import menuCategoriesList from "../components/MenuPage/MenuItemsLists/menuCategoriesList";
import beverages from "../components/MenuPage/MenuItemsLists/beverages";

const initialState = {
  menuCategory: menuCategoriesList[0].name,
  menuItems: beverages,
  scrollToCategory: "",
  veilInPosition: false,
  menuInTransition: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_CATEGORY:
      return {
        ...state,
        menuCategory: action.payload,
      };
    case MENU_VEIL_IN_POSITION:
      return {
        ...state,
        veilInPosition: action.payload,
      };
    case MENU_IN_TRANSITION:
      return {
        ...state,
        menuInTransition: action.payload,
      };
    case SCROLL_TO_CATEGORY:
      return {
        ...state,
        scrollToCategory: action.payload,
      };
    default:
      return state;
  }
};
