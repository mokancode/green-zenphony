import { combineReducers } from 'redux';
import navbarReducer from './navbarReducer';
import menuReducer from './menuReducer';
import styleReducer from './styleReducer';
// import authReducer from './authReducer';
// import errorReducer from './errorReducer';
// import requestReducer from './requestReducer';
// import quizReducer from './quizReducer';

export default combineReducers({
    navbar: navbarReducer,
    menu: menuReducer,
    styles: styleReducer
    // auth: authReducer,
    // errors: errorReducer,
    // requests: requestReducer,
    // quizzes: quizReducer,
})