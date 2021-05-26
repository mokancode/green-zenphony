import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // this is index.js

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    // compose(applyMiddleware(...middleware),
    composeWithDevTools(applyMiddleware(...middleware)
        // ,
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default store;