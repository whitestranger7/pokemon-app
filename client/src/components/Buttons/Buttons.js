import React from "react";

import "./Buttons.scss";

const buttons = props => {
    let button = null;
    if (props.btn === "hero_btn") {
        button = (
            <button className="learn-more">
                <span className="circle">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Подробнее</span>
            </button>
        );
    }

    return <div className="btn">{button}</div>;
};

export default buttons;
