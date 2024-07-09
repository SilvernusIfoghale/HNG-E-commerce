import React, { useState } from "react";
import bar from "/static/icons/bar.png";
import backArrow from "/static/icons/backArrow.png";
import { useNavigate } from "react-router";

function Item(props) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const {
    id,
    productName,
    price,
    productCategory,
    productStock,
    productSold,
    productStars,
    productReview,
    productView1,
    productView2,
    productView3,
    productView4,
    productMain1,
    productMain2,
    productMain3,
    productMain4,
    productFavorite,
    productHome,
  } = props.data;

  const [image, setImage] = useState(productMain1);
  const handleClicked1 = () => {
    setImage(productMain1);
  };

  const handleClicked2 = () => {
    setImage(productMain2);
  };
  const handleClicked3 = () => {
    setImage(productMain3);
  };
  const handleClicked4 = () => {
    setImage(productMain4);
  };

  return (
    <>
      <div className="top-section">
        <div className="top-nav">
          <span onClick={handleBack}>
            <img src={backArrow} alt="" />
          </span>
          <h3>Sneakers Details</h3>
          <span>
            <img src={bar} alt="" />
          </span>
        </div>
        <div className="main">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="sub-section subUse">
        <div className="variant-product">
          <span onClick={handleClicked1}>
            <img src={productView1} alt="" />
          </span>
        </div>
        <div className="variant-product">
          <span onClick={handleClicked2}>
            <img src={productView2} alt="" />
          </span>
        </div>
        <div className="variant-product">
          <span onClick={handleClicked3}>
            <img src={productView3} alt="" />
          </span>
        </div>
        <div className="variant-product">
          <span onClick={handleClicked4}>
            <img src={productView4} alt="" />
          </span>
        </div>
      </div>
    </>
  );
}

export default Item;
