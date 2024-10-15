import { RootState, TRole } from "@/interfaces";
import { createSlice } from "@reduxjs/toolkit";

interface IUserData {
  id: string;
  email: string;
}

export interface IUserInitialState {
  isLogin: boolean;
  isAdmin: boolean;
  role: TRole | null;
  userData: null | IUserData;
}

const userInitialState: IUserInitialState = {
  isLogin: false,
  isAdmin: false,
  role: null,
  userData: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState: userInitialState,
  reducers: {
    loginUser: (state, payload) => {},
  },
});

export const { loginUser } = userSlice.actions;
// Other code such as selectors can use the imported `RootState` type
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
