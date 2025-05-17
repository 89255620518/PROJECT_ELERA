import React, { forwardRef, useEffect, useState } from "react";
import './news.css';
import ipotekaImg from './img/ipoteka.png';
import rassrochkaImg from './img/rassrochka.png';
import strahovkaImg from './img/strahovanie.png';
import investImg from './img/invest.png';
import NewsModalForm from "./newsModal/newsModal";
import { useInView } from 'react-intersection-observer';

const NewsForm = forwardRef(({ isModalOpen, openIsModal, closeIsModal }, ref) => {
    const { ref: inViewRef, inView } = useInView({
        triggerOnce: true, // Срабатывать только один раз
        threshold: 0.1, // Порог видимости
    });
    const [selectedKey, setSelectedKey] = useState(null);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [ref]);

    // useEffect(() => {
    //     const cartsNewsEl = document.querySelectorAll('.news-container__content_info_carts');
    //     cartsNewsEl.forEach(carts => {
    //         carts.addEventListener('click', function (e) {
    //             let button = e.target.closest('button[data-but]');
    //             let keys = button.getAttribute('data-but');
    //             if (e.target.classList.contains('news-container__content_info_carts_date_button')) {
    //                 openIsModal('news');
    //                 const sectionElement = document.querySelector(`[data-section="${keys}"]`);
    //                 if (sectionElement) {
    //                     sectionElement.classList.add('active');
    //                 } else {
    //                     console.warn(`No element found with data-section="${keys}"`);
    //                 }
    //             }

    //         });
    //     })

    //     // Cleanup function to remove event listeners
    //     return () => {
    //         cartsNewsEl.forEach(carts => {
    //             carts.removeEventListener('click', function (e) {
    //                 /* your function here */
    //             });
    //         });
    //     };
    // }, [openIsModal]);
    useEffect(() => {
        const cartsNewsEl = document.querySelectorAll('.news-container__content_info_carts');

        const handleClick = (e) => {
            let button = e.target.closest('button[data-but]');
            if (button) {
                const keys = button.getAttribute('data-but');
                setSelectedKey(keys); // Сохраняем выбранный ключ
                openIsModal('news');
            }
        };

        cartsNewsEl.forEach(carts => {
            carts.addEventListener('click', handleClick);
        });

        return () => {
            cartsNewsEl.forEach(carts => {
                carts.removeEventListener('click', handleClick); // Теперь передаём оба аргумента
            });
        };
    }, [openIsModal]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        let callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('submit_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.submit');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div ref={ref} className='news-container'>
            <div ref={inViewRef} className={`news-container__content ${inView ? 'fade-in' : 'fade-out'}`}>
                <div className="news-container__content_head">
                    <h1 className="news-container__content_head_h1">Полезные статьи</h1>
                </div>

                <div className="news-container__content_info">
                    <div className="news-container__content_info_carts">
                        <div className="news-container__content_info_carts_imgs">
                            <img src={strahovkaImg} alt="strahovka" className="news-container__content_info_carts_imgs_img" />
                        </div>

                        <div className="news-container__content_info_carts_date">
                            <h1 className="news-container__content_info_carts_date_h1">Можно ли отказаться от страховки по ипотеке?</h1>

                            <p className="news-container__content_info_carts_date_p">Ипотечное страхование - обязательное условие по закону РФ</p>

                            <button className="news-container__content_info_carts_date_button" data-but="3">Подробнее</button>
                        </div>

                    </div>

                    <div className="news-container__content_info_carts">
                        <div className="news-container__content_info_carts_imgs">
                            <img src={ipotekaImg} alt="ipoteka" className="news-container__content_info_carts_imgs_img" />
                        </div>

                        <div className="news-container__content_info_carts_date">
                            <h1 className="news-container__content_info_carts_date_h1">Ипотека - это выгодно ИЛИ НЕТ?</h1>

                            <p className="news-container__content_info_carts_date_p">Слово «ипотека» у многих вызывает страх и опасения, давайте разберемся почему?</p>

                            <button className="news-container__content_info_carts_date_button" data-but="2">Подробнее</button>
                        </div>

                    </div>

                    <div className="news-container__content_info_carts">
                        <div className="news-container__content_info_carts_imgs">
                            <img src={investImg} alt="invest" className="news-container__content_info_carts_imgs_img" />
                        </div>

                        <div className="news-container__content_info_carts_date">
                            <h1 className="news-container__content_info_carts_date_h1">Почему сейчас самое время инвестировать</h1>

                            <p className="news-container__content_info_carts_date_p">Полезные статьиИнвестиционная недвижимость — это недвижимость, которая приобретается в целях сохранения или получения дохода</p>

                            <button className="news-container__content_info_carts_date_button" data-but="1">Подробнее</button>
                        </div>

                    </div>

                    <div className="news-container__content_info_carts">
                        <div className="news-container__content_info_carts_imgs">
                            <img src={rassrochkaImg} alt="rasrochka" className="news-container__content_info_carts_imgs_img" />
                        </div>

                        <div className="news-container__content_info_carts_date">
                            <h1 className="news-container__content_info_carts_date_h1">Квартира в рассрочку</h1>

                            <p className="news-container__content_info_carts_date_p">Квартиру можно купить не только в ипотеку, но и в рассрочку</p>

                            <button className="news-container__content_info_carts_date_button" data-but="4">Подробнее</button>
                        </div>

                    </div>
                </div>
            </div>
            {isModalOpen === 'news' && <NewsModalForm closeIsModal={closeIsModal} selectedKey={selectedKey} />}
        </div>
    )
});

export default NewsForm;