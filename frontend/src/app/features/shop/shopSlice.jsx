import { apiSlice } from "../../api/apiSlice";

export const shopSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createNewShop: builder.mutation({
      query: (name) => ({
        url: "/shop/create",
        method: "POST",
        body: {
          ...name,
        },
      }),
      invalidatesTags: [{ type: "Shop", id: "LIST" }],
    }),

    getAllShop: builder.query({
      query: () => ({
        url: "/shop/get-shops",
      }),
      providesTags: [{ type: "Shop" }],
    }),
  }),
});

export const { useCreateNewShopMutation, useGetAllShopQuery } = shopSlice;
