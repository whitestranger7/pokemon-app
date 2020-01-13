import React from "react";
import { Slide } from "react-slideshow-image";

import "./../Slides.scss";
import "./OurClients.scss";

const ourClients = () => {
    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
        onChange: (oldIndex, newIndex) => {
            console.log(`slide transition from ${oldIndex} to ${newIndex}`);
        }
    };

    return (
        <div className="slide_container">
            <div className="inner_container">
                <div className="clients_header">
                    <h2>Что о нас говорят клиенты...</h2>
                </div>
                <div className="slide-container">
                    <Slide {...properties} arrows={false}>
                        <div className="each-slide">
                            <div className="client first">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="client second">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="client first">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="client second">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div className="client first">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="client second">
                                <div className="client_description">
                                    <p>
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </p>
                                </div>
                                <div className="client_credentials">
                                    <div className="client_photo"></div>
                                    <div className="client_name">
                                        <h5>Kristina</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default ourClients;
