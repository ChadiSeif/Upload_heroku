import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";
// import rootReducer from "./Reducers/rootReducer";
import userReducer from "./Reducers/userReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  userReducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
);

export default store;
