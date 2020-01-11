import React from 'react';

import './NavBar.scss';

const navBar = () => {
    return (
        <div className='navBar'>
            <ul>
                <li><a href="/#">Новости</a></li>
                <li><a href="/#">Visa free</a></li>
                <li><a href="/#">О нас</a></li>
                <li><a href="/#">Контакты</a></li>
            </ul>
        </div>
    )
}

export default navBar;