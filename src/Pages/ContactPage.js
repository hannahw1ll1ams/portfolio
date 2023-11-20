import React from "react";
import '../css/contactPage.css'
import pdf from "../Documents/HannahWilliamsCV.pdf"



export default function IllustrationsPageContactPage() {
    return (
        <div className="outerContainer">
            <div className='contactContainer'>
                <p>Links</p>
                <p className="mediaLink">hannahw1ll1ams@yahoo.com</p>
                <a className="mediaLink" href="www.linkedin.com/in/hannahw1ll1ams" target="_blank">www.linkedin.com/in/hannahw1ll1ams</a>
                <a className="mediaLink" href="https://github.com/hannahw1ll1ams" target="_blank">https://github.com/hannahw1ll1ams</a>
                
                <a className="mediaLink" href="https://twitter.com/h3nn3hw1ll13ms" target="_blank">https://twitter.com/h3nn3hw1ll13ms</a>
                <a className="mediaLink" href="https://medium.com/footasylum-tech/how-i-got-here-hannah-williams-software-engineer-7068c9216722" target="_blank">Blog post about my journey to becoming a Software Engineer</a>

                <a className="mediaLink" href={pdf}>download CV</a>
            </div>
        </div>
    );
}