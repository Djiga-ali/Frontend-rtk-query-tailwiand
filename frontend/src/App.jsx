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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="attribute" element={<ProductAttributes />} />
          <Route path="add-attribute" element={<RegisterAttribute />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="product/:prodId" element={<ProductDetails />} />
          <Route
            path="product-attributes/:slug"
            element={<ProductDetails2 />}
          />
          <Route path="select" element={<SelectOption />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
