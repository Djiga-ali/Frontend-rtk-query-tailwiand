import { store } from "./store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { productSlice } from "./features/product/productSlice";

const Prefetch = () => {
  useEffect(() => {
    store.dispatch(
      productSlice.util.prefetch("getAllProducts", undefined, {
        force: true,
      })
    );
    store.dispatch(
      productSlice.util.prefetch("getProduct", undefined, { force: true })
    );
    // store.dispatch(usersApiSlice.util.prefetch('getUsers', 'usersList', { force: true }))
  }, []);

  return <Outlet />;
};
export default Prefetch;
