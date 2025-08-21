import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const login = createAsyncThunk("auth/login", async (loginData) => {
  const axiosConfig = (await import("../axiosConfig")).default;
  try {
    const response = await axiosConfig.post("login", loginData);
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error || error.message || "Something went wrong"
    );
  }
});

const token = sessionStorage.getItem("token");
const initialState = {
  user: null,
  token: token || null,
  isAuthenticated: !!token,
  loading: false,
  error: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      sessionStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        const { token, admin, message, success } = action.payload;
        state.user = admin;
        state.token = token;
        state.isAuthenticated = !!token;
        state.message = message || (success ? "Login successful" : "");
        if (token) sessionStorage.setItem("token", token);
        toast.success(state.message);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.error.message;
        toast.error(state.error);
      });
  },
});

export const { logout } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
