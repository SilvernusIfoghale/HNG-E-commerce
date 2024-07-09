import React, { useEffect, useState } from "react";
import circleRing from "/static/images/circleRing.png";
import blackHeart from "/static/icons/blackHeart.png";
import redHeart from "/static/icons/redHeart.png";
import cart from "/static/icons/cart.png";
import home from "/static/icons/home.png";
import star from "/static/icons/vectorStar.png";
import { PRODUCTS } from "../ProductData";
import Item from "../Item";
import { useLocation, useNavigate } from "react-router-dom";

function ChoiceProduct() {
  const { state } = useLocation();
  //   console.log(state.id);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  const handleSuccess = () => {
    navigate("/success");
  };

  const [success, SetSuccess] = useState(false);

  const handleAddToCart = () => {
    SetSuccess(true);
    setTimeout(() => {
      SetSuccess(false);
    }, 2000);
  };

  const [checkFavourite, setCheckFovourite] = useState(false);
  const dataId = state.id;
  const product = PRODUCTS.filter((product) => product.id == dataId);

  const [favorite, setFavorite] = useState(state.favorite);
  const handleFavorite = () => {
    if (!favorite) {
      setCheckFovourite(true);
      console.log(favorite);
      console.log(checkFavourite);
      setTimeout(() => {
        setCheckFovourite(false);
      }, 2000);
    }
    setFavorite(!favorite);
  };

  //   useEffect(() => {
  //     setFavorite(state.favorite);
  //     console.log(state.favorite);
  //   }, []);

  return (
    <>
      <div className="container">
        {<Item data={product[0]} />}
        <div className="section-description">
          <div className="top-head">
            <h3>LeBron 20 Basketball Shoes</h3>
            <span onClick={handleFavorite}>
              {favorite == true ? (
                <img src={redHeart} alt="" />
              ) : (
                <img src={blackHeart} alt="" />
              )}
            </span>
          </div>
          <p className="text-price">$200</p>
        </div>
        <div className="section-details">
          <p>5 Pair left</p>
          <p>Sold 50</p>

          <div className="review">
            <span>
              <img src={star} alt="" />
            </span>
            <p>
              4.7 <span className="rv-bold"> (69 reviews) </span>
            </p>
          </div>
        </div>

        {success && <p className="addSuccess">Added to Cart</p>}
        {checkFavourite && <p className="addSuccess">Added to Favourites</p>}

        <div className="footer">
          <div className="add-cart">
            <div className="add-btn" onClick={handleAddToCart}>
              <img src={cart} alt="" />
              <p>Add to Cart</p>
            </div>
            <div className="Home" onClick={handleBack}>
              <img src={home} alt="" />
            </div>
            <div className="buy-now" onClick={handleSuccess}>
              <p>Buy Now</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChoiceProduct;
