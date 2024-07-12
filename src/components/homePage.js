import React from "react";
import Header from "./header.js"

function HomePage() {

    // const [allPizzas, setAllPizzas] = ([{name: "Pepperoni", price: "5.00"}, {name: "Cheese", price: "5.00"}, {name: "Pineapple", price: "5.00"}, {name: "Sausage", price: "$5.00"}]);

    return(
    <div id="homePageLayout">
        <Header/>
        {/* Header will be inserted here */}
        <div id="homePageBanner"></div>
        <div id="homePageDealsSection"></div>
        <div id="homePageMiniMenu"></div>
        <div id="homePageFooter"></div>
    </div>
    )
}


export default HomePage;