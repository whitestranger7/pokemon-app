import React from 'react';
import '@fortawesome/fontawesome-free';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './WhoWeAre.scss';
import './../Slides.scss';
import Header from './../Header/Header';

const whoWeAre = () => {
    return (
        <div className='slide_container'>
            <Header title={'Кто мы'} />
            <div className='inner_container'>
                <div className='header_description'>
                    <div className='master'>
                        <h1>
                            Мы - диномично развивающаяся компания в сфере
                            туризма, продажи билетов, организации отдыхов
                            практически любых видов развлекательных услуг.
                        </h1>
                    </div>
                    <div className='sub'>
                        <h4>
                            Мы используем современные, индивидуальные подходы
                            для каждого клиента. Мы гарантируем Вам незабываемый
                            отдых! С радостью найдем Вам билет в любой уголок
                            Европы. Наша компания предлагает качественный отдых
                            в собственных люксовых апартаментах по разумной
                            цене. Ведь мы ценим Ваш отдых! Мы с огромным
                            удовольствием составим Вам программу мероприятий в
                            Гродно и не только.. Наша компания постоянно
                            совершенствуется и повышает уровень обслуживания
                            любимых клиентов!
                        </h4>
                    </div>
                </div>
            </div>
            <Container className='advantages'>
                <Row>
                    <Col>
                        <div className='header_container'>
                            <div className='icon'>
                                <i className='fas fa-dollar-sign'></i>
                            </div>
                            <div className='title'>
                                <h5>Лучшие цены</h5>
                            </div>
                        </div>
                        <div className='advantage_description'>
                            <p>
                                Только у нас Вы сможете приобретать скидку до
                                15% на каждую поездку в Белосток, покрутив
                                колесо удачи! Только у нас каждая 6-я поездка в
                                Белосток бесплатная. Постоянным клиентам
                                предоставляется скидка на билеты в города
                                Европы! Приятный отдых по сниженным ценам!
                                Люксовые апартаменты в центре города приятно
                                удивят своей стоимостью!
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='header_container'>
                            <div className='icon'>
                                <i className='fas fa-piggy-bank'></i>
                            </div>
                            <div className='title'>
                                <h5>Постоянные скидки</h5>
                            </div>
                        </div>
                        <div className='advantage_description'>
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
                        <div className='header_container'>
                            <div className='icon'>
                                <i className='fas fa-clock'></i>
                            </div>
                            <div className='title'>
                                <h5>Скорость работы</h5>
                            </div>
                        </div>
                        <div className='advantage_description'>
                            <p>
                                Мастерство и профессионализм наших сотрудников
                                поможет вам быстро определиться с местом отдыха!
                                Купить или забронировать билет? Легко и с
                                удовольствием! Хотите пригласить в гости
                                родственника/друга/просто хорошего человека с
                                GrodnoVisaFree, тогда Вам в "Покемон". В течении
                                считанных минут мы оформим разрешение на въезд в
                                Беларусь!
                            </p>
                        </div>
                    </Col>
                    <Col>
                        <div className='header_container'>
                            <div className='icon'>
                                <i className='fas fa-globe-europe'></i>
                            </div>
                            <div className='title'>
                                <h5>Услуги</h5>
                            </div>
                        </div>
                        <div className='advantage_description'>
                            <p>
                                Бюро "Покемон" постоянно расширяет список
                                предоставляемых услуг. Стремясь создать для
                                путешествующего клиента идеальные условия мы
                                используем любые возможности. Довольный клиент -
                                это то, ради чего мы работаем!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default whoWeAre;
