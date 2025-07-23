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
    updateMembers1: (state, action) => {
      state.member1 = action.payload;
    },
    updateMembers2: (state, action) => {
      state.member2 = action.payload;
    },
    updateMembers3: (state, action) => {
      state.member3 = action.payload;
    },
    clearForm: () => initialState,
  },
});

export const {
  updateSelfInformation,
  updateMembers1,
  updateMembers2,
  updateMembers3,
  clearForm,
} = formSlice.actions;

export default formSlice.reducer;
