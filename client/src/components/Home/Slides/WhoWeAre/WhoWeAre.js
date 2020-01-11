import React from 'react';

import './WhoWeAre.scss';
import './../Slides.scss';
import Header from './../Header/Header';

const whoWeAre = () => {
    return (
        <div className="slide_container">
            <div className="inner_container">
                <Header title={'Кто мы'}/>
                <div></div>
            </div>
        </div>
    )
};

export default whoWeAre;