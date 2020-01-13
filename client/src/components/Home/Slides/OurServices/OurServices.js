import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./../Slides.scss";
import "./OurServices.scss";
import Header from "./../Header/Header";

const ourServices = () => {
    return (
        <div className="services_container">
            <div className="slide_container">
                <Header title={"Наши услуги"} />
                <div className="inner_container">
                    <div className="header_description">
                        <h5>
                            Vivamus orci eros, ornare non maximus rhoncus,
                            tincidunt id felis. Morbi in consequat nisl. Donec
                            viverra ex non enim ultrices, eget consequat elit
                            tincidunt. Vivamus quis vehicula lacus.
                        </h5>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Безвизовый въезд
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Автобусные туры
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Проживание
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Индивидуальный отдых
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Организация экскурсий
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className="services_col_container">
                                    <div className="header">
                                        Отдых на море
                                    </div>
                                    <div className="description">
                                        Vivamus orci eros, ornare non maximus
                                        rhoncus, tincidunt id felis. Morbi in
                                        consequat nisl. Donec viverra ex non
                                        enim ultrices, eget consequat elit
                                        tincidunt. Vivamus quis vehicula lacus.
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default ourServices;
