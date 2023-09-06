import { apiSlice } from "../../api/apiSlice";

export const productSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewProduct: builder.mutation({
      query: (productData) => ({
        url: "/product/create",
        method: "POST",
        body: {
          ...productData,
        },
      }),
      invalidatesTags: [{ type: "Product", id: "LIST" }],
    }),

    getAllProducts: builder.query({
      query: () => ({
        url: "/product/get-products",
      }),
      providesTags: [{ type: "Product" }],
    }),
  }),
});

export const { useAddNewProductMutation, useGetAllProductsQuery } =
  productSlice;
