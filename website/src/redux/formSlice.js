// src/redux/formSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selfInformation: {},
  member1: {},
  member2: {},
  member3: {},
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateSelfInformation: (state, action) => {
      state.selfInformation = action.payload;
    },
    updateMember1: (state, action) => {
      state.member1 = action.payload;
    },
    updateMember2: (state, action) => {
      state.member2 = action.payload;
    },
    updateMember3: (state, action) => {
      state.member3 = action.payload;
    },
    clearForm: () => initialState,
  },
});

export const {
  updateSelfInformation,
  updateMember1,
  updateMember2,
  updateMember3,
  clearForm,
} = formSlice.actions;

export default formSlice.reducer;
