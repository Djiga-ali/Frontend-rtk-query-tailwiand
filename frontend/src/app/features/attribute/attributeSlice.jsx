import { apiSlice } from "../../api/apiSlice";

export const attributeSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addNewProductsAttributes: builder.mutation({
      query: (productAttributes) => ({
        url: "/attributes/create",
        method: "POST",
        body: {
          ...productAttributes,
        },
      }),
      invalidatesTags: [{ type: "ProductAttribute", id: "LIST" }],
    }),

    getAllAttributes: builder.query({
      query: () => ({
        url: "/attributes/get-attributes",
      }),
      providesTags: [{ type: "ProductAttribute" }],
    }),
  }),
});

export const { useAddNewProductsAttributesMutation, useGetAllAttributesQuery } =
  attributeSlice;
