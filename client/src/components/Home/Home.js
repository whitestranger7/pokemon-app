import React, { Fragment } from "react";

import "./Home.scss";
import Navigation from "./Navigation/Navigation";
import Socials from "./Socials/Socials";
import HeroBar from "./HeroBar/HeroBar";
import WhoWeAre from "./Slides/WhoWeAre/WhoWeAre";

const home = () => {
    return (
        <Fragment>
            <div className="hero_img">
                <Navigation />
                <Socials />
                <HeroBar heroText="Окунись в мир незабываемых путешествий с Pokemon" />
            </div>
            <WhoWeAre />
        </Fragment>
    );
};

export default home;
