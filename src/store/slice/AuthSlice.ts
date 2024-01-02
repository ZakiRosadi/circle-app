// import { setAuthToken } from "@/lib/axios";
import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/type/UserType";

const initialState: UserType = {
  id: 0,
  fullname: "",
  username: "",
  profile_picture: "",
  profile_description: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AUTH_LOGIN(_, action) {
      const payload = action.payload;
      // setAuthToken(payload.token);

      localStorage.setItem("token", payload);
    },
    AUTH_CHECK: (state, action) => {
      state.id = action.payload.id;
      // state.fullname = action.payload.fullname;
      // state.username = action.payload.username;
      // state.profile_picture = action.payload.profile_picture;
      // state.profile_description = action.payload.profile_description;
    },
    AUTH_LOGOUT: () => {
      localStorage.removeItem("token");
      window.location.href = "/login";
    },
    AUTH_ERROR: () => {
      localStorage.removeItem("token");
    },
  },
});

export const { AUTH_LOGIN, AUTH_CHECK, AUTH_LOGOUT, AUTH_ERROR } =
  authSlice.actions;
export default authSlice.reducer;
