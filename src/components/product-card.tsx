import React, {
  FunctionComponent,
  useEffect,
  useState,
  useContext,
} from "react";
import Product from "../models/product";
import "./products-card.scss";
import PRODUCTS from "../models/mock-product";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { BsFillCartFill } from "react-icons/bs";

type Props = {
  product: Product;
  border?: string;
};

const ProductCard: FunctionComponent<Props> = ({
  product,
  border = "1px solid #616161 ",
}) => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const cartItemsAmount = cartItems[product.id];
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(PRODUCTS);
  }, []);

  const goToProduct = (id: number) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="productcard">
        <div className="card-image" onClick={() => goToProduct(product.id)}>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="cardcontent">
          <p
            className="pointer underline"
            onClick={() => goToProduct(product.id)}
          >
            {product.title}
          </p>
          <p className="price">${product.price}</p>
          <p className="rating">{product.rating}/5</p>
        </div>
        <button className="action " onClick={() => addToCart(product.id)}>
          <BsFillCartFill style={{ marginRight: "5px" }} />
          <a>Add to cart {cartItemsAmount > 0 && <>({cartItemsAmount})</>}</a>
        </button>
      </div>
    </>
  );
};

export default ProductCard;
