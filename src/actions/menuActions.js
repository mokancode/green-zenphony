import { SET_MENU_CATEGORY, SCROLL_TO_CATEGORY, MENU_VEIL_IN_POSITION, MENU_IN_TRANSITION } from "./types";

export const setMenuCategory = (categoryName) => {
  return (dispatch) => {
    dispatch({
      type: SET_MENU_CATEGORY,
      payload: categoryName,
    });
  };
};

export const setMenuVeilInPosition = (inPosition) => {
  return (dispatch) => {
    dispatch({
      type: MENU_VEIL_IN_POSITION,
      payload: inPosition,
    });
  };
};

export const setMenuInTransition = (inTransition) => {
  return (dispatch) => {
    dispatch({
      type: MENU_IN_TRANSITION,
      payload: inTransition,
    });
  };
};

export const scrollToCategory = (categoryName) => {
  return (dispatch) => {
    dispatch({
      type: SCROLL_TO_CATEGORY,
      payload: categoryName,
    });
  };
};
