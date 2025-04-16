import './exclusiveOffers.css';
import exclusive1 from './img/exluzive.png';
import React, { useState, useEffect } from "react";
import ModalForm from '../modal/modals';
import { useNavigate } from 'react-router-dom';


const ExclusiveOffers = () => {
    const navigate = useNavigate();
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

    useEffect(() => {
        const buttonsEl = document.querySelector('.exclusiveOffers-content__padding__info_data_buttons_button-1');
        const handleButtonClick = (e) => {
            let exclusiveEl = e.target.closest('button[data-exclusiveof]');
            if (!exclusiveEl) return; // Ensure head is found
            let keys = exclusiveEl.getAttribute('data-exclusiveof');
            console.log(keys)// Call the function

            if (e.target.classList.contains('exclusiveOffers-content__padding__info_data_buttons_button-1')) {
                navigate("/PopularComplexesModalForm", { state: { keys } });
                window.location.reload(); // Обновление страницы
            }
        };


        buttonsEl.addEventListener('click', handleButtonClick);


        return () => {

            buttonsEl.removeEventListener('click', handleButtonClick);

        };
    }, [navigate]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        let callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('exclusiveOffers_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.exclusiveOffers');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div className="exclusiveOffers-content">
            <div className="exclusiveOffers-content__padding">
                <h1 className="exclusiveOffers-content__padding_h1 exclusiveOffers">Эксклюзивное предложение</h1>

                <div className="exclusiveOffers-content__padding__info">
                    <div className="exclusiveOffers-content__padding__info_data exclusiveOffers">

                        <div className="exclusiveOffers-content__padding__info_data_details">
                            <h1 className="exclusiveOffers-content__padding__info_data_h1">Жилой комплекс класса бизнес-лайт</h1>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Сдача объекта <span className="exclusiveOffers-content__padding__info_data_details_p_span">3кв. 2027год – 2кв. 2028год</span></p>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Тип дома <span className="exclusiveOffers-content__padding__info_data_details_p_span">Кирпично-Монолитный</span></p>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Этажность <span className="exclusiveOffers-content__padding__info_data_details_p_span">31 этаж</span></p>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Стоимость <span className="exclusiveOffers-content__padding__info_data_details_p_span">от 6 900 000р. </span></p>

                            {/* <p className="exclusiveOffers-content__padding__info_data_details_p">Парковочная зона <span className="exclusiveOffers-content__padding__info_data_details_p_span">Некрасовка</span></p> */}

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Отделка квартир <span className="exclusiveOffers-content__padding__info_data_details_p_span">без отделки</span></p>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Класс <span className="exclusiveOffers-content__padding__info_data_details_p_span">Бизнес</span></p>

                            <p className="exclusiveOffers-content__padding__info_data_details_p">Первоначальный взнос <span className="exclusiveOffers-content__padding__info_data_details_p_span">20% или без ПВ</span></p>
                        </div>

                        <div className="exclusiveOffers-content__padding__info_data_buttons">
                            <button data-exclusiveof="5" className="exclusiveOffers-content__padding__info_data_buttons_button-1">Подробнее</button>

                            <button onClick={openModal} className="exclusiveOffers-content__padding__info_data_buttons_button-2">Записаться на просмотр</button>
                        </div>

                    </div>

                    <div className="exclusiveOffers-content__padding__info_contentImg exclusiveOffers">
                        <img src={exclusive1} alt="kvartira" className="exclusiveOffers-content__padding__info_img"></img>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalForm closeModal={closeModal} />}
        </div>
    )
}


export default ExclusiveOffers;
