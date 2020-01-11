import React, { Component } from "react";
import "@fortawesome/fontawesome-free";

import "./Socials.scss";

class Socials extends Component {
    state = {
        socialsOpacity: ["0", "0", "0"]
    };

    socialHoverEnter = el => {
        let socialsOpacity = [...this.state.socialsOpacity];
        socialsOpacity[el] = "1";
        this.setState({ socialsOpacity });
    };

    socialHoverLeave = el => {
        let socialsOpacity = [...this.state.socialsOpacity];
        socialsOpacity[el] = "0";
        this.setState({ socialsOpacity });
    };

    render() {
        return (
            <div className="homePageSocials">
                <ul>
                    <li>
                        <a
                            href="/#"
                            onMouseEnter={this.socialHoverEnter.bind(this, 0)}
                            onMouseLeave={this.socialHoverLeave.bind(this, 0)}
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <span
                            style={{
                                opacity: this.state.socialsOpacity[0],
                                transform: `scale(${this.state.socialsOpacity[0]})`
                            }}
                        >
                            Instagram
                        </span>
                    </li>
                    <li>
                        <a
                            href="/#"
                            onMouseEnter={this.socialHoverEnter.bind(this, 1)}
                            onMouseLeave={this.socialHoverLeave.bind(this, 1)}
                        >
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        <span
                            style={{
                                opacity: this.state.socialsOpacity[1],
                                transform: `scale(${this.state.socialsOpacity[1]})`
                            }}
                        >
                            Facebook
                        </span>
                    </li>
                    <li>
                        <a
                            href="/#"
                            onMouseEnter={this.socialHoverEnter.bind(this, 2)}
                            onMouseLeave={this.socialHoverLeave.bind(this, 2)}
                        >
                            <i className="fab fa-vk"></i>
                        </a>
                        <span
                            style={{
                                opacity: this.state.socialsOpacity[2],
                                transform: `scale(${this.state.socialsOpacity[2]})`
                            }}
                        >
                            Vk
                        </span>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Socials;
