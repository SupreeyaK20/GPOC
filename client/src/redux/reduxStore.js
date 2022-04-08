import { createStore, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { AllCategoryReducer } from "./reducers";

let rootReducer = combineReducers({
  allCategories: AllCategoryReducer,
});

let appStore = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default appStore;
