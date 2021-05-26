import { HOME_LOWER_LEFT_IN_POSITION, MAIN_CURTAIN_OPENED } from "../actions/types";

const initialState = {
  homeLowerLeftInPosition: false,
  mainCurtainOpened: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_LOWER_LEFT_IN_POSITION:
      return {
        ...state,
        homeLowerLeftInPosition: action.payload,
      };
    case MAIN_CURTAIN_OPENED:
      return {
        ...state,
        mainCurtainOpened: action.payload,
      };
    default:
      return state;
  }
};
