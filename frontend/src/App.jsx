import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/layout/Layout";
import DropdownMenu from "./components/dropdown/DropdownMenu";
import SelectOption from "./components/selectOption/selectOption";
import ProductCard from "./components/cards/ProductCard";
import ProductDetails from "./components/detailPage/ProductDetails";
import ProductDetails2 from "./components/detailPage/ProductDetails2";
import ProductAttributes from "./pages/ProductAttributes";
import RegisterAttribute from "./pages/RegisterAttribute";
import AddProduct from "./pages/AddProduct";
import ProductAttributeDetails from "./components/detailPage/ProductAttributeDetails";
import ProductDetailpageVertical from "./components/detailPage/ProductDetailpageVertical";
import Prefetch from "./app/Prefetch";
import AgeCalculator from "./pages/age/AgeCalculator";
import Alert from "./pages/alert/Alert";
import AlertPopup from "./pages/popup/tuto-1/AlertPopup";
import Toast from "./pages/alert/Toast";
import ToastNotification from "./pages/popup/toast/ToastNotification";
import { useEffect } from "react";
import { store } from "./app/store";
import { productSlice } from "./app/features/product/productSlice";
import Modal from "./pages/popup/modal/Modal";
import ShowModal from "./pages/popup/modal/ShowModal";
import FormErrorHandler from "./pages/Forms/FormErrorHandler";
import Formvalidation from "./pages/Forms/validation/Formvalidation";
import Caroussel from "./pages/carousselSlider/Caroussel";
import AutoSliderCaroussel from "./pages/carousselSlider/autoSlider/AutoSliderCaroussel";
import Slick from "./pages/carousselSlider/MultiSlide/Slick";
import BreakPoints from "./components/breakPoints/BreakPoints";

function App() {
  useEffect(() => {
    store.dispatch(
      productSlice.util.prefetch("getAllProducts", "productList", {
        force: true,
      })
    );
  }, []);
  return (
    <>
      <Routes>
        <Route element={<Prefetch />}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="attribute" element={<ProductAttributes />} />
            <Route path="details/:id" element={<ProductAttributeDetails />} />
            <Route
              path="detail-vertical/:id"
              element={<ProductDetailpageVertical />}
            />
            <Route path="add-attribute" element={<RegisterAttribute />} />
            <Route path="add-product" element={<AddProduct />} />
            <Route path="product/:prodId" element={<ProductDetails />} />
            <Route
              path="product-attributes/:slug"
              element={<ProductDetails2 />}
            />
            <Route path="select" element={<SelectOption />} />
            {/* complement */}
            <Route path="age" element={<AgeCalculator />} />
            <Route path="alert" element={<Alert />} />
            <Route path="alert-popup-1" element={<AlertPopup />} />
            <Route path="toast" element={<ToastNotification />} />
            <Route path="modal" element={<ShowModal />} />
            <Route path="form" element={<FormErrorHandler />} />
            <Route path="form-validation" element={<Formvalidation />} />
            <Route path="caroussel" element={<Caroussel />} />
            <Route path="auto-slider" element={<AutoSliderCaroussel />} />
            <Route path="slick" element={<Slick />} />
            <Route path="break" element={<BreakPoints />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
