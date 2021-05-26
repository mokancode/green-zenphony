import { SET_NAVBAR_ELT, NAVBAR_LOADED, SET_BG_LOADED, SET_IMGS_LOADED, SET_PAGE_VISITED, SCROLLABLE_ANCESTOR } from "./types";

export const setNavbarLoaded = (status) => {
  return (dispatch) => {
    dispatch({
      type: NAVBAR_LOADED,
      payload: status,
    });
  };
};

export const setNavbarElement = (elt) => {
  return (dispatch) => {
    dispatch({
      type: SET_NAVBAR_ELT,
      payload: elt,
    });
  };
};

export const setBgLoaded = () => {
  return (dispatch) => {
    dispatch({
      type: SET_BG_LOADED,
      payload: true,
    });
  };
};

export const setImgsLoaded = () => {
  return (dispatch) => {
    dispatch({
      type: SET_IMGS_LOADED,
      payload: true,
    });
  };
};

export const setPageVisited = (visitedPages) => {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE_VISITED,
      payload: visitedPages,
    });
  };
};

export const setScrollableAncestor = (scrollableAncestor) => {
  return (dispatch) => {
    dispatch({
      type: SCROLLABLE_ANCESTOR,
      payload: scrollableAncestor,
    });
  };
};
