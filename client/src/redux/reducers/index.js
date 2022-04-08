import appState from "../appState";
import * as actions from "../actions/userAction";

export function AllCategoryReducer(state = appState, action) {
  if (action.type === actions.GET_ALL_CATEGORIES) {
    return {
      globalmessage: action.payload.globalmessage,
      categories: action.payload.categories,
    };
  }
  return state;
}
