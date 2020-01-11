import React from "react";

import "./Arrow.scss";

const arrow = () => {
    return (
        <div className="arrow_container">
            <a href="/#">
                <div className="arrow">
                    <i className="fa fa-chevron-down"></i>
                </div>
            </a>
        </div>
    );
};

export default arrow;
