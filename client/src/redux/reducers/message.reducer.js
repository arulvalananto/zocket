import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  success: "",
  failure: "",
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    SET_ERROR_MESSAGE: (message, action) => {
      return { ...message, failure: action.payload };
    },
    CLEAR_ERROR_MESSAGE: (message, action) => {
      return { ...message, failure: "" };
    },
    SET_SUCCESS_MESSAGE: (message, action) => {
      return { ...message, success: action.payload };
    },
    CLEAR_SUCCESS_MESSAGE: (message, action) => {
      return { ...message, success: "" };
    },
  },
});

export const {
  CLEAR_ERROR_MESSAGE,
  CLEAR_SUCCESS_MESSAGE,
  SET_ERROR_MESSAGE,
  SET_SUCCESS_MESSAGE,
} = messageSlice.actions;

export default messageSlice.reducer;

//  Selector

const selectState = (state) => state;

export const selectMessage = createSelector(selectState, (el) => el.message);
