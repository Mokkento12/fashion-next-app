import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockPosts } from "@/data/mockPosts";
import type { Post } from "@/types/index";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  return new Promise<Post[]>((resolve) =>
    setTimeout(() => resolve(mockPosts), 500)
  );
});

interface PostsState {
  items: Post[];
  loading: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PostsState = {
  items: [],
  loading: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = "loading";
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.loading = "failed";
        state.error = "Ошибка загрузки постов";
      });
  },
});

export default postsSlice.reducer;
