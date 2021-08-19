import { combineReducers } from "@reduxjs/toolkit";

import userReducer from "./user.reducer";
import messageReducer from "./message.reducer";

export default combineReducers({
  user: userReducer,
  message: messageReducer,
});
