import './contacts.css';
import React, { forwardRef, useEffect } from 'react';

const ContactsForm = forwardRef((props, ref) => {
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
                    entry.target.classList.add('contacts_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.contacts');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div ref={ref} className="contacts-container">
            <div className="contacts-container__content">
                <div className="contacts-container__content_text">
                    <h1 className="contacts-container__content_text_h1 contacts">Контакты</h1>
                </div>

                <div className="contacts-container__content_date">
                    <div className="contacts-container__content_info contacts">
                        <div className="contacts-container__content_info_contact">
                            <p className="contacts-container__content_info_contact_p">Связаться:</p>
                            <a href="tel:9999607239″" target="_blank" rel="noreferrer" className="contacts-container__content_info_contact_data">+7(999)-960-7239</a>
                            <a href="mailto:elinaergesheva@mail.ru" target="_blank" rel="noreferrer" className="contacts-container__content_info_contact_data">elinaergesheva@mail.ru</a>
                        </div>

                        <div className="contacts-container__content_info_address">
                            <p className="contacts-container__content_info_address_p">Адрес:</p>

                            <p className="contacts-container__content_info_address_data">Москва, ул.Ивана-Франко 8</p>
                        </div>

                        <div className="contacts-container__content_info_links">
                            <a href="https://wa.me/79999607239" target="_blank" rel="noreferrer" className="contacts-container__content_info_links_link">WhatsApp</a>
                            <a href="https://t.me/ErgeshevaRealty" target="_blank" rel="noreferrer" className="contacts-container__content_info_links_link">Телеграмм</a>
                        </div>
                    </div>

                    <div className="contacts-container__content_maps contacts">
                        <h1 className="contacts-container__content_maps_map" id="map" style={{ width: '100%', height: '400px' }}>
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?um=constructor%3Ad11632b73e2bb2507d0f4544994909d36b84f3c29619226a0fdf8ec2668fbc32&amp;source=constructor"
                                width="100%"
                                height="400"
                                frameBorder="0"
                                title="Map"
                            />
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
});

export default ContactsForm;