import './userfulTableModal.css';
import objectImg from './img/object.png';
import alfaImg from './img/alfabank.png';
import sberImg from './img/sber.png';
import vtbImg from './img/vtb.png';
import gazpromImg from './img/gazprombank.png';
import ipotekaOffImg from './img/ipotekaOff.png';
import investImg from './img/metalinvest.png';
import rshbImg from './img/rosselhoz.png';
import psbImg from './img/psb.png';
import vtorichkaImg from './img/vtorichka.png';
import React, { useEffect, useState } from 'react';
import ModalForm from '../modal/modals';
import SubmitApplicationForm from '../submitApplication/submitApplication';
import GuideForm from '../guide/guide';
import { Link, useLocation } from 'react-router-dom';




const UserfulTableModalForm = () => {
    const location = useLocation();
    const { keys } = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Услуги — Элёра, ваш надежный партнер!';
    }, []);

    useEffect(() => {
        const element = document.querySelector(`[data-info="${keys}"]`);
        if (element) {
            element.classList.add('userfulTableModal-container__content_info_active');
        } else {
            const allElements = document.querySelectorAll('[data-info]');
            allElements.forEach(el => el.classList.remove('userfulTableModal-container__content_info_active'));
        }
    }, [keys]);

    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.userfulTableModal-container__content_info_tables_table_cart');
        buttonsEl.forEach(button => {
            button.addEventListener('click', function (e) {
                let path = e.currentTarget.getAttribute('data-click');

                if (e.target.classList.contains('userfulTableModal-container__content_info_tables_table_cart_p') || e.target.classList.contains('userfulTableModal-container__content_info_tables_table_cartBag_p')) {
                    document.querySelector(`[data-parag="${path}"]`).style.display = 'flex';
                } else {
                    document.querySelector(`[data-parag="${path}"]`).style.display = 'none';
                }
            });
        });

        const buttonsOldEl = document.querySelectorAll('.userfulTableModal-container__content_info_tables_table_cartOld');

        if (buttonsOldEl.length === 0) {
            return; // Если кнопок нет, выходим из эффекта
        }
        buttonsOldEl.forEach(button => {
            button.addEventListener('click', function (e) {
                let path = e.currentTarget.getAttribute('data-clickold');

                if (e.target.classList.contains('userfulTableModal-container__content_info_tables_table_cart_p') || e.target.classList.contains('userfulTableModal-container__content_info_tables_table_cartBag_p')) {
                    document.querySelector(`[data-paragold="${path}"]`).style.display = 'flex';
                } else {
                    document.querySelector(`[data-paragold="${path}"]`).style.display = 'none';
                }
            });
        });
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        document.body.classList.add('no-scroll');
        console.log("Кнопка нажата, открываю модалку");
        setIsModalOpen(true);
    }

    const closeModal = () => {
        document.body.classList.remove('no-scroll');
        setIsModalOpen(false);
    };
    return (
        <div className="userfulTableModal-container">
            <div className="userfulTableModal-container__content">
                <div className="userfulTableModal-container__content_info" data-info="1" >
                    <div className="userfulTableModal-container__content_info_header">
                        <Link to="/">
                            <button className="userfulTableModal-container__content_info_header_button">ГЛАВНАЯ</button>
                        </Link>
                        <p className="userfulTableModal-container__content_info_header_p">/</p>
                        <button className="userfulTableModal-container__content_info_header_button" >ПОДБОР ОБЪЕКТОВ</button>
                    </div>

                    <div className="userfulTableModal-container__content_info_names">
                        <h1 className="userfulTableModal-container__content_info_names_h1">Подбор объектов, учитывая индивидуальные потребности</h1>

                        <div className="userfulTableModal-container__content_info_names_date">
                            <p className="userfulTableModal-container__content_info_names_date_p">В моей базе более 5 000 объектов недвижимости  Москвы, Московской области и по всей стране.</p>

                            <div className="userfulTableModal-container__content_info_names_date_points">
                                <p className="userfulTableModal-container__content_info_names_date_points_p">для жизни</p>

                                <p className="userfulTableModal-container__content_info_names_date_points_p1">инвестирования</p>

                                <p className="userfulTableModal-container__content_info_names_date_points_p">под сдачу</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_nameNews">
                        <h1 className="userfulTableModal-container__content_info_nameNews_h1">Первичный (новостройки)</h1>

                        <p className="userfulTableModal-container__content_info_names_date_p">Мечтаете о новой квартире в современном жилом комплексе?<br></br> Хотите выгодно инвестировать в недвижимость?<br></br> Тогда услуга подбора новостроек от меня — именно то, что вам нужно!<br></br>

                            Я провожу консультации совместно с экспертом по рынку новостроек, чтобы предоставить вам максимально полную и объективную информацию.</p>
                    </div>

                    <div className="userfulTableModal-container__content_info_imgs">
                        <img src={objectImg} alt="object" className="userfulTableModal-container__content_info_imgs_img" />
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Преимущества покупки новостройки со мной</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableNews">
                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="1">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Экономия времени и сил <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="1">Я возьму на себя весь процесс поиска и подбора, сэкономив вам драгоценное время и избавив от множества хлопот.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="2">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p"> Доступ к эксклюзивным предложениям <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="2">Благодаря моим связям с застройщиками, мы можем предложить вам доступ к эксклюзивным скидкам и условиям покупки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="3">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Объективная экспертиза <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="3">Получите профессиональную консультацию эксперта по рынку новостроек, избавив себя от рисков ошибочного выбора.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="4">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Гарантия безопасности <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="4">Мы поможем вам избежать рисков, связанных с покупкой новостройки, и обеспечим юридическую чистоту сделки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="5">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/05 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Комфортный процесс <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="5">Мы сделаем весь процесс покупки максимально комфортным и прозрачным для вас.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cart" data-click="6">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/06 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Специальное предложение <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-parag="6">Записавшись на консультацию по подбору новостроек, вы получаете возможность купить квартиру <span className="userfulTableModal-container__content_info_tables_table_cartBag_p_span">без комиссии</span> от нашего агентства! Не упустите шанс! Свяжитесь со мной, чтобы записаться на консультацию!

                                    <button className="userfulTableModal-container__content_info_tables_table_cartBag_p_button" onClick={openModal}>Получить консультацию</button></p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">ПРЕДОСТАВЛЯЮ ВАЖНЫЕ СВЕДЕНИЯ О КАЖДОМ ОБЪЕКТЕ</h1>

                        <div className="userfulTableModal-container__content_info_tables_table">
                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Данные о ходе строительства</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">ОЦЕНКА ФИНАНСОВЫХ РИСКОВ</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Все о качестве строительства</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBaga">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pa">Привлекательность для проживания или инвестирования</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_nameOld">
                        <h1 className="userfulTableModal-container__content_info_nameOld_h1">Вторичный (недвижимость под ключ)</h1>

                        <p className="userfulTableModal-container__content_info_names_date_p">Забудьте о бесконечном серфинге по сайтам с недвижимостью, нервных переговорах и сложных юридических тонкостях! <br></br> Представляю вам уникальную услугу «Всё в одном окне» — ваш ключ к спокойной и успешной покупке недвижимости!</p>
                    </div>

                    <div className="userfulTableModal-container__content_info_imgs">
                        <img src={vtorichkaImg} alt="object" className="userfulTableModal-container__content_info_imgs_img" />
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Преимущества покупки со мной</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableNews">
                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="1">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Экономия времени и усилий <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="1"> <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">1. Поиск объектов:</span> Я возьму на себя всю рутину поиска подходящих вариантов, учитывая ваши критерии и предпочтения. Вам не придется тратить время на просмотр бесконечных объявлений и общение с множеством продавцов.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">2. Организация просмотров:</span> Я организирую просмотры в удобное для вас время, координируя все детали с продавцами.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">3. Сбор и проверка документов:</span> Я помогу собрать и проверить все необходимые документы, убедившись в их подлинности и юридической чистоте.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="2">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">  Экспертиза и профессионализм <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="2"> <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">1. Знание рынка:</span> Я обладаю глубоким знанием рынка недвижимости, текущих цен и тенденций. Это поможет вам сделать обоснованный выбор и избежать переплаты.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">2. Оценка объекта:</span> Я помогу объективно оценить состояние квартиры, ее преимущества и недостатки, на которые вы, возможно, не обратили бы внимания.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">3. Переговоры:</span> Я проведу переговоры с продавцом от вашего имени, добиваясь наилучших условий сделки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="3">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Безопасность и юридическая чистота <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="3"> <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">1. Проверка документов:</span> Я проверю все документы, связанные с квартирой и продавцом, чтобы убедиться в отсутствии юридических проблем и рисков мошенничества.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">2. Сопровождение сделки:</span> Я буду сопровождать вас на всех этапах сделки, обеспечивая ее юридическую чистоту и безопасность.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="4">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Доступ к эксклюзивным предложениям <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="4"> <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">1. Закрытые базы:</span> Я часто имею доступ к закрытым базам недвижимости и могут предложить вам варианты, которых нет в открытом доступе.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">2. Сотрудничество с застройщиками:</span> Я сотрудничаю с застройщиками и могут предложить вам квартиры по выгодным ценам на этапе строительства.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="5">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/05 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Помощь с ипотекой <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="5"> <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">1. Выбор программы:</span> Я помогу вам выбрать оптимальную ипотечную программу, учитывая ваши финансовые возможности.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">2.  Сбор документов:</span> Я помогу собрать все необходимые документы для получения ипотеки.<br></br>
                                    <span className="userfulTableModal-container__content_info_tables_table_cart_pOld_span">3. Взаимодействие с банком:</span> Я буду взаимодействовать с банком от вашего имени, ускоряя процесс одобрения ипотеки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="6">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/06 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Специальное предложение <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-paragold="6">Хотите узнать, как воспользоваться этой услугой и получить <span className="userfulTableModal-container__content_info_tables_table_cartBag_p_span">специальную скидку?</span> Свяжитесь со мной прямо сейчас!

                                    <button className="userfulTableModal-container__content_info_tables_table_cartBag_p_button" onClick={openModal}>Получить консультацию</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="userfulTableModal-container__content_info" data-info="2" >
                    <div className="userfulTableModal-container__content_info_header">
                        <Link to="/">
                            <button className="userfulTableModal-container__content_info_header_button">ГЛАВНАЯ</button>
                        </Link>
                        <p className="userfulTableModal-container__content_info_header_p">/</p>
                        <button className="userfulTableModal-container__content_info_header_button" >Открытие ипотеки</button>
                    </div>

                    <div className="userfulTableModal-container__content_info_methods">
                        <h1 className="userfulTableModal-container__content_info_methods_h1">Способы покупки жилья</h1>

                        <div className="userfulTableModal-container__content_info_methods_carts">
                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">Семейная ипотека от 4.2% <span>/01</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Доступна семьям, в которых с 1 января 2018 года по 31 декабря 2023 года родился первый ребенок или последующие дети. Семьям с двумя детьми не старше 18 лет независимо от срока их рождения</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">По гос. поддержке от 8% <span>/02</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Ипотека по гос. программе от 8% в разных регионах. Доступна всем гражданам на новостройки</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">военная ипотека от 5.5% <span>/03</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Доступна гос. служащим, которые получили права на пользование военной ипотеки. В качестве первого взноса могут использоваться начисления от выслуги лет</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">материнский капитал <span>/04</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Может использоваться в качестве первого взноса при покупке недвижимости. Доступно с первого месяца рождения ребенка</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">it ипотека от 2.7% <span>/05</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Доступна гражданам со ставкой от 2,7% - 5% в зависимости от застройщика или региона</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_methods_carts_cart">
                                <h1 className="userfulTableModal-container__content_info_methods_carts_cart_h1">Траншевая ипотека от 0.1 % <span>/06</span></h1>

                                <p className="userfulTableModal-container__content_info_methods_carts_cart_p">Ипотека с платежами 1 руб. до сдачи дома. Далее 6% на весь срок</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Лучшие условия оформления ипотеки</h1>

                        <div className="userfulTableModal-container__content_info_tables_table">
                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p1">Грамотное оформление документов</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p1">Максимально выгодная процентная ставка</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p1">Одобрение без официального трудоустройства</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBaga">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Анализ испорченной кредитной истории перед оформлением</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_mortgage">
                        <h1 className="userfulTableModal-container__content_info_mortgage_h1">3 простых шага открытия ипотеки</h1>

                        <div className="userfulTableModal-container__content_info_mortgage_content">
                            <img className="userfulTableModal-container__content_info_mortgage_content_img" src={ipotekaOffImg} alt="ipotekaOff" />
                            <div className="userfulTableModal-container__content_info_mortgage_content_info">
                                <div className="userfulTableModal-container__content_info_mortgage_content_info_cart">
                                    <h1 className="userfulTableModal-container__content_info_mortgage_content_info_cart_h1">Консультация <span>/01</span></h1>

                                    <p className="userfulTableModal-container__content_info_mortgage_content_info_cart_p">Провожу очную или онлайн консультацию. Подбираю ипотечную программу согласно потребностям клиента</p>
                                </div>

                                <div className="userfulTableModal-container__content_info_mortgage_content_info_cart">
                                    <h1 className="userfulTableModal-container__content_info_mortgage_content_info_cart_h1">Подача документов <span>/02</span></h1>

                                    <p className="userfulTableModal-container__content_info_mortgage_content_info_cart_p">Проверяю кредитную историю, грамотно оформляю документы, подаю от 4−10 банков партнеров</p>
                                </div>

                                <div className="userfulTableModal-container__content_info_mortgage_content_info_cart">
                                    <h1 className="userfulTableModal-container__content_info_mortgage_content_info_cart_h1">Полное оформление <span>/03</span></h1>

                                    <p className="userfulTableModal-container__content_info_mortgage_content_info_cart_p">После одобрения банком, полное оформление и выдача ипотеки</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_banks">
                        <h1 className="userfulTableModal-container__content_info_banks_h1">БАНКИ ПАРТНЕРЫ</h1>

                        <div className="userfulTableModal-container__content_info_banks_wrapper">
                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={alfaImg} alt="alfabank" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={gazpromImg} alt="gazprombank" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={sberImg} alt="sber" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={vtbImg} alt="vtb" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={rshbImg} alt="rosselhoz" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={psbImg} alt="psb" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>

                            <div className="userfulTableModal-container__content_info_banks_wrapper_cart">
                                <div className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs">
                                    <img src={investImg} alt="gazprombank" className="userfulTableModal-container__content_info_banks_wrapper_cart_imgs_img" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="userfulTableModal-container__content_info_questions">
                        <h1 className="userfulTableModal-container__content_info_questions_h1">ОТВЕТЫ НА ЧАСТЫЕ ВОПРОСЫ</h1>

                        <div className="userfulTableModal-container__content_info_questions_about">
                            <details className="userfulTableModal-container__content_info_questions_about_datails">
                                <summary className="userfulTableModal-container__content_info_questions_about_datails_summary">
                                    <p className="userfulTableModal-container__content_info_questions_about_datails_summary_p">Какие документы нужны для подачи заявки на ипотеку?</p>
                                </summary>

                                <p className="userfulTableModal-container__content_info_questions_about_datails_p">Для подачи заявки нужны следующие документы: паспорт, снилс, трудовая книжка, справка по форме банка или 2-НДФЛ.</p>
                            </details>

                            <details className="userfulTableModal-container__content_info_questions_about_datails">
                                <summary className="userfulTableModal-container__content_info_questions_about_datails_summary">
                                    <p className="userfulTableModal-container__content_info_questions_about_datails_summary_p">Можно ли материнским капиталом погасить ипотеку?</p>
                                </summary>

                                <p className="userfulTableModal-container__content_info_questions_about_datails_p">Материнским капиталом можно погасить тело ипотеки и тем самым уменьшить ежемесячный платеж.
                                </p>
                            </details>

                            <details className="userfulTableModal-container__content_info_questions_about_datails">
                                <summary className="userfulTableModal-container__content_info_questions_about_datails_summary">
                                    <p className="userfulTableModal-container__content_info_questions_about_datails_summary_p">Можно купить квартиру в ипотеку без первоначального взноса?</p>
                                </summary>

                                <p className="userfulTableModal-container__content_info_questions_about_datails_p">Да можно. В разных регионах у многих застройщиков есть программа покупки объекта без первоначального взноса.</p>
                            </details>

                            <details className="userfulTableModal-container__content_info_questions_about_datails">
                                <summary className="userfulTableModal-container__content_info_questions_about_datails_summary">
                                    <p className="userfulTableModal-container__content_info_questions_about_datails_summary_p">Одобрят ли ипотеку если нет кредитной истории?</p>
                                </summary>

                                <p className="userfulTableModal-container__content_info_questions_about_datails_p">У каждого банка есть своя система оценки портрета заемщика, при правильном заведении заявки, можно получить заветное слово ОДОБРЕНО! Возраст заемщика 18+.</p>
                            </details>
                        </div>
                    </div>
                </div>

                <div className="userfulTableModal-container__content_info" data-info="3" >
                    <div className="userfulTableModal-container__content_info_header">
                        <Link to="/">
                            <button className="userfulTableModal-container__content_info_header_button">ГЛАВНАЯ</button>
                        </Link>
                        <p className="userfulTableModal-container__content_info_header_p">/</p>
                        <button className="userfulTableModal-container__content_info_header_button" >Оформление документов</button>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Оформление документов на покупателя</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableOld">
                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Ведение переговоров<span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Ведение всех переговоров с застройщиком и с продавцом. Участие и сопровождение на сделке. Защита интересов клиента.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">ПРОВЕРКА ОБЪЕКТА <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Проверяю наличие прав на недвижимость, отсутствие обременений, ограничений и других обстоятельств.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Согласование и оценка <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Грамотная подготовка пакета документов для передачи в банк на одобрение объекта.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Контроль качества <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Сопровождение клиента во время подписания акта приема-передачи, проверка на качество и всех недочетов застройщика.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cartOld userfulTableModal-container__content_info_tables_tableOld_cart" data-clickold="8">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">юридическое сопровождение <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Полное юридическое сопровождение <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-paragold="8">Хотите получить полное сопровождение вашей сделки с недвижимостью? Нажмите на кнопку ниже, чтобы обсудить все детали и обеспечить себе безопасную и комфортную покупку!
                                    <button className="userfulTableModal-container__content_info_tables_table_cartBag_p_button" onClick={openModal}>Получить консультацию</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="userfulTableModal-container__content_info" data-info="4" >
                    <div className="userfulTableModal-container__content_info_header">
                        <Link to="/">
                            <button className="userfulTableModal-container__content_info_header_button">ГЛАВНАЯ</button>
                        </Link>
                        <p className="userfulTableModal-container__content_info_header_p">/</p>
                        <button className="userfulTableModal-container__content_info_header_button" >Дистанционные сделки</button>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Оформление документов на покупателя</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableRemotely">

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Консультация<span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Провожу онлайн консультацию в любом удобном мессенджере или Zoom. Согласно потребностям подбираю объект.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">ПРОВЕРКА ОБЪЕКТА <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Проверяю вторую сторону сделки и объект купли-продажи. Наличие прав на недвижимость, отсутствие обременений, ограничений и других обстоятельств.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Регистрация <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">В онлайн формате подготовлю пакет документов для регистрации сделки и переход в Росреестр.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">Взаимодействие с банками <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Полное согласование с банками в регионе клиента от одобрения до выдачи ипотеки.</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">ПРЕИМУЩЕСТВА ДИСТАНЦИОННЫХ СДЕЛОК</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableRemotely">
                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01<span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Полное сопровождение сделки от подбора до получения ключей.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Гарантия юридической чистоты при оформлении документов.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_carta">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pa">Личная встреча на любом из этапов, по желанию клиента</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cartOld " data-clickold="9">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Дистанционная сделка <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-paragold="9">Чтобы получить услугу, нажмите на кнопку ниже:


                                    <button className="userfulTableModal-container__content_info_tables_table_cartBag_p_button" onClick={openModal}>Получить консультацию</button></p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="userfulTableModal-container__content_info" data-info="5" >
                    <div className="userfulTableModal-container__content_info_header">
                        <Link to="/">
                            <button className="userfulTableModal-container__content_info_header_button">ГЛАВНАЯ</button>
                        </Link>
                        <p className="userfulTableModal-container__content_info_header_p">/</p>
                        <button className="userfulTableModal-container__content_info_header_button" >Продажа вашей недвижимости</button>
                    </div>

                    <div className="userfulTableModal-container__content_info_names">
                        <h1 className="userfulTableModal-container__content_info_names_h1">Продажа вашей недвижимости</h1>

                        <div className="userfulTableModal-container__content_info_names_date">
                            <p className="userfulTableModal-container__content_info_names_date_p">Вы решили продать свою недвижимость?<br></br> Предлагаю два варианта сотрудничества, выбирайте наиболее подходящий вам!</p>

                            <div className="userfulTableModal-container__content_info_names_date_points">
                                <p className="userfulTableModal-container__content_info_names_date_points_p2">«Всё включено»</p>
                                <p className="userfulTableModal-container__content_info_names_date_points_p2">«Мы продаёмся вместе»</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h1 className="userfulTableModal-container__content_info_tables_h1">Пакет №1: «Всё включено»</h1>

                        <div className="userfulTableModal-container__content_info_tables_tableNews">

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="10">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Управление процессом <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="10"> Полное управление процессом продажи.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="11">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Оценка недвижимости <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="11">Профессиональная оценка рыночной стоимости вашей недвижимости.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="12">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Фотосъемка и хоумстейджинг<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="12">Профессиональная фотосъемка, подготовка квартиры к продаже и 3D-тур.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="13">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Прием звонков<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="13">Прием всех звонков от потенциальных покупателей.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="14">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/05 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Фильтрация клиентов<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="14">Тщательная фильтрация покупателей — только серьезные клиенты, нацеленные на покупку.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="15">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/06 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Презентация квартиры<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="15">Эффективная презентация квартиры и аргументация цены.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="16">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/07 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Согласование аванса<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="16">Согласование дат внесения аванса и помощь в оформлении документов.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="17">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/08 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Подготовка договора<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pOld" data-paragold="17">Подготовка договора купли-продажи и назначение даты сделки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cartOld" data-clickold="18">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/09 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Передача квартиры<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-paragold="18">Безопасная передача квартиры покупателю.</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h2 className="userfulTableModal-container__content_info_tables_h1">Пакет №2: «Мы продаём вместе»</h2>

                        <div className="userfulTableModal-container__content_info_tables_tableRemotely">
                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="7">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Совместная работа<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="7">Мы работаем вместе — вы принимаете звонки от потенциальных покупателей или агентов, предлагающих свои услуги наряду со мной.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="8">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Фотографии на телефон<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="8">Вы самостоятельно делаете фотографии квартиры на телефон (или другим доступным способом), или я приеду и сделаю, также 3D-тур.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="9">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Реклама от меня<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="9">Я займусь продвижением вашей недвижимости через рекламные каналы агентства.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="10">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Юридическое сопровождение<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="10">Полное юридическое сопровождение сделки на всех этапах, как и в пакете №1.</p>
                            </div>
                        </div>
                    </div>

                    <div className="userfulTableModal-container__content_info_tables">
                        <h2 className="userfulTableModal-container__content_info_tables_h1">Преимущества пакета №1: «Всё включено»</h2>

                        <p className="userfulTableModal-container__content_info_tables_p">идеально подходит для тех, кто ценит свое время и хочет максимально комфортно и выгодно продать квартиру.</p>

                        <div className="userfulTableModal-container__content_info_tables_tableNews">
                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="11">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/01 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Быстро<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="11">Оптимизированный процесс продажи гарантирует быстрое и эффективное закрытие сделки.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="12">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/02 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Выгодно<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="12">Профессиональная оценка, эффективный маркетинг и грамотные переговоры обеспечат максимальную цену за вашу недвижимость.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="13">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/03 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Качественно<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="13">Все этапы продажи выполняются профессионально и юридически грамотно, исключая любые риски.</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cart" data-click="14">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cart_h1">/04 <span className="userfulTableModal-container__content_info_tables_table_cart_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_p">Комфортно<span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cart_pNew" data-parag="14">Вы освобождаетесь от всех хлопот, связанных с продажей, — я все сделаю за вас!</p>
                            </div>

                            <div className="userfulTableModal-container__content_info_tables_table_cartBag userfulTableModal-container__content_info_tables_table_cart userfulTableModal-container__content_info_tables_tableOld_cart" data-click="15">
                                <h1 className="userfulTableModal-container__content_info_tables_table_cartBag_h1">/05 <span className="userfulTableModal-container__content_info_tables_table_cartBag_h1_span"></span></h1>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_p">Продажа вашей недвижимости <span className="userfulTableModal-container__content_info_tables_table_cart_p_span">≡</span></p>

                                <p className="userfulTableModal-container__content_info_tables_table_cartBag_pNew" data-parag="15">Не упустите шанс! Свяжитесь со мной, чтобы записаться на консультацию!

                                    <button className="userfulTableModal-container__content_info_tables_table_cartBag_p_button" onClick={openModal}>Получить консультацию</button></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SubmitApplicationForm />
            <GuideForm />
            {isModalOpen && <ModalForm closeModal={closeModal} />}
        </div >
    )
}

export default UserfulTableModalForm;