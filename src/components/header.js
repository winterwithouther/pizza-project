import React from "react";
import "../css/header.css"
import pizzaPalsLogo from "../images/pizza-logo.png";
import shoppingCart from "../images/shopping-cart.png";


function Header() {

    return(
    <div id="header-container">
        <div id="first-header-container">
            <div id="logo-container">
                {/* <span>IMAGE LOGO</span> */}
                
                <img src={pizzaPalsLogo} alt="pizza-pals-logo"/>
            </div>
            <span id="start-order">START YOUR ORDER</span>
        </div>
        <div id="second-header-container">
            <div id="second-header-links-container">
                <span>MENU</span>
                <span>DEALS</span>
                <span>REWARDS</span>
            </div>
            <div id="second-header-cart-container">
                <img id="cart" src={shoppingCart} alt="shopping-cart"/>
            </div>
        </div>
    </div>
    )
}

export default Header;