import { Link, useNavigate, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import './footer.css';
import telegram from './img/telegram.svg';
import whatsApp from './img/whatsApp.svg';
import logoEl from './img/logoEl.svg';





const FooterForm = ({ footerRef, reviewsRef, newsRef }) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.footer-content__data_links_link_navigate');
        const handleButtonClick = (e) => {
            let link = e.target.closest('button[data-link]');
            if (!link) return; // Ensure head is found
            let keys = link.getAttribute('data-link'); // Call the function

            // if (e.target.classList.contains('content-head__info_data')) {
            navigate("/userfulTableModal", { state: { keys } });
            window.location.reload(); // Обновление страницы
            // }
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
        const buttonEl = document.querySelectorAll('.footer-content__data_links_link_navigate1');
        const handlecomplexeClick = (e) => {
            let datafootercomplexe = e.target.closest('button[data-footercomplexe]');

            if (!datafootercomplexe) return; // Ensure head is found

            let keys = datafootercomplexe.getAttribute('data-footercomplexe'); // Call the function
            console.log(keys)

            // if (e.target.classList.contains('content-head__info_data')) {
            navigate("/PopularComplexesModalForm", { state: { keys } });
            window.location.reload(); // Обновление страницы
            // }
        };

        buttonEl.forEach(button => {
            button.addEventListener('click', handlecomplexeClick);
        });

        return () => {
            buttonEl.forEach(button => {
                button.removeEventListener('click', handlecomplexeClick);
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
        if (location.pathname === '/') { // Check if on Home component
            scrollToRef(ref); // Directly scroll
        } else {
            navigate('/'); // Navigate to Home
            setTimeout(() => {
                scrollToRef(ref); // Scroll after a delay
            }, 300); // Adjust delay as needed
        }
    };

    return (
        <div className='container-footer'>
            <div className="footer-content">
                <div className="footer-content__data">
                    <div className="footer-content__data_logo">
                        <div className="footer-content__data_logo_img">
                            {/* <svg width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 9L12 2L21 9V20C21 20complexe.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                                <path d="M9 22V12H15V22"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg> */}
                            <div className="footer-content__data_logo_imgs">
                                <img className="footer-content__data_logo_imgs_img" src={logoEl} alt='logoEl'></img>
                            </div>

                            <h1 className="footer-content__data_logo_img_h1">ЭКСПЕРТ ПО НЕДВИЖИМОСТИ г.Москва</h1>
                        </div>

                        <div className="footer-content__data_logo_name">
                            <h1 className="footer-content__data_logo_name_h1">ИП Эргешева Элёра Эркиновна</h1>
                            <h1 className="footer-content__data_logo_name_h1">ИНН 310803295821 ОГРНИП 323508100654722</h1>
                        </div>
                    </div>

                    <div className="footer-content__data_links">
                        <div className="footer-content__data_links_links-1">
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate" data-link="1">Подбор объектов</button>
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate" data-link="2">Одобрение ипотеки</button>
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate" data-link="3">Оформление документов</button>
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate" data-link="4">Дистанционные сделки</button>
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate" data-link="5">Продажа вашей недвижимости</button>
                        </div>

                        <div className="footer-content__data_links_links-2">
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate1" data-footercomplexe="6">Недвижимость</button>
                            <button className="footer-content__data_links_link footer-content__data_links_link_navigate1"
                                data-footercomplexe="5">Эксклюзивное предложение</button>
                            <button onClick={() => handleScroll(footerRef)} className="footer-content__data_links_link">Обо мне</button>
                            <button onClick={() => handleScroll(reviewsRef)} className="footer-content__data_links_link">Отзывы</button>
                            <button onClick={() => handleScroll(newsRef)} className="footer-content__data_links_link">Полезные статьи</button>
                        </div>
                    </div>

                    <div className="footer-content__data_socialNetworks">
                        <a href='https://t.me/bestagent_vladis' target="_blank" rel="noreferrer"><img src={telegram} alt="telegram" className="footer-content__data_socialNetworks_iconki"></img></a>

                        {/* <a href='https://wa.me/89999607239' target="_blank" rel="noreferrer"><img src={VKs} alt="VK" className="footer-content__data_socialNetworks_iconki"></img></a> */}

                        <a href='https://wa.me/89999607239' target="_blank" rel="noreferrer"><img src={whatsApp} alt="whatsApp" className="footer-content__data_socialNetworks_iconki"></img></a>
                    </div>
                </div>

                <div className="footer-content__info">
                    <button className="footer-content__info_p">Вся информация, опубликованная на сайте, носит только информационный характер и не является публичной офертой, определяемой положениями ст. 437 ГК РФ. При копировании материалов с сайта гиперссылка обязательна.</button>
                </div>

                <div className="footer-content__sefety">
                    <p className="footer-content__sefety_p">© 2025 Все права защищены</p>
                    <Link to="/securityModalForm">
                        <button className="footer-content__sefety_p footer-content__sefety_p_button">Политика конфиденциальности</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}



export default FooterForm;

