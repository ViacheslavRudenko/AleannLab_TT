import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import reducerData from "./Jobs/reducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  dataLoad: reducerData,
});

const initialState = {};

const devTools =
  ((window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk), devTools)
);

export default store;
