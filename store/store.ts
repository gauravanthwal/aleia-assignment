import { configureStore } from "@reduxjs/toolkit";
import houseReducer from "./slices/houseSlice";

const store = configureStore({
  reducer: {
    house: houseReducer
  },
});

export default store;