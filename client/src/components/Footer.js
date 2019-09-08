import React from "react";
import "../css/Footer.css"
import screenIsMobile from "../hoc/isMobile"
const Footer=(props)=>{
    return (
        <React.Fragment>
            {props.isMobile && <div className="footer-container"></div>}
        </React.Fragment>
         
    )
}
export default screenIsMobile(Footer);