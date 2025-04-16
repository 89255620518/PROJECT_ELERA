import './userfulTable.css';
import svg1 from './img/Group_47.svg';
import svg2 from './img/Group_1158.svg';
import svg3 from './img/svg3.svg';
import svg4 from './img/Group_1305.svg';
import svg5 from './img/Group.svg';
import React, { useState, useEffect } from "react";
import ModalForm from '../modal/modals';
import { useNavigate } from 'react-router-dom';


const UserfulTableForm = () => {

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

    const navigate = useNavigate();

    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.userfulTable-content__carts_cart');
        const handleButtonClick = (e) => {
            let table = e.target.closest('button[data-table]');
            if (!table) return; // Ensure head is found
            let keys = table.getAttribute('data-table'); // Call the function

            if (e.target.classList.contains('userfulTable-content__carts_cart_info_button')) {
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
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        let callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('userfulTable_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.userfulTable');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div className="userfulTable-content">
            <div className="userfulTable-content__carts">
                <div className="userfulTable-content__carts_cart userfulTable">
                    <div className="userfulTable-content__carts_cart_info">
                        <div className="userfulTable-content__carts_cart_info_text">
                            <h1 className="userfulTable-content__carts_cart_info_text_h1">Дистанционные сделки для региональных клиентов в онлайн формате</h1>

                            <p className="userfulTable-content__carts_cart_info_text_p">— консультация</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— сбор документов</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— регистрация</p>

                        </div>

                        <button className="userfulTable-content__carts_cart_info_button" data-table="4">Подробнее</button>
                    </div>

                    <div className="userfulTable-content__carts_cart_iconka"><img src={svg1} alt="iconli"></img></div>
                </div>

                <div className="userfulTable-content__carts_cart userfulTable">
                    <div className="userfulTable-content__carts_cart_info">
                        <div className="userfulTable-content__carts_cart_info_text">
                            <h1 className="userfulTable-content__carts_cart_info_text_h1">Грамотное оформление документов на покупателя</h1>

                            <p className="userfulTable-content__carts_cart_info_text_p">— согласование и оценка</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— проверка объекта</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— контроль качества</p>

                        </div>

                        <button className="userfulTable-content__carts_cart_info_button" data-table="3">Подробнее</button>
                    </div>

                    <div className="userfulTable-content__carts_cart_iconka"><img src={svg2} alt="iconli"></img></div>
                </div>

                <div className="userfulTable-content__carts_cart userfulTable">
                    <div className="userfulTable-content__carts_cart_info">
                        <div className="userfulTable-content__carts_cart_info_text">
                            <h1 className="userfulTable-content__carts_cart_info_text_h1">ОТкрытие ипотеки по самым низким ставкам на рынке недвижимости</h1>

                            <p className="userfulTable-content__carts_cart_info_text_p">— анализ вашей ситуации</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— подбор ипотечной программы</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— экономия на скрытых банковских услугах</p>

                        </div>

                        <button className="userfulTable-content__carts_cart_info_button" data-table="2">Подробнее</button>
                    </div>

                    <div className="userfulTable-content__carts_cart_iconka"><img src={svg3} alt="iconli"></img></div>
                </div>

                <div className="userfulTable-content__carts_cart userfulTable">
                    <div className="userfulTable-content__carts_cart_info">
                        <div className="userfulTable-content__carts_cart_info_text">
                            <h1 className="userfulTable-content__carts_cart_info_text_h1">Подбор объектов недвижимости в соответствии с вашими целями</h1>

                            <p className="userfulTable-content__carts_cart_info_text_p">— для проживания</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— инвестирования</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— под сдачу</p>

                        </div>

                        <button className="userfulTable-content__carts_cart_info_button" data-table="1">Подробнее</button>
                    </div>

                    <div className="userfulTable-content__carts_cart_iconka"><img src={svg4} alt="iconli"></img></div>
                </div>

                <div className="userfulTable-content__carts_cart userfulTable">
                    <div className="userfulTable-content__carts_cart_info">
                        <div className="userfulTable-content__carts_cart_info_text">
                            <h1 className="userfulTable-content__carts_cart_info_text_h1">Продажа вашей недвижимости</h1>

                            <p className="userfulTable-content__carts_cart_info_text_p">— «Всё включено»</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— «Мы продаёмся вместе»</p>                        <p className="userfulTable-content__carts_cart_info_text_p">— под сдачу</p>

                        </div>

                        <button className="userfulTable-content__carts_cart_info_button" data-table="5">Подробнее</button>
                    </div>

                    <div className="userfulTable-content__carts_cart_iconka"><img src={svg4} alt="iconli"></img></div>
                </div>

                <div className="userfulTable-content__carts_cart2 userfulTable">
                    <div className="userfulTable-content__carts_cart2_info">
                        <div className="userfulTable-content__carts_cart2_info_text">
                            <h1 className="userfulTable-content__carts_cart2_info_text_h1">Консультация</h1>

                            <p className="userfulTable-content__carts_cart2_info_text_p">Получите консультацию специалиста по любому интересующему вопросу</p>

                        </div>

                        <button onClick={openModal} className="userfulTable-content__carts_cart2_info_button">Получить консультацию</button>
                    </div>

                    <div className="userfulTable-content__carts_cart2_iconka"><img src={svg5} alt="iconli"></img></div>
                </div>

            </div>
            {isModalOpen && <ModalForm closeModal={closeModal} />}
        </div>
    )
}


export default UserfulTableForm;