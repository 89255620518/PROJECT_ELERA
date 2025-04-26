import ModalSelectForm from '../modalSelection/modalSel';
import sticker from './img/sticker.png';
import './selection.css';
import React, { useState, useEffect } from "react";
import font from './img/photo_2025-01-09_16-29-18.png';
import { useNavigate } from 'react-router-dom';

const SelectionForm = () => {
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
        const buttonsEl = document.querySelector('.selection-content_info_date_buttons_apartamentDay');
        const handleButtonClick = (e) => {
            let apartamentDay = e.target.closest('button[data-apartament]');
            if (!apartamentDay) return; // Ensure head is found
            let keys = apartamentDay.getAttribute('data-apartament');
            console.log(keys)// Call the function

            if (e.target.classList.contains('selection-content_info_date_buttons_apartamentDay')) {
                navigate("/PopularComplexesModalForm", { state: { keys } });
                window.location.reload(); // Обновление страницы
            }
        };


        buttonsEl.addEventListener('click', handleButtonClick);


        return () => {

            buttonsEl.removeEventListener('click', handleButtonClick);

        };
    }, [navigate]);

    return (
        <div className="selection-content">
            <img src={font} alt="Elechka" className="selection-content_img"></img>
            <div className="selection-content_info">
                <img src={sticker} alt="Elechka" className="selection-content_info_img"></img>

                <div className="selection-content_info_date">
                    <h1 className="selection-content_info_date_h1">Эргешева Элёра — сертифицированный специалист по подбору и покупке недвижимости в Москве и МО</h1>

                    <p className="selection-content_info_date_p">Подбор, покупка, оформление в новостройке 0% комиссии. Партнер застройщиков, строящих в соответствии с ФЗ-214Лучший риэлтор года по отзывам покупателей</p>


                    <div className="selection-content_info_date_buttons">
                        <button onClick={openModal} className="selection-content_info_date_buttons_pickUp">Подобрать недвижимость</button>

                        <button data-apartament="5" className="selection-content_info_date_buttons_apartamentDay">Квартира Дня</button>
                    </div>
                </div>
            </div>
            {isModalOpen && <ModalSelectForm closeModal={closeModal} />}
        </div>
    )
}


export default SelectionForm;