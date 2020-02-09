import React from 'react';

import './Navigation.scss';
import NavBar from './NavBar/NavBar';
import Logo from './Logo';

const navigation = () => {
    return (
        <nav className='nav'>
            <div className='left_side'>
                <Logo />
            </div>
            <div className='right_side'>
                <NavBar />
            </div>
        </nav>
    );
};

export default navigation;
