import React from "react";
import '../../css/Sub-pages/app-design.css'
import '../../css/text-shared.css'
import requestsLogoRounded from '../../images/appDesign/requestsRounded.png'
import selfServeLogoRounded from '../../images/appDesign/selfServeRounded.png'

import selfServeApp from '../../images/appDesign/self-serve.png'
import footwearApp from '../../images/appDesign/footwear.png'
import requestsApp from '../../images/appDesign/requests.png'

import selfserve1 from '../../images/appDesign/otherApps-04.png'
import selfserve2 from '../../images/appDesign/otherApps-05.png'
import selfserve3 from '../../images/appDesign/otherApps-06.png'
import selfserve4 from '../../images/appDesign/otherApps-07.png'

import frapp1 from '../../images/appDesign/frapp-08.png'
import frapp2 from '../../images/appDesign/frapp-09.png'
import frapp3 from '../../images/appDesign/frapp-10.png'

export default function AppDesignsPage() {
    return (
        <>
            <p className="description">
                Designed ux flows, logos, and branding for a number of in-house and customer facing apps.
            </p>
            <div className="appDesignContainer">
                    <div className="topText">
                        <h1>APP DESIGN</h1>
                        <h1>2023</h1>
                    </div>
                    <div className="logoImageContainer">
                        <img className="appLogoDesign" src= {selfServeLogoRounded} alt='selfServeLogo'/>
                        <img className="appLogoDesign" src= {requestsLogoRounded} alt='requestsLogo'/>
                    </div>
                    <div className="bottomText">
                        <p className="imageKeyWords">two logos for two apps. the left is the customer facing Self-Serve which offers multiple services including click and collect, fitting room and footwear, where the customer can request different sizes and see in real time the status of their requests. right is the logo for store staff's Requests app where they then interact with the customer's shouts.</p>
                        <h1></h1>
                    </div>
            </div>

            <div className="clickCollectContainer">
                <div className="topText">
                    <h1>CLICK AND COLLECT (SELF-SERVE)</h1>
                    <h1>2023</h1>
                </div>
                <img className="omnichannelWidth" src= {selfServeApp} alt='omnichannelGraphic'/>
                <div className="bottomText">
                    <p className="imageKeyWords">worked with marketing to keep app in line with footasylum's new branding, mainly the green pixel.</p>
                    <h1></h1>
                </div>
            </div>

            <div className="footwearContainer">
                <div className="topText">
                    <h1>FOOTWEAR (SELF-SERVE)</h1>
                    <h1>2023</h1>
                </div>
                <img className="omnichannelWidth" src= {footwearApp} alt='omnichannelGraphic'/>
                <div className="bottomText">
                    <p className="imageKeyWords">re-used components between app's to make sure they all had the same visual language.</p>
                    <h1></h1>
                </div>
            </div>

            <div className="requestsContainer">
                <div className="topText">
                    <h1>REQUESTS</h1>
                    <h1>2023</h1>
                </div>
                <img className="omnichannelWidth" src= {requestsApp} alt='omnichannelGraphic'/>
                <div className="bottomText">
                    <p className="imageKeyWords">colour distinguising between shout request statuses for different products</p>
                    <h1></h1>
                </div>
            </div>

            <p className="description">
                Frapp is a retail app that originially was created to replace staff radio's to make calls for sizes to be brought to the shop floor. The app allows you to login as either shop floor or store room, create shouts for sizes, then update the shout as it progresses throughout its journey of claimed, sent, cancelled, returned. In subsequent iterations functionality of basket payments, ship to store, returns, loyalty schemes were introduced.
            </p>

            <div className="frappContainer">
                
                <div className="topText">
                    <h1>FRAPP</h1>
                    <h1>2019-22</h1>
                </div>
                <img className="omnichannelWidth" src= {frapp2} alt='frapp1'/>
                <div className="inbetweenBottomText">
                    <p className="imageKeyWords">login flow / creating 'shouts' for sizes and adding products to baskets</p>
                    <h1></h1>
                </div>
            </div>

            <div className="frappContainer">
                <img className="omnichannelWidth" src= {frapp1} alt='frapp2'/>
                <div className="inbetweenBottomText">
                    <p className="imageKeyWords">checkout flow</p>
                    <h1></h1>
                </div>
            </div>

            <div className="frappContainer">
                <img className="omnichannelWidth" src= {frapp3} alt='frapp3'/>
                <div className="bottomText">
                    <p className="imageKeyWords">delivery / shipping flow</p>
                    <h1></h1>
                </div>
            </div>

            <p className="description">
                Sevenstore app for in-house use by staff to offer some of the functionalities of Frapp but allowed us to refine and tailor to Seven's particular shopping journey, in the Sevenstore branding.
            </p>

            <div className="sevenContainer">
                <div className="topText">
                    <h1>SEVENSTORE (IN-HOUSE)</h1>
                    <h1>2023</h1>
                </div>
                <img className="omnichannelWidth" src= {selfserve3} alt='omnichannelGraphic'/>
                <div className="inbetweenBottomText">
                    <p className="imageKeyWords">login / search product</p>
                    <h1></h1>
                </div>
            </div>
            <div className="sevenContainer">
                <img className="omnichannelWidth" src= {selfserve4} alt='omnichannelGraphic'/>
                <div className="inbetweenBottomText">
                    <p className="imageKeyWords">basket discounts</p>
                    <h1></h1>
                </div>
            </div>
            <div className="sevenContainer">
                <img className="omnichannelWidth" src= {selfserve1} alt='omnichannelGraphic'/>
                <div className="inbetweenBottomText">
                    <p className="imageKeyWords">checkout flow with emails and terminal selection</p>
                    <h1></h1>
                </div>
            </div>
            <div className="sevenContainer">
                <img className="omnichannelWidth" src= {selfserve2} alt='omnichannelGraphic'/>
                <div className="bottomText">
                    <p className="imageKeyWords">shipping / delivery</p>
                    <h1></h1>
                </div>
            </div>
        </>
    );
}