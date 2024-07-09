import React, { useState } from "react";
import { useNavigate } from "react-router";

const OneProduct = (props) => {
  const navigate = useNavigate();

  const [favorite, setFavorite] = useState(false);
  const handleFavorite = (id) => {
    setFavorite(!favorite);
  };
  const {
    id,
    productName,
    productFavoriteMarked,
    price,
    productView1,
    productView2,
    productView3,
    productView4,
    productMain1,
    productMain2,
    productMain3,
    productMain4,
    productFavorite,
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
  const handleChoice = (id) => {
    navigate("/product", { state: { favorite, id } });
  };

  return (
    <>
      <div className="top-section">
        <div className="main">
          <div className="float-container">
            {favorite == true ? (
              <img
                src={productFavoriteMarked}
                alt=""
                onClick={() => handleFavorite(id)}
              />
            ) : (
              <img
                src={productFavorite}
                alt=""
                onClick={() => handleFavorite(id)}
              />
            )}
          </div>

          <img
            src={image}
            alt=""
            className="image-main"
            onClick={() => handleChoice(id)}
          />
        </div>
      </div>
      <div className="sub-section">
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
        <div className="name-product">
          <span>
            <h4>{productName}</h4>
            <h4>${price}</h4>
          </span>
        </div>
      </div>
    </>
  );
};

export default OneProduct;
