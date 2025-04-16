
import './head.css';
import React, { useState, useEffect } from "react";
import ModalForm from '../modal/modals';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import menuImg from './img/menu.svg'
import HeadModalMenuForm from './headModalMenu/headModalMenu';
import logoElera from './img/logoEl.svg';



const HeadForm = ({ footerRef, reviewsRef, contactsRef, newsRef, closeIsModal, isModalOpen }) => {
    const navigate = useNavigate();
    const [isModalOpenh, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    const location = useLocation();

    const openModal = () => {
        document.body.classList.add('no-scroll');
        console.log("Кнопка нажата, открываю модалку");
        setIsModalOpen(true);
    }

    const closeModal = () => {
        document.body.classList.remove('no-scroll');
        setIsModalOpen(false);
    };
    const openModal1 = () => {
        document.body.classList.add('no-scroll');
        console.log("Кнопка нажата, открываю модалку");
        setIsModalOpen1(true);
    }

    const closeModal1 = () => {
        document.body.classList.remove('no-scroll');
        setIsModalOpen1(false);
    };

    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.content-head__info_div1');
        const handleButtonClick = (e) => {
            let head = e.target.closest('button[data-head]');
            if (!head) return; // Ensure head is found
            let keys = head.getAttribute('data-head'); // Call the function

            if (e.target.classList.contains('content-head__info_data')) {
                navigate("/userfulTableModal", { state: { keys } });
                window.location.reload(); // Обновление страницы
            }
        };

        buttonsEl.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });

        return () => {
            buttonsEl.forEach(button => {
                button.removeEventListener('click', handleButtonClick);
            });
        };
    }, [navigate]);

    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.content-head__info_div2');
        const handleButtonClick = (e) => {
            let headcomplexe = e.target.closest('button[data-headcomplexe]');
            if (!headcomplexe) return; // Ensure head is found
            let keys = headcomplexe.getAttribute('data-headcomplexe'); // Call the function

            if (e.target.classList.contains('content-head__info_data')) {
                navigate("/PopularComplexesModalForm", { state: { keys } });
                window.location.reload(); // Обновление страницы
            }
        };

        buttonsEl.forEach(button => {
            button.addEventListener('click', handleButtonClick);
        });

        return () => {
            buttonsEl.forEach(button => {
                button.removeEventListener('click', handleButtonClick);
            });
        };
    }, [navigate]);

    const scrollToRef = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Ref is undefined or does not have a current property");
        }
    }

    const handleScroll = (ref) => {
        if (location.pathname === '/') {
            if (isModalOpen) {
                closeIsModal()
                setTimeout(() => {
                    scrollToRef(ref);
                }, 300);
            } else {
                scrollToRef(ref);
            }

        } else {
            navigate('/');
            setTimeout(() => {
                scrollToRef(ref)
            }, 300);
        }
    };

    return (
        <div className="content-head">
            <div className="content-head__logo">
                <Link to="/">
                    <div className='content-head__logo_imgs'>
                        <img className='content-head__logo_imgs_img' src={logoElera} alt="logo" />
                    </div>
                </Link>

                <div className="content-head__logo_date">
                    <h1 className="content-head__logo_date_number">8 (999) 960-72-39</h1>
                    <h1 className="content-head__logo_date_operating">Ежедневно с 8:00-20:00</h1>
                </div>
            </div>

            <div className="content-head__info">
                < button onClick={() => handleScroll(footerRef)} className="content-head__info_data" data-scroll="1">ОБО МНЕ</button>

                <details className="content-head__info_datails">
                    <summary className="content-head__info_summary">
                        <h1 className="content-head__info_data">УСЛУГИ</h1>
                    </summary>


                    <div className="content-head__info_div1">
                        <button className="content-head__info_data" data-head="1" >1. ПОДБОР ОБЪЕКТОВ</button>
                        <button className="content-head__info_data" data-head="2" >2. Одобрение ипотеки</button>
                        <button className="content-head__info_data" data-head="3" >3. Оформление документов</button>
                        <button className="content-head__info_data" data-head="4" >4. Дистанционные сделки</button>
                        <button className="content-head__info_data" data-head="5" >5. Продажа вашей недвижимости</button>
                    </div>

                </details>


                <details className="content-head__info_datails">
                    <summary className="content-head__info_summary">
                        <h1 className="content-head__info_data">НЕДВИЖИМОСТЬ</h1>
                    </summary>

                    <div className="content-head__info_div2">
                        <button className="content-head__info_data" data-headcomplexe="1">1. ЖК г. Москва, район Тверской</button>
                        <button className="content-head__info_data" data-headcomplexe="2">2. ЖК г. Москва, район Дорогомилово</button>
                        <button className="content-head__info_data" data-headcomplexe="3">3. ЖК г. Москва, район Левобережный</button>
                        <button className="content-head__info_data" data-headcomplexe="4">4. ЖК г. Москва, район Измайлово</button>
                        <button className="content-head__info_data" data-headcomplexe="5">5. Эксклюзивное предложение</button>
                    </div>

                </details>

                <button onClick={() => handleScroll(reviewsRef)} className="content-head__info_data" data-scroll="2">ОТЗЫВЫ</button>
                <button onClick={() => handleScroll(newsRef)} className="content-head__info_data" data-scroll="3">НОВОСТИ</button>
                <button onClick={() => handleScroll(contactsRef)} className="content-head__info_data" data-scroll="4">КОНТАКТЫ</button>
            </div>

            <div className="content-head__menuLogo">
                <img onClick={openModal1} className="content-head__menuLogo_img" src={menuImg} alt='Меню' />
            </div>

            <div className="content-head__button">
                <button onClick={openModal} className="content-head__button_application">ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
            {isModalOpenh && <ModalForm closeModal={closeModal} />}
            {
                isModalOpen1 && <HeadModalMenuForm
                    closeModal1={closeModal1}
                    footerRef={footerRef}
                    reviewsRef={reviewsRef}
                    newsRef={newsRef}
                    contactsRef={contactsRef}
                />
            }
        </div >
    )
};


export default HeadForm;


