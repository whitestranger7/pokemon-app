import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './../Slides.scss';
import './OurServices.scss';
import Header from './../Header/Header';

const ourServices = () => {
    return (
        <div className='services_container'>
            <div className='slide_container'>
                <Header title={'Наши услуги'} />
                <div className='inner_container'>
                    <div className='header_description'>
                        <h5>
                            Туристическое бюро "Покемон" обладает широким
                            спектром услуг и неограниченными возможностями
                            организации вашего досуга! Приятные цены и
                            приветливый персонал удивят вас с первой минуты
                            общения! Огромное количество скидок, акций и
                            предложений привлекают туристов именно к нам!
                        </h5>
                    </div>
                    <Container>
                        <Row>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>
                                        Безвизовый въезд
                                    </div>
                                    <div className='description'>
                                        Больше 3-х лет наше бюро занимается
                                        въездным туризмом с GrodnoVisaFree. За
                                        эти годы мы приняли около 20000 туристов
                                        из Литвы, Польши, Латвии, Эстонии,
                                        Великобритании, Нидерландов, Германии,
                                        Словакии, Венгрии, Чехии и др. стран!
                                        Наше бюро предоставляет услуги не только
                                        по регистрации иностранных туристов, но
                                        и предлагает организацию культурного
                                        отдыха в нашей стране! Тысячи туристов
                                        остались довольны нашей работой и
                                        возвращаются в Беларусь за новыми
                                        впечатлениями снова и снова!
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>
                                        Автобусные туры
                                    </div>
                                    <div className='description'>
                                        Как прекрасен этот мир, если ты едешь на
                                        комфортабельном автобусе за новыми
                                        приключениями и бесценным опытом
                                        путешествий в другую страну! Бюро услуг
                                        "Покемон" имеет надежных туроператоров,
                                        которые организовывают автобусные туры в
                                        любую страну Европы! Если Вы не знаете,
                                        куда хотите отправиться в незабываемое
                                        путешествие на автобусе, приходите к
                                        нам! Мы уж точно поможем Вам правильно
                                        определиться!
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>Проживание</div>
                                    <div className='description'>
                                        Люксовые апартаменты в центре города -
                                        это то, что вы давно искали! Шикарные
                                        условия, любезный персонал, доступные
                                        цены восхищают наших туристов, которые к
                                        нам заселяются ежедневно! Наши
                                        апартаменты располагаются в шаговой
                                        доступности от центра города, авто и жд
                                        вокзалов! Рейтинг 9,8 от Booking.com
                                        говорит сам за себя. Если Вы хотите
                                        почувствовать уют, комфорт и заботу о
                                        вашем отдыхе, тогда Вам к нам!
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>
                                        Индивидуальный отдых
                                    </div>
                                    <div className='description'>
                                        Задумываетесь, как спланировать
                                        собственный досуг, куда обратиться и с
                                        чего начать? Туристическое бюро
                                        "Покемон" организовывает индивидуальный
                                        отдых по вашим запросам. Мы разрешим
                                        любой вопрос, который касается вашего
                                        времяпрепровождения!
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>
                                        Организация экскурсий
                                    </div>
                                    <div className='description'>
                                        Что самое интересное в поездках за
                                        границу или в другой город? Возможность
                                        увидеть что-то новое и узнать разные
                                        интересные истории. Как это сделать
                                        проще всего? Зайти к нам в офис! Мы
                                        организовываем любые экскурсии по городу
                                        Гродно, ведь в нашей местности
                                        действительно много интересных мест. И
                                        это совсем не обязательно именно
                                        исторические или архитектурные памятники
                                        — порой достаточно просто полюбоваться
                                        необычными видами природы.
                                    </div>
                                </div>
                            </Col>
                            <Col>
                                <div className='services_col_container'>
                                    <div className='header'>Отдых на море</div>
                                    <div className='description'>
                                        Впечатления от отдыха на море остаются с
                                        нами на всю жизнь! Благодаря
                                        многообразию мира наслаждаться таким
                                        видом отдыха можно круглый год. И каждый
                                        раз сочетать расслабленный отдых на
                                        пляже со знакомством с новой страной,
                                        городом, народом! Наше бюро отправит Вас
                                        в любую точку мира!
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
