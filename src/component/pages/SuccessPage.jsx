import React from "react";
import logo from "/static/icons/logo.png";
import good from "/static/icons/good.png";
import backArrow from "/static/icons/backArrow.png";
import { useNavigate } from "react-router";
function SuccessPage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <div className="success-header">
        <div className="toggle-success">
          <img onClick={handleBack} src={backArrow} alt="" />
        </div>
        <div className="logo-container">
          <span className="logo-success">
            <img src={logo} alt="" />
          </span>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
      <div className="successScreen">
        <div className="successContainer">
          <div className="good-container">
            <img src={good} alt="" />
          </div>
          <p>Successfully added to Cart</p>
        </div>
      </div>
    </>
  );
}

export default SuccessPage;
