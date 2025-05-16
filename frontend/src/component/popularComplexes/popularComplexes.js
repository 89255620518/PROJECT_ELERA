import './popularComplexes.css';
import badaevskiy from './img/badaevskiy.png';
import nicole from './img/nicole.png';
import severniyport from './img/severniy-port.png';
import metronom from './img/metronom.png';
import React, { useState, forwardRef, useEffect } from "react";
import ModalForm from '../modal/modals';
import { useNavigate } from 'react-router-dom';
// import { useInView } from 'react-intersection-observer';

const PopularComplexes = forwardRef((props, ref) => {
    const navigate = useNavigate();


    const complexes = [
        {
            id: 4,
            title: "ЖК г. Москва, район Измайлово",
            completion: "1кв. 2027г - 2кв. 2027г",
            price: "от 11 750 000 р.",
            image: metronom,
        },
        {
            id: 3,
            title: "ЖК г. Москва, район Левобережный",
            completion: "4кв. 2028г",
            price: "от 16 710 400 р.",
            image: severniyport,
        },
        {
            id: 2,
            title: "ЖК г. Москва, район Дорогомилово",
            completion: "1кв. 2026г - 4кв. 2027г",
            price: "от 62 000 000 р.",
            image: badaevskiy,
        },
        {
            id: 1,
            title: "ЖК г. Москва, район Тверской",
            completion: "4кв. 2027 год",
            price: "от 212 770 000 р.",
            image: nicole,
        },
    ];

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        let callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('popular_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.popular');
        targets.forEach(target => {
            observer.observe(target);
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

    useEffect(() => {
        const buttonsEl = document.querySelectorAll('.popularComplexes-content__carts_cart');
        const handleButtonClick = (e) => {
            let complexe = e.target.closest('button[data-complexe]');
            if (!complexe) return; // Ensure head is found
            let keys = complexe.getAttribute('data-complexe');
            console.log(keys)// Call the function

            if (e.target.classList.contains('popularComplexes-content__carts_cart_buttons_button-1')) {
                navigate("/PopularComplexesModalForm", {
                    state: { keys }
                });
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

    return (
        <div ref={ref} className="nedvi-content">
            <div className="popularComplexes-content">
                <h1 className="popularComplexes-content__h1 popular">ПОПУЛЯРные жилищные комплексы</h1>

                <div className="popularComplexes-content__carts">
                    {complexes.map((complex) => (
                        <div
                            key={complex.id}
                            id={complex.id}
                            className="popularComplexes-content__carts_cart popular">
                            <img src={complex.image} alt={complex.title} className="popularComplexes-content__carts_cart_img" />

                            <div className="popularComplexes-content__carts_cart_infoButton">
                                <div className="popularComplexes-content__carts_cart_info">
                                    <h1 className="popularComplexes-content__carts_cart_info_h1">{complex.title}</h1>

                                    <div className="popularComplexes-content__carts_cart_info_paragraph">
                                        <p className="popularComplexes-content__carts_cart_info_paragraph_p">Сдача объекта <span className="popularComplexes-content__carts_cart_info_paragraph_p_span">{complex.completion}</span></p>
                                        <p className="popularComplexes-content__carts_cart_info_paragraph_p">Стоимость квартир <span className="popularComplexes-content__carts_cart_info_paragraph_p_span">{complex.price}</span></p>
                                    </div>
                                </div>

                                <div className="popularComplexes-content__carts_cart_buttons">
                                    <button className="popularComplexes-content__carts_cart_buttons_button-1" data-complexe={complex.id}>Подробнее</button>
                                    <button onClick={openModal} className="popularComplexes-content__carts_cart_buttons_button-2">Консультация по объекту</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {isModalOpen && <ModalForm closeModal={closeModal} />}
        </div >
    )
});

export default PopularComplexes;


