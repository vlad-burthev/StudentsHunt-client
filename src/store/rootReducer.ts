import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice/userSlice";
import { userApi } from "@/api/userApi/userApi";

export const rootReducer = combineReducers({
  user: userSlice,
  [userApi.reducerPath]: userApi.reducer,
});
