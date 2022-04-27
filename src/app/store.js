import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/auth";
import postsReducer from "../features/posts/posts";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    posts: postsReducer,
  },
});
