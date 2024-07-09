import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Product(props) {
  const [check, setCheck] = useState(true);
  const {
    id,
    productName,
    price,
    productFavorite,
    productFavoriteMarked,
    productHome,
  } = props.data;

  const navigate = useNavigate();
  const [favorite, setFavorite] = useState(false);
  const handleFavorite = (id) => {
    setFavorite(!favorite);
  };

  const handleChoose = (id) => {
    navigate("/product", { state: { favorite, id } });
  };

  return (
    <>
      <div className="products">
        <div className="product">
          <span onClick={() => handleChoose(id)}>
            <img src={productHome} alt="" />
          </span>
          <span className="heart-icon">
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
          </span>
        </div>

        <div className="product-text">
          <p className="p-text">
            {productName}
            <br />${price}
          </p>
        </div>
      </div>
    </>
  );
}

export default Product;
