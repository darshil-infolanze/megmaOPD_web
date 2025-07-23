import { configureStore } from "@reduxjs/toolkit";
import formReducer from '../formSlice' // adjust path as needed

const store = configureStore({
  reducer: {
    form: formReducer, // ✅ this allows state.form to work correctly
  },
});

export default store;