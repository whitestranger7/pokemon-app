import React from 'react';
import '@fortawesome/fontawesome-free';
import { Link } from 'react-router-dom';

import './NavBar.scss';

const navBar = props => {
    return (
        <div className='navBar'>
            <div className='navBar__left-side'>
                <ul>
                    <li>
                        <Link to='/#'>О нас</Link>
                    </li>
                    <li>
                        <Link to='/#'>Новости</Link>
                    </li>
                    <li>
                        <Link to='/#'>Visa Free</Link>
                    </li>
                    <li>
                        <Link to='/#'>Контакты</Link>
                    </li>
                </ul>
            </div>
            <div className='navBar__right-side'>
                <div className='authentication_container'>
                    <div className='auth__container--login'>
                        <Link to='/login'>
                            <button className='login'>Log In</button>
                        </Link>
                    </div>
                    <div className='auth__container--sign-up'>
                        <Link to='/signup'>
                            <button className='sign-up'>Sign Up</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navBar;
