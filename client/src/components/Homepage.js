import React from "react";
import "../css/HomePage.css"
import CarouselView from "./Carousel";
import Slider from "./Slider"

function renderSliders() {
    const props=[{heading:"MostViewed",
        name:"mostViewed"
    },{heading:"New In Anime",name:"anime"}];

    return props.map((value,i)=> {return(
        <React.Fragment key={i}>
             <h3 className="heading" id="most-viewed">{value.heading}</h3>
        <Slider  sliderType={value.name} />
        </React.Fragment>
    )}
    )
}
const Homepage=()=>{
    return(
        <div className="homepage-container">
            <h3 className="heading">Just In</h3>
            <CarouselView />
           {renderSliders()}
            </div>
    )
} 
export default Homepage;