import React, { FunctionComponent } from "react";
import ProductList from "./pages/product-list";
import ProductDetail from "./pages/product-details";
import Header from "./components/header";
import Cart from "./pages/cart";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import PageNotFound from "./pages/page-not-found";
import Product from "./models/product";
import { ShopContextProvider } from "./context/shop-context";
import Login from "./pages/login";
import Register from "./pages/Register";

const App: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <ShopContextProvider>
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route
            path="cart"
            element={
              <>
                <Header />
                <Cart />
              </>
            }
          />
          <Route
            path="product/:productId"
            element={
              <>
                <Header />
                <ProductDetail id={0} />
              </>
            }
          />
          <Route
            path="*"
            element={
              <>
                <Header />
                <PageNotFound />
              </>
            }
          />
        </Routes>
      </ShopContextProvider>
    </BrowserRouter>
  );
};

export default App;
