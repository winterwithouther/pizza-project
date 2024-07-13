import React from "react";
import "../css/homepage.css"
import Header from "./header.js"


function HomePage() {

    // const [allPizzas, setAllPizzas] = ([{name: "Pepperoni", price: "5.00"}, {name: "Cheese", price: "5.00"}, {name: "Pineapple", price: "5.00"}, {name: "Sausage", price: "$5.00"}]);

    return(
    <div id="homepage">
        <Header/>
        {/* Header will be inserted here */}
        <div id="homepage-banner">
            <div id="banner-section-1">
                <span id="banner-ad-0">$<span id="banner-ad-0-1">5.99 Each</span></span>
            </div>
            <div id="banner-section-2">
                <span id="banner-ad-1">PIZZA PAIRINGS</span>
                <span id="banner-ad-2">Get any two or more for this hypnotizingly good deal</span>
            </div>
            <div id="banner-section-3">
                <button>ADD AND CUSTOMIZE</button>
            </div>
        </div>
        <div id="homepage-deals-section"></div>
        <div id="homepage-mini-menu">
            <span>EXPLORE OUR MENU</span>
        </div>
        <div id="homepage-footer">
            <div id="footer-buttons-container">
                <button>
                    FIND A DEAL
                </button>
                <button>
                    GO TO THE MENU
                </button>
            </div> 
        </div>
    </div>
    )
}


export default HomePage;