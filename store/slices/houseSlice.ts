import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
  likes: {},
};

const houseSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {
    addLike: (state, { payload }) => {
      if (state.likes[payload]) {
        state.likes[payload].totalLikes = state.likes[payload].totalLikes + 1;
      } else {
        state.likes[payload] = { totalLikes: 1 };
      }
    },
  },
});

export const { addLike } = houseSlice.actions;
export default houseSlice.reducer;
