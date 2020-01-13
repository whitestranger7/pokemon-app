import React, { Fragment } from "react";

import "./Home.scss";
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials/Socials";
import HeroBar from "./HeroBar/HeroBar";
import WhoWeAre from "./Slides/WhoWeAre/WhoWeAre";
import OurServices from './Slides/OurServices/OurServices';
import OurClients from './Slides/OurClients/OurClients';

const home = () => {
    return (
        <Fragment>
            <div className="hero_img">
                <Navigation />
                <Socials />
                <HeroBar heroText="Посетите Беларусь с Visa Free и Pokemon" />
            </div>
            <WhoWeAre />
            <OurServices />
            <OurClients />
        </Fragment>
    );
};

export default home;
