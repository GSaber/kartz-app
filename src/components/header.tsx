import React, { FunctionComponent, useContext, useEffect } from "react";
import "./header.scss";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import { BsFillCartFill } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
const Header: FunctionComponent = () => {
  const { countItems } = useContext(ShopContext);
  const badge = countItems();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <>
      <div className="navbar">
        <nav>
          <div className="nav-wrapper ">
            <Link to="/" className="logo">
              KARTZ
            </Link>
            <ul id="nav-mobile ">
              <li>
                <Link to="products">Products</Link>
              </li>
              <li>
                <Link to="cart">
                  your kart
                  <BsFillCartFill style={{ marginLeft: "5px" }} />
                  {badge > 0 && <span className="new badge">{badge}</span>}
                </Link>
              </li>
              <li className="signout" onClick={handleSignOut}>
                Signout
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;
