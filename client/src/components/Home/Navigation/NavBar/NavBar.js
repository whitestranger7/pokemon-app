import React from 'react';
import "@fortawesome/fontawesome-free";

import './NavBar.scss';

const navBar = () => {
    return (
        <div className='navBar'>
            <ul>
                <li><a href="/#">О нас</a></li>
                <li><a href="/#">Новости</a></li>
                <li><a href="/#">Visa free</a></li>
                <li><a href="/#">Контакты</a></li>
                <li><a href="/#"><i className="fas fa-user"></i></a></li>
            </ul>
        </div>
    )
}

export default navBar;