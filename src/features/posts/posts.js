import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { JSONResponse } from "../../sdk/apiFetch";
import * as posts from "../../sdk/posts";

const initialState = {
  posts: [],
  loading: false,
};

export const listPosts = createAsyncThunk("posts/listPosts", async () => {
  const response = await posts.listPosts();

  return JSONResponse(response);
});

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.posts = action.payload;
      state.loading = false;
    });
    builder.addCase(listPosts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listPosts.rejected, (state, action) => {
      state.loading = false;
      console.error("fetch Error on post lists", action.error);
    });
  },
});

//export const {} = authSlice.actions

export default postsSlice.reducer;
