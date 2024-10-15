import { store } from "@/store";

export type TRole =
  | "admin"
  | "company"
  | "recruiter"
  | "university"
  | "student";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
