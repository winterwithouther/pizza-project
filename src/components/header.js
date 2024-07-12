import React from "react";
import "../css/header.css"

function Header() {

    return(<div id="header-container">
        <div id="first-header-container">
            <div id="logo-container">
                <span>IMAGE LOGO</span>
            </div>
            <span>START YOUR ORDER</span>
        </div>
        <div id="second-header-container">
            <div id="second-header-links-container">
                <span>MENU</span>
                <span>DEALS</span>
                <span>REWARDS</span>
            </div>
        </div>
    </div>)
}

export default Header;