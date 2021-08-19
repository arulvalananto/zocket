import axios from "axios";
import { CLEAR_EMAIL, SET_EMAIL } from "./reducers/user.reducer";
import {
  CLEAR_ERROR_MESSAGE,
  CLEAR_SUCCESS_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
} from "./reducers/message.reducer";

export const changeEmailHandler = (value) => (dispatch) => {
  dispatch(SET_EMAIL(value));
};

export const registerEmail =
  (email, history, toggleLoading) => async (dispatch) => {
    dispatch(CLEAR_ERROR_MESSAGE());
    try {
      toggleLoading(true);
      const res = await axios.post("/api/v1/user/register-email", { email });
      toggleLoading(false);
      dispatch(SET_SUCCESS_MESSAGE("Registered Successfully!"));
      setTimeout(() => {
        dispatch(CLEAR_SUCCESS_MESSAGE());
        dispatch(CLEAR_EMAIL());
        history.push(`/user/${res.data.id}`);
      }, 2000);
    } catch (err) {
      console.log(err);
      toggleLoading(false);
      if (err.response)
        return dispatch(SET_ERROR_MESSAGE(err.response.data?.message));
      if (err) return dispatch(SET_ERROR_MESSAGE(err.message));
    }
  };
