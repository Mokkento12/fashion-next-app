import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./slices/postsSlice";
import categoriesReducer from "./slices/categoriesSlice";
import tagsReducer from "./slices/tagsSlice";

export const store = configureStore({
  reducer: {
    posts: postReducer,
    categories: categoriesReducer,
    tags: tagsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
