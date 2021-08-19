import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const initialState = {
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    SET_EMAIL: (user, action) => {
      return { ...user, email: action.payload };
    },
    CLEAR_EMAIL: (user, action) => {
      return { ...user, email: "" };
    },
  },
});

export const { SET_EMAIL, CLEAR_EMAIL } = userSlice.actions;

export default userSlice.reducer;

// Selectors

const selectState = (state) => state;

export const selectEmail = createSelector(selectState, (el) => el.user.email);
