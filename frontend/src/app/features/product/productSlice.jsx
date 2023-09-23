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
