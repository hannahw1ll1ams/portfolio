import React from "react";
import '../css/contactPage.css'
import pdf from "../Documents/HannahWilliamsCV.pdf"

export default function IllustrationsPageContactPage() {
    return (
        <div class="parent">
            <div className="nameLocation alignment">
                <p>HANNAH WILLIAMS</p>
                <p>LONDON, UK</p>
            </div>

            <div className="email alignment contactText">
                <p>hannahw1ll1ams@yahoo.com</p>
                <p>+447536015685</p>
            </div>

            <div className="github alignment contactText">
                <a target="_blank" href="https://github.com/hannahw1ll1ams">github.com/hannahw1ll1ams</a>
                <a target="_blank" href="https://linkedin.com/in/hannahw1ll1ams" >linkedin.com/in/hannahw1ll1ams</a>
            </div>

            <div className="cv alignment contactText">
                <a className="mediaLink" href={pdf}>download CV</a>
                <a target="_blank" className="mediaLink" href="https://medium.com/footasylum-tech/how-i-got-here-hannah-williams-software-engineer-7068c9216722">read more about my journey to design and developer here</a>
            </div>
            
        </div>
    );
}


