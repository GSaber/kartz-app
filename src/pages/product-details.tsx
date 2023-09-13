import React, {
  FunctionComponent,
  useState,
  useEffect,
  useContext,
} from "react";
import { useParams, Link } from "react-router-dom";
import Product from "../models/product";
import { PRODUCTS } from "../models/mock-product";
import { ShopContext } from "../context/shop-context";

type Params = { id: number };

const ProductDetail: FunctionComponent<Params> = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<number[]>([]);
  const { addToCart, cartItems } = useContext(ShopContext);

  useEffect(() => {
    PRODUCTS.forEach((product) => {
      if (productId === product.id.toString()) {
        setProduct(product);
      }
    });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div className="row ">
          <div className="col s12 m8 offset-m2 ">
            <h2 className="header">{product.title}</h2>
            <div className="card">
              <div className="card-image">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ width: "250px", margin: "0 auto" }}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr>
                        <td>Product</td>
                        <td>
                          <strong>{product.title}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>
                          <strong>{product.description}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>
                          <strong>${product.price}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="card-action ">
                  <button onClick={() => addToCart(product.id)}>
                    Add to cart
                  </button>
                  <Link to="/">Back</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h4 className="center">No product to display !</h4>
      )}
    </div>
  );
};

export default ProductDetail;
