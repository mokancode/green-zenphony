import { HOME_LOWER_LEFT_IN_POSITION, MAIN_CURTAIN_OPENED } from "./types";

export const setHomeLowerLeftInPosition = (inPosition) => {
  return (dispatch) => {
    dispatch({
      type: HOME_LOWER_LEFT_IN_POSITION,
      payload: inPosition,
    });
  };
};

export const setMainCurtainOpened = (isOpened) => {
  return (dispatch) => {
    dispatch({
      type: MAIN_CURTAIN_OPENED,
      payload: isOpened,
    });
  };
};
