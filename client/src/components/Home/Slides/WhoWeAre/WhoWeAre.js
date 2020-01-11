import React from "react";
import "@fortawesome/fontawesome-free";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./WhoWeAre.scss";
import "./../Slides.scss";
import Header from "./../Header/Header";

const whoWeAre = () => {
    return (
        <div className="slide_container">
            <Header title={"Кто мы"} />
            <div className="inner_container">
                <div className="header_description">
                    <div className="master">
                        <h1>
                            Мы - диномично развивающаяся компания в сфере
                            туризма, продажи билетов, организации отдыхов
                            практически любых видов развлекательных услуг.
                        </h1>
                    </div>
                    <div className="sub">
                        <h4>
                            Мы используем современные, индивидуальные подходы
                            для каждого клиента. Мы гарантируем вам незабываемый
                            опыт! Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit. Vivamus orci eros, ornare non
                            maximus rhoncus, tincidunt id felis. Morbi in
                            consequat nisl. Donec viverra ex non enim ultrices,
                            eget consequat elit tincidunt. Vivamus quis vehicula
                            lacus. Maecenas ac erat vitae ante efficitur
                            convallis sit amet sit amet odio. In lobortis
                            aliquam eros, eget molestie nulla faucibus vitae.
                        </h4>
                    </div>
                </div>
            </div>
            <Container className="advantages">
                <Row>
                    <Col>
                        <div className="header_container">
                            <div className="icon">
                                <i className="fas fa-dollar-sign"></i>
                            </div>
                            <div className="title">
                                <h5>Лучшие цены</h5>
                            </div>
                        </div>
                        <div className="advantage_description">
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec
                                velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula. Praesent sapien
                                massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla porttitor accumsan tincidunt. Cras
                                ultricies ligula sed magna dictum porta.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="header_container">
                            <div className="icon">
                                <i className="fas fa-piggy-bank"></i>
                            </div>
                            <div className="title">
                                <h5>Постоянные скидки</h5>
                            </div>
                        </div>
                        <div className="advantage_description">
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec
                                velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula. Praesent sapien
                                massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla porttitor accumsan tincidunt. Cras
                                ultricies ligula sed magna dictum porta.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="header_container">
                            <div className="icon">
                                <i className="fas fa-clock"></i>
                            </div>
                            <div className="title">
                                <h5>Скорость работы</h5>
                            </div>
                        </div>
                        <div className="advantage_description">
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec
                                velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula. Praesent sapien
                                massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla porttitor accumsan tincidunt. Cras
                                ultricies ligula sed magna dictum porta.
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className="header_container">
                            <div className="icon">
                                <i className="fas fa-globe-europe"></i>
                            </div>
                            <div className="title">
                                <h5>Возможности</h5>
                            </div>
                        </div>
                        <div className="advantage_description">
                            <p>
                                Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Donec
                                velit neque, auctor sit amet aliquam vel,
                                ullamcorper sit amet ligula. Praesent sapien
                                massa, convallis a pellentesque nec, egestas non
                                nisi. Nulla porttitor accumsan tincidunt. Cras
                                ultricies ligula sed magna dictum porta.
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default whoWeAre;
