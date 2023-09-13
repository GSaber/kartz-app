import React, { FunctionComponent, useState, useEffect } from "react";
import Product from "../models/product";
import PRODUCTS from "../models/mock-product";
import ProductCard from "../components/product-card";
import Header from "../components/header";

const ProductList: FunctionComponent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  return (
    <>
      <Header />
      <div className="cont">
        <div className="productlist">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
