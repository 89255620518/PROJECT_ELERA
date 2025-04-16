import './biography.css';
import font from './img/photo_2025-01-09_16-29-18.png';
import meFoto from './img/sticker.png';
import React, { forwardRef, useEffect } from "react";

const BiographyForm = forwardRef((props, ref) => {
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [ref]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        };

        let callback = function (entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('biography_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.biography');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div ref={ref} className="biography-content">
            <img src={font} alt="font" className="biography-content__data_img_font"></img>
            <div className="biography-content__data">
                <div className="biography-content__data_info">
                    <div className="biography-content__data_info_aboutMe">
                        <h1 className="biography-content__data_info_aboutMe_h1 biography">Обо мне</h1>
                        <p className="biography-content__data_info_aboutMe_p biography">Меня зовут Эрегешева Элера. Я - энергичный и
                            целеустремленный агент по недвижимости в компании
                            «Владис» (16 лет опыта, более 500 сделок в месяц!), и я помогу вам найти вашу идеальную квартиру!
                            <span><br></br>  Несмотря на небольшой стаж, я прошла более 5 профессиональных курсов и знаю, как сделать процесс покупки максимально комфортным. Я ценю честность, юридическую чистоту и забочусь о каждом клиенте.</span><br></br>

                            <span>  Работаю вместе с командой юристов и ипотечных брокеров, обеспечивая быстрое и беспроблемное оформление сделки. Доверьте мне свой поиск, и вы получите быстрый, выгодный и приятный результат!</span>
                        </p>
                    </div>
                    <div className="biography-content__data_info_year">
                        <p className="biography-content__data_info_year_p biography ">2024г.<span className="biography-content__data_info_year_p_span biography">лучший риэлтор года по отзывам покупателей</span></p>
                        <p className="biography-content__data_info_year_p biography ">&gt;2лет<span className="biography-content__data_info_year_p_span">официального опыта работы</span></p>
                        <p className="biography-content__data_info_year_p biography ">15+<span className="biography-content__data_info_year_p_span">успешно закрытых сделок</span></p>
                    </div>
                </div>

                <div className="biography-content__data_img">
                    <img className="biography-content__data_img_me biography" src={meFoto} alt="meFoto"></img>
                </div>
            </div>
        </div>
    )
});

export default BiographyForm;

