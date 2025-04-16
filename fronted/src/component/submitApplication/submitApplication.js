import font from './img/photo_2025-01-10_23-41-09.png';
import './submitApplication.css';
import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

const SubmitApplicationForm = () => {

    const [formData, setFormData] = useState({
        city: '',
        target: '',
        type_of_housing: '',
        payment_type: '',
        full_name: '',
        phone_number: '',
        agreement: false
    });

    const [errors, setErrors] = useState({
        city: '',
        target: '',
        type_of_housing: '',
        payment_type: '',
        full_name: '',
        phone_number: '',
        agreement: ''
    });

    const [touched, setTouched] = useState({
        city: false,
        target: false,
        type_of_housing: false,
        payment_type: false,
        full_name: false,
        phone_number: false,
        agreement: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    // useEffect(() => {
    //     // Добавляем класс к body при открытии модалки
    //     document.body.classList.add('modal-open');
    //     return () => {
    //         // Убираем класс при закрытии
    //         document.body.classList.remove('modal-open');
    //     };
    // }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));

        // Пометка поля как "тронутого"
        if (!touched[name]) {
            setTouched(prev => ({
                ...prev,
                [name]: true
            }));
        }

        // Сброс ошибки при изменении
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }

        // Анимация для селектов
        if (e.target.tagName === 'SELECT') {
            e.target.classList.add('select-changed');
            setTimeout(() => e.target.classList.remove('select-changed'), 300);
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
        validateField(name);
    };

    // const validateField = (fieldName) => {
    //     let error = '';
    //     const value = formData[fieldName];

    //     switch (fieldName) {
    //         case 'city':
    //             if (!value) error = 'Это поле обязательно для заполнения';
    //             break;
    //         case 'target':
    //             if (!value) error = 'Это поле обязательно для заполнения';
    //             break;
    //         case 'type_of_housing':
    //             if (!value) error = 'Это поле обязательно для заполнения';
    //             break;
    //         case 'payment_type':
    //             if (!value) error = 'Это поле обязательно для заполнения';
    //             break;
    //         case 'full_name':
    //             if (!value.trim()) error = 'Пожалуйста, введите ФИО';
    //             else if (value.trim().length < 3) error = 'ФИО слишком короткое';
    //             break;
    //         case 'phone_number':
    //             if (!value.trim()) error = 'Пожалуйста, введите номер телефона';
    //             else if (!/^[\d\+][\d\(\)\ -]{4,14}\d$/.test(value)) {
    //                 error = 'Введите корректный номер телефона';
    //             }
    //             break;
    //         case 'agreement':
    //             if (!value) error = 'Необходимо дать согласие';
    //             break;
    //     }

    //     setErrors(prev => ({
    //         ...prev,
    //         [fieldName]: error
    //     }));

    //     return !error;
    // };

    const validateField = (fieldName) => {
        let error = '';
        const value = formData[fieldName];

        switch (fieldName) {
            case 'city':
            case 'target':
            case 'type_of_housing':
            case 'payment_type':
                if (!value) error = 'Это поле обязательно для заполнения';
                break;
            case 'full_name':
                if (!value.trim()) error = 'Пожалуйста, введите ФИО';
                else if (value.trim().length < 3) error = 'ФИО слишком короткое';
                break;
            case 'phone_number':
                if (!value.trim()) error = 'Пожалуйста, введите номер телефона';
                else if (!/^[\d+][\d() -]{4,14}\d$/.test(value)) {
                    error = 'Введите корректный номер телефона';
                }
                break;
            case 'agreement':
                if (!value) error = 'Необходимо дать согласие';
                break;
            default:
                error = 'Некорректное поле'; // Добавлена ветка по умолчанию
        }

        setErrors(prev => ({
            ...prev,
            [fieldName]: error
        }));

        return !error;
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        // Проверяем все поля
        Object.keys(formData).forEach(field => {
            const fieldValid = validateField(field);
            if (!fieldValid) isValid = false;
        });

        return isValid;
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Помечаем все поля как "тронутые" при попытке отправки
        setTouched({
            city: true,
            target: true,
            type_of_housing: true,
            payment_type: true,
            full_name: true,
            phone_number: true,
            agreement: true
        });

        if (!validateForm()) {
            // Эффект тряски для невалидных полей
            const invalidFields = document.querySelectorAll('.input-error, .select-error');
            invalidFields.forEach(field => {
                field.classList.add('shake');
                setTimeout(() => field.classList.remove('shake'), 500);
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/personal_data_full_create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    agreement: true
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.detail || 'Ошибка сервера');
            }

            // Эффект confetti при успешной отправке
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            setFormData({
                city: '',
                target: '',
                type_of_housing: '',
                payment_type: '',
                full_name: '',
                phone_number: '',
                agreement: false
            });

            // Красивое уведомление
            await Swal.fire({
                title: '🎉 Успешно! 🎉',
                html: `
                        <div style="font-size: 1.1rem; line-height: 1.5;">
                            <p style="margin-bottom: 0.5rem;">Ваша анкета успешно отправлена!</p>
                            <p style="color: #4e73df; font-weight: 600;">Я свяжусь с вами в ближайшее время</p>
                        </div>
                    `,
                icon: 'success',
                confirmButtonText: 'Отлично!',
                background: '#f8f9fa',
                confirmButtonColor: '#4e73df',
                timer: 3000,
                timerProgressBar: true
            });


        } catch (error) {
            console.error('Ошибка:', error);
            Swal.fire({
                title: 'Ошибка',
                text: error.message || 'Произошла ошибка при отправке формы',
                icon: 'error',
                confirmButtonText: 'Понятно'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    // Функция для определения класса селекта
    const getSelectClass = (fieldName) => {
        let className = 'modal1-content__form_select_option';
        if (touched[fieldName] && errors[fieldName]) className += ' select-error';
        else if (formData[fieldName]) className += ' select-valid';
        return className;
    };

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
        <div className="container-content">
            <div className="container2">
                <div className="container2__font submit">
                    <img className="container2__font_img" src={font} alt="font"></img>

                    <div className="container2__font_info">
                        <h1 className="container2__font_info_h1">Готовы к покупке недвижимости???</h1>

                        <p className="container2__font_info_p">Сэкономьте время на поиске!!!
                            Ответьте на 4 вопроса, и я подберу для вас лучшие варианты квартир/домов!
                        </p>
                    </div>
                </div>


                <div className="modal2-content submit">
                    <form onSubmit={handleSubmit} className="modal1-content__form" noValidate>
                        <div className="modal2-content__form_select">
                            <p className="modal2-content__form_select_p">Где рассматриваете приобретение недвижимости?</p>
                            <select
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getSelectClass('city')}
                                required
                            >
                                <option value="">Выберите МСК или МО</option>
                                <option value="Москва">Москва</option>
                                <option value="Московская область">Московская Область</option>
                            </select>
                            {touched.city && errors.city && (
                                <p className="error-message">{errors.city}</p>
                            )}
                        </div>

                        <div className="modal2-content__form_select">
                            <p className="modal2-content__form_select_p">Под какие цели?</p>
                            {/* <select className="modal2-content__form_select_option">
                                <option value="habitation">Для Проживания</option>
                                <option value="investing">Инвестирования</option>
                                <option value="rent">Под Сдачу</option>
                            </select> */}
                            <select
                                name="target"
                                value={formData.target}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getSelectClass('target')}
                                required
                            >
                                <option value="">Выберите цели</option>
                                <option value="Для проживания">Для Проживания</option>
                                <option value="Инвестирования">Инвестирования</option>
                                <option value="Под сдачу">Под Сдачу</option>
                            </select>
                            {touched.target && errors.target && (
                                <p className="error-message">{errors.target}</p>
                            )}
                        </div>

                        <div className="modal2-content__form_select">
                            <p className="modal2-content__form_select_p">Какой тип жилья Вас интересует?</p>
                            {/* <select className="modal2-content__form_select_option">
                                <option value="primary">Первичное(Новостройки)</option>
                                <option value="secondary">Вторичное</option>
                            </select> */}
                            <select
                                name="type_of_housing"
                                value={formData.type_of_housing}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getSelectClass('type_of_housing')}
                                required
                            >
                                <option value="">Выберите тип жилья</option>
                                <option value="Первичное (Новостройки)">Первичное(Новостройки)</option>
                                <option value="Вторичное">Вторичное</option>
                            </select>
                            {touched.type_of_housing && errors.type_of_housing && (
                                <p className="error-message">{errors.type_of_housing}</p>
                            )}
                        </div>

                        <div className="modal2-content__form_select">
                            <p className="modal2-content__form_select_p">Какой тип оплаты Вас интересует?</p>
                            <select
                                name="payment_type"
                                value={formData.payment_type}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={getSelectClass('payment_type')}
                                required
                            >
                                <option value="">Выберите тип оплаты</option>
                                <option value="Наличный расчет">Наличный Расчет</option>
                                <option value="Ипотека">Ипотека</option>
                                <option value="Рассрочка">Рассрочка</option>
                            </select>
                            {touched.payment_type && errors.payment_type && (
                                <p className="error-message">{errors.payment_type}</p>
                            )}
                        </div>


                        <div className="modal2-content__form_nameNumber">
                            <input
                                name="full_name"
                                value={formData.full_name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`modal2-content__form_name ${touched.full_name && errors.full_name ? 'input-error' :
                                    formData.full_name ? 'input-valid' : ''
                                    }`}
                                type="text"
                                placeholder="Ваше ФИО"
                                required
                            />
                            {touched.full_name && errors.full_name && (
                                <p className="error-message">{errors.full_name}</p>
                            )}
                            <input
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`modal2-content__form_number ${touched.phone_number && errors.phone_number ? 'input-error' :
                                    formData.phone_number ? 'input-valid' : ''
                                    }`}
                                type="tel"
                                placeholder="Ваш номер телефона"
                                required
                            />
                            {touched.phone_number && errors.phone_number && (
                                <p className="error-message">{errors.phone_number}</p>
                            )}
                        </div>

                        <div className={`modal2-content__form_check ${touched.agreement && errors.agreement ? 'checkbox-container-error' : ''
                            }`}>
                            <input
                                name="agreement"
                                checked={formData.agreement}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={`modal2-content__form_check_box ${touched.agreement && errors.agreement ? 'checkbox-error' : ''
                                    }`}
                                type="checkbox"
                                id="agreement-checkbox"
                                required
                            />
                            <label htmlFor="agreement-checkbox" className="modal2-content__form_check_p">
                                Даю согласие на обработку персональных данных, с положениями Политики в отношении обработки персональных данных ознакомлен(-а)
                            </label>
                            {touched.agreement && errors.agreement && (
                                <p className="error-message">{errors.agreement}</p>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="modal2-content__form_button"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <span className="spinner"></span> ОБРАБОТКА...
                                </>
                            ) : (
                                'ОТПРАВИТЬ'
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SubmitApplicationForm;


