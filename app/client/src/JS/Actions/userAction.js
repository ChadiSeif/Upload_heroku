import {
  LOGIN_LOAD,
  LOGIN_LOAD_SUCCESS,
  LOGIN_LOAD_FAIL,
  CURRENT_USER_SUCC,
  CURRENT_USER_FAIL,
} from "../ActionTypes/user";
import axios from "axios";

export const userLogin = (user) => async (dispatch) => {
  dispatch({ type: LOGIN_LOAD });
  try {
    const result = await axios.post("/api/users/loginUser", user);
    localStorage.setItem("access-token", result.data.token);
    dispatch({ type: LOGIN_LOAD_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: LOGIN_LOAD_FAIL, payload: error.response.data });
  }
};

export const CurrentUser = () => async (dispatch) => {
  dispatch({ type: LOGIN_LOAD });
  try {
    let config = {
      headers: { "access-token": localStorage.getItem("access-token") },
    };
    const result = await axios.get("/api/users/CurrentUser", config);
    // console.log(result.data);
    dispatch({ type: CURRENT_USER_SUCC, payload: result.data });
  } catch (error) {
    localStorage.removeItem("access-token");
    dispatch({ type: CURRENT_USER_FAIL, payload: error.response.data });
  }
};
