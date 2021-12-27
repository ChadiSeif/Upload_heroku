import {
  LOGIN_LOAD,
  LOGIN_LOAD_SUCCESS,
  LOGIN_LOAD_FAIL,
  CURRENT_USER_SUCC,
  CURRENT_USER_FAIL,
} from "../ActionTypes/user";

const initState = {
  load: false,
  data: {},
  error: [],
  isLogged: false,
};

const userReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOAD:
      return { ...state, load: true };
    case LOGIN_LOAD_SUCCESS:
      return { ...state, data: payload.userFound, load: false, isLogged: true };
    case LOGIN_LOAD_FAIL:
      return { ...state, error: payload, load: false };
    case CURRENT_USER_SUCC:
      return { ...state, isLogged: true, data: payload.User };
    case CURRENT_USER_FAIL:
      return { ...state, isLogged: false, error: payload.message };
    default:
      return state;
  }
};

export default userReducer;
