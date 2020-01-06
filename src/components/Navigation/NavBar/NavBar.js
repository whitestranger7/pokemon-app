import React from 'react';

import './NavBar.css';

const navBar = () => {
    return (
        <div className='navBar'>
            <ul>
                <li><a href="/#">News</a></li>
                <li><a href="/#">About</a></li>
                <li><a href="/#">Visa Free</a></li>
                <li><a href="/#">Contact us</a></li>
            </ul>
        </div>
    )
}

export default navBar;