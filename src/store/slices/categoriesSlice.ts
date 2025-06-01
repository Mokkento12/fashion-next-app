import { createSlice } from "@reduxjs/toolkit";

interface Category {
  id: string;
  name: string;
  count: number;
  subcategories?: string[];
}

interface CategoriesState {
  categories: Category[];
  expandedCategoryIds: string[];
}

const initialState: CategoriesState = {
  categories: [
    {
      id: "1",
      name: "Fashion",
      count: 23,
      subcategories: ["Trends", "Accessories", "Outfits"],
    },
    {
      id: "2",
      name: "Style & Clothes",
      count: 7,
      subcategories: ["Casual Wear", "Formal Wear"],
    },
    {
      id: "3",
      name: "Minimalism",
      count: 16,
      subcategories: ["Simplicity", "Clean Design"],
    },
    {
      id: "4",
      name: "Black & White",
      count: 5,
      subcategories: ["Subcat 1", "Subcat 2"],
    },
    {
      id: "5",
      name: "Modern clothes",
      count: 12,
      subcategories: ["Subcat 1", "Subcat 2"],
    },
    {
      id: "6",
      name: "Modern clothes",
      count: 12,
      subcategories: ["Subcat 1", "Subcat 2"],
    },
    {
      id: "7",
      name: "Modern clothes",
      count: 12,
      subcategories: ["Subcat 1", "Subcat 2"],
    },
  ],
  expandedCategoryIds: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    toggleCategory(state, action) {
      const categoryId = action.payload;
      if (state.expandedCategoryIds.includes(categoryId)) {
        state.expandedCategoryIds = state.expandedCategoryIds.filter(
          (id) => id !== categoryId
        );
      } else {
        state.expandedCategoryIds.push(categoryId);
      }
    },
  },
});

export const { toggleCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
