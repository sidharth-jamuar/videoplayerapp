import React from "react";
import "../css/HomePage.css"
import CarouselView from "./Carousel";
import Slider from "./Slider"
const Homepage=()=>{
    return(
        <div className="homepage-container">
            <h3 className="heading">Just In</h3>
            <CarouselView />
            <h3 className="heading" id="most-viewed">Most Viewed</h3>
            <Slider />
            </div>
    )
} 
export default Homepage;