import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { userApi } from "@/api/userApi/userApi";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
