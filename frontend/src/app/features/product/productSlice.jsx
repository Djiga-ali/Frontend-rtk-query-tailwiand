import { apiSlice } from "../../api/apiSlice";
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

const productsAdapter = createEntityAdapter();
const initialState = productsAdapter.getInitialState();

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

    getProduct: builder.query({
      query: (id) => ({
        url: `/product/product-details/${id}`,
        // Pick out data and prevent nested properties in a hook or selector
        transformResponse: (response, meta, arg) => response.data,
        // Pick out errors and prevent nested properties in a hook or selector
        transformErrorResponse: (response, meta, arg) => response.status,
        providesTags: (result, error, id) => [{ type: "Product", id }],
        // The 2nd parameter is the destructured `QueryLifecycleApi`
        async onQueryStarted(
          arg,
          {
            dispatch,
            getState,
            extra,
            requestId,
            queryFulfilled,
            getCacheEntry,
            updateCachedData,
          }
        ) {},
        // The 2nd parameter is the destructured `QueryCacheLifecycleApi`
        async onCacheEntryAdded(
          arg,
          {
            dispatch,
            getState,
            extra,
            requestId,
            cacheEntryRemoved,
            cacheDataLoaded,
            getCacheEntry,
            updateCachedData,
          }
        ) {},
      }),
      //   providesTags: [{ type: "Product" }],
    }),
  }),
});

export const {
  useAddNewProductMutation,
  useGetAllProductsQuery,
  useGetProductQuery,
} = productSlice;

export const selectProductResult =
  productSlice.endpoints.getAllProducts.select();

const selectProductData = createSelector(
  selectProductResult,
  (productResult) => productResult.data
);

export const { selectAll: selectAllProducts, selectById: selectProductById } =
  // The adapter.getSelectors() function needs to be given an "input selector" so it knows where to find that normalized data. In this case, the data is nested down inside the RTK Query cache reducer, so we select the right field out of the cache state.
  productsAdapter.getSelectors(
    (state) => selectProductData(state) ?? initialState
  );
