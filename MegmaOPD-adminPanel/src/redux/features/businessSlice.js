import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosConfig from "../axiosConfig";
import { toast } from "react-toastify";

// Async Thunk
export const getDashboard = createAsyncThunk("business/getDashboard", async () => {
  try {
    const response = await axiosConfig.get("dashboard");
    return response.data;
  } catch (error) {
    throw (
      error.response?.data?.error || error.message || "Something went wrong"
    );
  }
});

export const getUser = createAsyncThunk(
  "business/getUser",
  async () => {
    try {
      const response = await axiosConfig.get("users");
      return response.data;
    } catch (error) {
      throw (
        error.response?.data?.error || error.message || "Something went wrong"
      );
    }
  }
);

// Slice
const businessSlice = createSlice({
  name: "business",
  initialState: {
    dashboard: [],
    user: [],
    loading: false,
    loading2: false,
    error: null,
    message: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDashboard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDashboard.fulfilled, (state, action) => {
        state.loading = false;
        state.dashboard = action.payload;
        state.message = action.payload?.message || "Success";
      })
      .addCase(getDashboard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data";
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload?.message || "Success";
      })
      .addCase(getUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to fetch data";
      })
  },
});

export default businessSlice.reducer;
