import React from 'react';

import './HeroBar.scss';
import Button from './../Buttons/Buttons';
import Arrow from './Arrow/Arrow';

const heroBar = (props) => {
    return (
        <div className="heroBar">
            <div className="heroBar_bg">
                <h1>{props.heroText}</h1>
                <Button btn={'hero_btn'} />
                <Arrow />
            </div>
        </div>
    )
}

export default heroBar;