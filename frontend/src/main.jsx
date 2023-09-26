import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AlertProvider } from "./pages/popup/tuto-1/alertContext.jsx";
import { useEffect } from "react";
// import { attributeSlice } from "./app/features/attribute/attributeSlice.jsx";
import { productSlice } from "./app/features/product/productSlice.jsx";

store.dispatch(
  productSlice.util.prefetch("getAllProducts", "productList", {
    force: true,
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </BrowserRouter>
      </AlertProvider>
    </Provider>
  </React.StrictMode>
);
