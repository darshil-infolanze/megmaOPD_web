import { configureStore } from "@reduxjs/toolkit";

  import formReducer from "../formSlice"
const store = configureStore({
  reducer: {
    form: formReducer, // ✅ this allows state.form to work correctly
  },
});

export default store;