import { createSlice } from "@reduxjs/toolkit";

interface Tag {
  id: string;
  name: string;
}

interface TagsState {
  allTags: Tag[];
  selectedTags: string[];
}

const initialState: TagsState = {
  allTags: [
    { id: "1", name: "Business" },
    { id: "2", name: "Freelance" },
    { id: "3", name: "Money" },
    { id: "4", name: "Experience" },
    { id: "5", name: "Lifestyle" },
    { id: "6", name: "SEO" },
    { id: "7", name: "WordPress" },
    { id: "8", name: "Marketing" },
    { id: "9", name: "UX" },
    { id: "10", name: "Modern" },
    { id: "11", name: "Success" },
    { id: "12", name: "Nature" },
  ],
  selectedTags: [],
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    toggleTag(state, action) {
      const tagId = action.payload;

      if (state.selectedTags.includes(tagId)) {
        state.selectedTags = state.selectedTags.filter((id) => id !== tagId);
      } else {
        state.selectedTags.push(tagId);
      }
    },
  },
});

export const { toggleTag } = tagsSlice.actions;

export default tagsSlice.reducer;
