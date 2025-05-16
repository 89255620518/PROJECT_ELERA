import React, { useCallback, useEffect, useState, forwardRef, useRef } from 'react';
import './reviews.css'; // Import your CSS file for styling
import leftImg from './img/left.svg';
import rightImg from './img/right.svg';
import ReviewsModalForm from '../reviewsModal/reviewsModal';


const reviewsData = [
    {
        id: 1,
        text: "Я, Умида, благодарна Элёре за быструю продажу моего дома. Быструю, максимально комфортную и иногда мега позитивную сделку. Ранее я не видела смысла в агентах и относилась предвзято, но с таким агентством я поменяла свое мнение. Спасибо Элёре. я обязательно буду рекомендовать ее, как профессионала своего дела.",
        datakey: 1
    },
    {
        id: 2,
        text: "Работали с агентством Владис. Я была риелтором со стороны покупательницы. Очень оперативно оформили с ними сделку. Агент Элёра милая и приветливая девушка, с ней было очень комфортно сотрудничать. Она была с нами до самого подписания акта передачи. Элёрочка, спасибо Вам, побольше бы таких агентов, как вы, буду рада новым совместным проектам!",
        datakey: 2
    },
    {
        id: 3,
        text: "Моим риелтором была Элёра, она не только настоящий профессионал своего дела, так еще и позитивный и приятный человек, что не мало важно! Подобрала подходящую по моим запросам квартиру и условия в банке, которые были очень хорошие по сравнению с теми что предлагали другие на рынке в данное время. Быстро вышли на сделку! Я очень счастлива что доверилась именно ей! Рекомендую всем обращаться к ней если хотите так же как я приобрести квартиру без проблем!",
        datakey: 3
    },
    {
        id: 4,
        text: "Спасибо огромное Элёре за ее проделанную работу в продаже моей квартиры в Балашихе. Мне приятна была постоянная связь от Элёры. Я приезжал только на аванс и на сделку. Сберёг очень много энергии и времени ведь за меня сделали всю работу. Я сделала правильный выбор довершившись компанией Владис. Ни разу не пожалел. Спасибо Элёре и Владис.",
        datakey: 4
    },
    {
        id: 5,
        text: "Благодарю Элёру за успешно выполненную сделку по покупке квартиры г. Москва, Поселение Московский, квартал 70. Все вопросы с документами были решены. Занималась проверкой и организацией процесса сделки полностью Элёра. Давно планировала покупку жилья, но процесс оказался сложным и долгим. Благодаря Элёре сделка состоялась. Заняло не большое количество времени. Весь процесс занял не более двух недель. Рекомендую данного агента и сотрудничеству.",
        datakey: 5
    },
    {
        id: 6,
        text: "Хочу поблагодарить Элеру за профессиональную работу в сфере недвижимости. Быстро и оперативно нашла арендаторов и за день заключили сделку. Грамотный специалист и отлично знает свою работу. Всегда была на связи! Буду рекомендовать Элеру всем друзьям знакомым. В общем, всем доволен рекомендую! Спасибо большое!",
        datakey: 6
    }
];

const ReviewsForm = forwardRef(({ openIsModal, isModalOpen, closeIsModal }, ref) => {
    const [slider, setSliderState] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [slidesToShow, setSlidesToShow] = useState(2);
    const [activeKey, setActiveKey] = useState(null);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const sliderRef = useRef(null);
    // const sliders = reviewsData.length - 1;

    const updateSlidesToShow = useCallback(() => {
        setSlidesToShow(window.innerWidth > 768 ? 2 : 1);
    }, []);

    useEffect(() => {
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);
        return () => window.removeEventListener('resize', updateSlidesToShow);
    }, [updateSlidesToShow]);

    const handleSlideChange = useCallback((direction) => {
        if (isAnimating) return;

        setIsAnimating(true);
        setSliderState(prevIndex => {
            if (direction === 'left') {
                return (prevIndex - slidesToShow + reviewsData.length) % reviewsData.length;
            } else {
                return (prevIndex + slidesToShow) % reviewsData.length;
            }
        });

        setTimeout(() => setIsAnimating(false), 500);
    }, [isAnimating, slidesToShow]);

    // Обработчики свайпа для мобильных устройств
    const handleTouchStart = (e) => {
        if (window.innerWidth > 768) return;
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        if (window.innerWidth > 768) return;
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (window.innerWidth > 768) return;

        if (touchStart - touchEnd > 100) {
            // Свайп влево - следующий слайд
            handleSlideChange('right');
        }

        if (touchStart - touchEnd < -100) {
            // Свайп вправо - предыдущий слайд
            handleSlideChange('left');
        }
    };

    // Обработчик клика по слайдеру
    const handleSliderClick = (e) => {
        const rect = sliderRef.current.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const width = rect.width;

        if (clickX > width / 2) {
            handleSlideChange('right');
        } else {
            handleSlideChange('left');
        }
    };

    const handleKeyDown = useCallback((e) => {
        if (e.key === 'ArrowLeft') handleSlideChange('left');
        if (e.key === 'ArrowRight') handleSlideChange('right');
    }, [handleSlideChange]);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    useEffect(() => {
        const handleCartClick = (e) => {
            const button = e.target.closest('button[data-button]');
            if (button) {
                setActiveKey(button.getAttribute('data-button'));
                openIsModal('reviews');
            }
        };

        const carts = document.querySelectorAll('.reviews-content__customers_cart');
        carts.forEach(cart => cart.addEventListener('click', handleCartClick));

        return () => {
            carts.forEach(cart => cart.removeEventListener('click', handleCartClick));
        };
    }, [openIsModal]);

    useEffect(() => {
        if (ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [ref]);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reviews_active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        const targets = document.querySelectorAll('.reviews');
        targets.forEach(target => observer.observe(target));

        return () => {
            targets.forEach(target => observer.unobserve(target));
        };
    }, []);

    return (
        <div ref={ref} className="reviews-container">
            <div className="reviews-content">
                <div className="reviews-content__text">
                    <h1 className="reviews-content__text_h1 reviews">ОТЗЫВЫ МОИХ КЛИЕНТОВ</h1>

                    <div className="reviews-content__text_arrows reviews">
                        <img
                            onClick={() => handleSlideChange('left')}
                            src={leftImg}
                            alt="left"
                            className="reviews-content__text_arrows_arrow slider__left"
                        />
                        <img
                            onClick={() => handleSlideChange('right')}
                            src={rightImg}
                            alt="right"
                            className="reviews-content__text_arrows_arrow slider__right"
                        />
                    </div>
                </div>

                <div className="reviews-content__review">
                    <div
                        ref={sliderRef}
                        className="reviews-content__customers reviews"
                        onClick={handleSliderClick}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}
                    >
                        {reviewsData.map((review, index) => (
                            <div
                                key={review.id}
                                className={`reviews-content__customers_cart ${isAnimating ? 'fade' : ''}`}
                                style={{
                                    display: (index >= slider && index < slider + slidesToShow) ? 'block' : 'none',
                                    userSelect: 'none' // Для предотвращения выделения текста при свайпе
                                }}
                                data-key={review.datakey}
                            >
                                <p className="reviews-content__customers_cart_p">{review.text}</p>
                                <button
                                    data-button={review.datakey}
                                    className="reviews-content__customers_cart_button"
                                >
                                    Читать подробнее
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isModalOpen === 'reviews' && <ReviewsModalForm closeIsModal={closeIsModal} activeKey={activeKey} />}
        </div>
    );
});

export default ReviewsForm;

