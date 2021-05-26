import { SET_NAVBAR_ELT, NAVBAR_LOADED, SET_BG_LOADED, SET_IMGS_LOADED, SET_PAGE_VISITED, SCROLLABLE_ANCESTOR } from "../actions/types";

const initialState = {
  selection: "Home",
  isLoaded: false,
  mainBgLoaded: false,
  imagesLoaded: false,
  visitedPages: [],
  scrollableAncestor: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_NAVBAR_ELT:
      return {
        ...state,
        selection: action.payload,
      };
    case NAVBAR_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case SET_BG_LOADED:
      return {
        ...state,
        mainBgLoaded: true,
      };
    case SET_IMGS_LOADED:
      return {
        ...state,
        imagesLoaded: true,
      };
    case SET_PAGE_VISITED:
      return {
        ...state,
        visitedPages: action.payload,
      };
    case SCROLLABLE_ANCESTOR:
      return {
        ...state,
        scrollableAncestor: action.payload,
      };
    default:
      return state;
  }
};
