import React from "react";
import "@fortawesome/fontawesome-free";

import "./NavBar.scss";

const navBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__left-side">
                <ul>
                    <li>
                        <a href="/#">О нас</a>
                    </li>
                    <li>
                        <a href="/#">Новости</a>
                    </li>
                    <li>
                        <a href="/#">Visa free</a>
                    </li>
                    <li>
                        <a href="/#">Контакты</a>
                    </li>
                </ul>
            </div>
            <div className="navBar__right-side">
                <div className="authentication_container">
                    <div className="auth__container--login">
                        <div className="login">
                            <a href="/#">Log in</a>
                        </div>
                    </div>
                    <div className="auth__container--sign-up">
                        <div className="sign-up">
                            <a href="/#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default navBar;
