import { apiSlice } from "../../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState();

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
        validateStatus: (response, result) => {
          // console.log("result:", result);
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        // console.log("responseData:", responseData);
        const loadedProducts = responseData.map((product) => {
          product.id = product._id;
          return product;
        });
        // By calling productsAdapter.setAll(initialState, responseData), it will return the standard {ids: [], entities: {}} normalized data structure containing all of the received items.
        return productsAdapter.setAll(initialState, loadedProducts);
      },
      providesTags: (result, error, arg) => {
        if (result?.ids) {
          return [
            { type: "Product", id: "LIST" },
            ...result.ids.map((id) => ({ type: "Product", id })),
          ];
        } else return [{ type: "Product", id: "LIST" }];
      },
    }),
  }),
});

export const { useAddNewProductsAttributesMutation, useGetAllAttributesQuery } =
  attributeSlice;

export const selectProductResult =
  attributeSlice.endpoints.getAllAttributes.select();

const selectProductData = createSelector(
  selectProductResult,
  (productResult) => productResult.data
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  // The adapter.getSelectors() function needs to be given an "input selector" so it knows where to find that normalized data. In this case, the data is nested down inside the RTK Query cache reducer, so we select the right field out of the cache state.
  productsAdapter.getSelectors(
    (state) => selectProductData(state) ?? initialState
  );
