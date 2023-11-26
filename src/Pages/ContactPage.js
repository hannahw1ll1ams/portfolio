import React from "react";
import '../css/contactPage.css'
import pdf from "../Documents/HannahWilliamsCV.pdf"

export default function IllustrationsPageContactPage() {
    return (
        <div className="contactContainer">
            <div className="nameLocation">
                <p>HANNAH WILLIAMS</p>
                <p>LONDON, UK</p>
            </div>

            <div className="contactInformation alignment">
                <div className="block">
                    <div className="alignment">
                        <p>hannahw1ll1ams@yahoo.com</p>
                        <p>+447536015685</p>
                    </div>
                </div>
                <div className="block">
                    <div className="alignment">
                        <a target="_blank" href="https://linkedin.com/in/hannahw1ll1ams" >linkedin.com/in/hannahw1ll1ams</a>
                        <br />
                        <a target="_blank" href="https://github.com/hannahw1ll1ams">github.com/hannahw1ll1ams</a>
                    </div>
                </div>
                <div className="block">
                    <a className="mediaLink" href={pdf}>download CV</a>
                </div>
            </div>
        </div>
    );
}


