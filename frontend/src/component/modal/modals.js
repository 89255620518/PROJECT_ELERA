import React from 'react';
import './modals.css';
import imgs from './img/Vector.png';
import { useState, useEffect, useCallback } from 'react';
import Swal from 'sweetalert2';
import confetti from 'canvas-confetti';

const ModalForm = ({ closeModal }) => {
    const [formData, setFormData] = useState({
        full_name: '',
        phone_number: '',
        agreement: false
    });
    const [errors, setErrors] = useState({
        full_name: '',
        phone_number: '',
        agreement: ''
    });
    const [touched, setTouched] = useState({
        full_name: false,
        phone_number: false,
        agreement: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        document.body.classList.add('modal-open');
        return () => {
            document.body.classList.remove('modal-open');
        };
    }, []);

    // Оптимизированная функция валидации
    const validateField = useCallback((fieldName, value) => {
        let error = '';

        switch (fieldName) {
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
                break;
        }

        return error;
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;

        setFormData(prev => ({
            ...prev,
            [name]: fieldValue
        }));

        if (!touched[name]) {
            setTouched(prev => ({
                ...prev,
                [name]: true
            }));
        }

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));

        const error = validateField(name, formData[name]);
        setErrors(prev => ({
            ...prev,
            [name]: error
        }));
    };

    const validateForm = () => {
        let isValid = true;
        const updatedErrors = {};

        Object.keys(formData).forEach(field => {
            const error = validateField(field, formData[field]);
            if (error) {
                isValid = false;
                updatedErrors[field] = error;
            }
        });

        setErrors(updatedErrors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setTouched({
            full_name: true,
            phone_number: true,
            agreement: true
        });

        if (!validateForm()) {
            const invalidFields = document.querySelectorAll('.input-error');
            invalidFields.forEach(field => {
                field.classList.add('shake');
                setTimeout(() => field.classList.remove('shake'), 500);
            });
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('https://ergeshevarealty.ru/api/personal_data_short_create/', {
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

            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
            });

            await Swal.fire({
                title: '🎉 Успешно! 🎉',
                html: `
                    <div style="font-size: 1.1rem; line-height: 1.5;">
                        <p style="margin-bottom: 0.5rem;">Ваша заявка успешно отправлена!</p>
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

            closeModal();
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

    return (
        <div className="container">
            <div className="modal-content">
                <div className="modal-content__closed">
                    <img onClick={closeModal} className="modal-content__closed_img" src={imgs} alt='closed'></img>
                </div>

                <div className="modal-content__text">
                    <h1 className="modal-content__text_h1">ЗАПОЛНИТЕ ДАННЫЕ</h1>

                    <p className="modal-content__text_p">Оставьте свои контакты и я свяжусь с вами в ближайшее время</p>
                </div>

                <form onSubmit={handleSubmit} className="modal-content__form" noValidate>
                    <input
                        name="full_name"
                        value={formData.full_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`modal-content__form_name ${touched.full_name && errors.full_name ? 'input-error' :
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
                        className={`modal-content__form_number ${touched.phone_number && errors.phone_number ? 'input-error' :
                            formData.phone_number ? 'input-valid' : ''
                            }`}
                        type="tel"
                        placeholder="Ваш номер телефона"
                        required
                    />
                    {touched.phone_number && errors.phone_number && (
                        <p className="error-message">{errors.phone_number}</p>
                    )}

                    <div className={`modal-content__form_check ${touched.agreement && errors.agreement ? 'checkbox-container-error' : ''
                        }`}>
                        <input
                            name="agreement"
                            checked={formData.agreement}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`modal-content__form_check_box ${touched.agreement && errors.agreement ? 'checkbox-error' : ''
                                }`}
                            type="checkbox"
                            id="agreement-checkbox"
                            required
                        />
                        <label htmlFor="agreement-checkbox" className="modal-content__form_check_p">
                            Даю согласие на обработку персональных данных, с положениями Политики в отношении обработки персональных данных ознакомлен(-а)
                        </label>
                        {touched.agreement && errors.agreement && (
                            <p className="error-message">{errors.agreement}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="modal-content__form_button"
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
        </div >
    )
}

export default ModalForm;




