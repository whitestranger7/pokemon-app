import React from "react";

import "./Buttons.scss";

const buttons = props => {
    let button = null;
    if (props.btn === "hero_btn") {
        button = (
            <button class="learn-more">
                <span class="circle">
                    <span class="icon arrow"></span>
                </span>
                <span class="button-text">Learn More</span>
            </button>
        );
    }

    return <div className="btn">{button}</div>;
};

export default buttons;
