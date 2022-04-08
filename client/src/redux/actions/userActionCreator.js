import { GET_CATEGORIES } from "../../queries/queries";
import * as actions from "./userAction";

export function GetAllCategoriesData() {
  const payload = {
    categories: [],
    globalmessage: "",
  };
  return (dispatch) => {
    GET_CATEGORIES().then(
      (response) => {
        console.log(response);
        payload.globalmessage = "Data retrived...";
        payload.categories = response.data;
        dispatch({ type: actions.GET_ALL_CATEGORIES, payload: payload });
      },
      (error) => {
        payload.globalmessage = `${error.response.data}`;
        payload.categories = [];
        dispatch({ type: actions.GET_ALL_CATEGORIES, payload: payload });
      }
    );
    // axios.get(URLS.USER_URL).then(
    //   (response) => {
    //     payload.globalmessage = "User Data retrived...";
    //     payload.users = response.data;
    //     dispatch({ type: actions.GET_ALL_CATEGORIES, payload: payload });
    //   },
    //   (error) => {
    //     payload.globalmessage = `${error.response.data}`;
    //     payload.users = [];
    //     dispatch({ type: actions.GET_ALL_USERS, payload: payload });
    //   }
    // );
  };
}
