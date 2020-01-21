import React, { Fragment } from "react";
import "@fortawesome/fontawesome-free";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Footer.scss";

const footer = () => {
    return (
        <Fragment>
            <div className="info_section">
                <Container className="footer__container--first">
                    <Row>
                        <Col>
                            <div>
                                <div className="icon">
                                    <i className="fas fa-phone"></i>
                                </div>
                                <div className="footer__icon--desc">
                                    <div className="main_desc">Contact US</div>
                                    <div className="sub_desc">
                                        <p>+375 (29) 781-44-01</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div className="icon">
                                    <i className="fas fa-envelope-open"></i>
                                </div>
                                <div className="footer__icon--desc">
                                    <div className="main_desc">E-Mail</div>
                                    <div className="sub_desc">
                                        <p>grodnopokemon@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <div className="icon">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="footer__icon--desc">
                                    <div className="main_desc">Location</div>
                                    <div className="sub_desc">
                                        <p>vulica Elizy Ažeška 45, Grodno</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="footer__container--second">
                    <Row>
                        <Col sm={8}>
                            <div className="footer__socials">
                                <div className="footer__socials--instagram">
                                    <a href="/#">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                </div>
                                <div className="footer__socials--facebook">
                                    <a href="/#">
                                        <i className="fab fa-facebook-square"></i>
                                    </a>
                                </div>
                                <div className="footer__socials--vk">
                                    <a href="/#">
                                        <i className="fab fa-vk"></i>
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col sm={4}>
                            &#9400; 2020 &laquo;Покемон&raquo;
                        </Col>
                    </Row>
                </Container>
            </div>
        </Fragment>
    );
};

export default footer;
