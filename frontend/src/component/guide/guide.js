import './guide.css';
import telegram from './img/telegram.svg';
import whatsapp from './img/whatsApp.svg';
import telephon from './img/telefon.png';
import vk from './img/vk.svg';
import oblachko from './img/oblachko.svg';
import React, { useEffect, useState, useRef } from 'react';

const GuideForm = () => {
    const [isVisible, setIsVisible] = useState(false);
    const contentRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinksVisibility = () => {
        setIsVisible((prev) => !prev);
    };

    useEffect(() => {
        const contentEl = contentRef.current;
        if (contentEl) {
            contentEl.addEventListener('click', toggleLinksVisibility);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (contentEl) {
                contentEl.removeEventListener('click', toggleLinksVisibility);
            }
        };
    }, []);

    return (
        <div className="guide-container">
            <div className="guide-container__content" ref={contentRef}>
                <img src={oblachko} alt='oblachko' className="guide-container__content_btns" />
            </div>

            <div className="guide-container__links" style={{ display: isVisible ? 'flex' : 'none' }} ref={linksRef}>
                <a href="tel:9999607239″" target="_blank" rel="noreferrer" className="guide-container__links_link"><img src={telephon} alt="telefon" className="guide-container__links_link_img" /></a>

                <a href='https://wa.me/79999607239' target="_blank" rel="noreferrer" className="guide-container__links_link"><img src={whatsapp} alt="whatsapp" className="guide-container__links_link_img" /></a>

                <a href='https://t.me/ErgeshevaRealty' target="_blank" rel="noreferrer" className="guide-container__links_link"><img src={telegram} alt="telegram" className="guide-container__links_link_img guide-container__links_link_img_telegram" /></a>

                <a href='https://vk.com/id.eli_pili' target="_blank" rel="noreferrer" className="guide-container__links_link"><img src={vk} alt="VK" className="guide-container__links_link_img" /></a>
            </div>
        </div>
    )
}


export default GuideForm;