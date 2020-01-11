import React from 'react';

import './Navigation.scss';
import navLogo from './../../../assets/img/logo.png';

const logo = () => {
    return (
        <div className="logo">
            <a href="/#"><img src={navLogo} alt="logo"></img></a>
        </div>
    )
}

export default logo;