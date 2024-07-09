import React from "react";
import circleRing from "../../public/static/images/circleRing.png";

function ProductItem(props) {
  console.log("h1 tag");
  return (
    <>
      <div className="top-section">
        <div className="header">
          <span>img</span>
          <h3>Sneakers Details</h3>
          <span>img</span>
        </div>
        <div className="main">
          <span>
            <img src="" alt="" />
          </span>
          <span className="circle">
            <img src={circleRing} alt="" />
          </span>
        </div>
      </div>
      <div className="sub-section">
        <div className="variant-product">
          <span>img</span>
        </div>
        <div className="variant-product">
          <span>img</span>
        </div>
        <div className="variant-product">
          <span>img</span>
        </div>
        <div className="variant-product">
          <span>img</span>
        </div>
      </div>

      <div className="section-description">
        <div className="top-head">
          <h3>LeBron 20 Basketball Shoes</h3>
          <p>heart</p>
        </div>
        <p className="text-price">$200</p>
      </div>
      <div className="section-details">
        <p>5 Pair left</p>
        <p>Sold 50</p>

        <div className="review">
          <span>img</span>
          <p>
            4.7 <span className="rv-bold"> (69 reviews) </span>
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="add-cart">
          <div className="add-btn">
            img <p>Add to Cart</p>
          </div>
          <div className="Home">
            <p>Home</p>
          </div>
          <div className="buy-now">
            <p>Buy Now</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
