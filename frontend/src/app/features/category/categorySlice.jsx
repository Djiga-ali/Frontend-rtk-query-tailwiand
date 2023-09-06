import { apiSlice } from "../../api/apiSlice";

export const categorySlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewCategory: builder.mutation({
      query: (title) => ({
        url: "/category/create",
        method: "POST",
        body: {
          ...title,
        },
      }),
      invalidatesTags: [{ type: "Category", id: "LIST" }],
    }),

    getCategories: builder.query({
      query: () => ({
        url: "/category/get-categories",
      }),
      providesTags: [{ type: "Post" }],
    }),
  }),
});

export const { useAddNewCategoryMitation, useGetCategoriesQuery } =
  categorySlice;
