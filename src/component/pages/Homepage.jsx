import React, { useState } from "react";
import menu from "/static/icons/hamburgerMenu.png";
import logo from "/static/icons/logo.png";
import notify from "/static/icons/notification.png";
import pin from "/static/icons/location.png";
import arrowRt from "/static/icons/ArrowRt.png";
import profile from "/static/icons/profile.png";
import rtArrow from "/static/icons/rightArrow.png";
import search from "/static/icons/search.png";
import adidas from "/static/icons/adidasLogo.png";
import newBalance from "/static/icons/newBalanceLogo.png";
import nike from "/static/icons/nikeLogo.png";
import vans from "/static/icons/vansLogo.png";
import filter from "/static/icons/filter.png";
import task from "/static/icons/task.png";
import display from "/static/images/displayPixs.png";
import { PRODUCTS } from "../ProductData";
import Product from "../Product";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import OneProduct from "../OneProduct";

function Homepage() {
  const id = 1;
  const handleShop = (id) => {
    navigate("/product", { state: { id } });
  };
  const navigate = useNavigate();
  const navLinkStyles = ({ isActive }) => {
    return {
      color: "black",
      cusor: "pointer",
      textDecoration: isActive ? "none" : "none",
      borderBottom: isActive ? "3px solid greenyellow" : "none",
    };
  };
  const [counter, setCounter] = useState(1);
  const handleData = () => {
    if (counter == 4) {
      setCounter((currentCounter) => (currentCounter = 1));
    } else {
      setCounter((currentCounter) => currentCounter + 1);
    }
  };
  const dataId = counter;
  const product = PRODUCTS.filter((product) => product.id == dataId);
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="toggle-container">
            <img src={menu} alt="" />
          </div>
          <div className="logo-container">
            <span className="logo">
              <img src={logo} alt="" />
            </span>
            <span className="nav">
              <NavLink style={navLinkStyles} to="/men">
                Men's Shoes
              </NavLink>
              <NavLink style={navLinkStyles} to="/women">
                Women's Shoes
              </NavLink>
              <NavLink style={navLinkStyles} to="/">
                New Arrivals
              </NavLink>
              <NavLink style={navLinkStyles} to="/collections">
                Collections
              </NavLink>
              <NavLink style={navLinkStyles} to="/sale">
                Sale
              </NavLink>
            </span>
          </div>
          <div className="notification-container">
            <img src={notify} alt="" className="img-notify" />
            <img src={profile} alt="" className="img-profile" />
          </div>
        </div>

        <div className="search-address">
          {/* Search */}
          <div className="search-section">
            <span>
              <img src={search} alt="" />
            </span>
            <input type="search" placeholder="Search for your drops.." />
          </div>
          {/* Address */}
          <div className="location">
            <div className="group">
              <img src={pin} alt="" />
              <p>
                <span className="ship">Ship to</span>
                <span className="abesan"> Abesan Estate, Block 3, no 27</span>
              </p>
            </div>
            <span>
              <img src={rtArrow} alt="" />
            </span>

            <img className="custom" src={filter} alt="" />
            <img className="custom" src={task} alt="" />
          </div>
        </div>

        <div className="categories">
          <div className="category">
            <span>
              <img src={adidas} alt="" />
            </span>
          </div>
          <div className="category">
            <span>
              <img src={newBalance} alt="" />
            </span>
          </div>
          <div className="category">
            <span>
              <img src={nike} alt="" />
            </span>
          </div>
          <div className="category">
            <span>
              <img src={vans} alt="" />
            </span>
          </div>
        </div>
        <div>
          <p className="arrival-des">New Arrivals</p>
        </div>

        <div className="flex">
          <div className="whats-new">
            <div className="left-section">
              <img className="img-main" src={display} alt="" />
            </div>
            <div className="right-section">
              <p className="new-text">Year-End Sale</p>
              <p className="new-text-up">Up to 90%</p>
              <button onClick={() => handleShop(id)}>Shop Now</button>
            </div>
          </div>

          <div className="desktop-view">
            <OneProduct data={product[0]} key={product[0].id} />
          </div>
          <div className="green-container">
            <div className="green-arrow" onClick={handleData}>
              <img src={arrowRt} alt="" />
            </div>
          </div>
        </div>

        <div className="new-arrival">
          <p className="arrival-text">New Arrivals</p>
          <div className="products-container">
            {PRODUCTS.map((product) => (
              <Product data={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
