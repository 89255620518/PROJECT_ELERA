import React, { useCallback, useEffect, useState, forwardRef } from 'react';
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

    const sliders = reviewsData.length - 1;


    const updateSlidesToShow = () => {
        const width = window.innerWidth;
        setSlidesToShow(width > 768 ? 2 : 1); // Устанавливаем количество слайдов в зависимости от ширины
    };

    useEffect(() => {
        updateSlidesToShow(); // Устанавливаем начальное значение
        window.addEventListener('resize', updateSlidesToShow); // Добавляем слушатель события изменения размера окна

        return () => {
            window.removeEventListener('resize', updateSlidesToShow); // Убираем слушатель при размонтировании
        };
    }, []);

    const handlesSlider = useCallback(
        (side) => {
            setIsAnimating(true);

            if (side === 'left') {
                setSliderState((prevIndex) => (prevIndex - slidesToShow + sliders) % sliders);
            } else {
                setSliderState((prevIndex) => (prevIndex + slidesToShow) % sliders);
            }

            setTimeout(() => {
                setIsAnimating(false);
            }, 500);
        },
        [slidesToShow, sliders] // Добавляем зависимости
    );

    // const handlesSlider = useCallback(
    //     (side) => {
    //         const width = window.innerWidth;
    //         setSlidesToShow(width > 768 ? 2 : 1);
    //         const sliders = reviewsData.length - 1;
    //         setIsAnimating(true);

    //         if (side === 'left') {
    //             setSliderState((prevIndex) => (prevIndex - slidesToShow + sliders) % sliders);
    //         } else {
    //             setSliderState((prevIndex) => (prevIndex + slidesToShow) % sliders);
    //         }

    //         setTimeout(() => {
    //             setIsAnimating(false);
    //         }, 500);

    //     }, []
    // )

    const handleKeyDown = (e) => {
        if (e.key === 'ArrowLeft') {
            handlesSlider('left');
        } else if (e.key === 'ArrowRight') {
            handlesSlider('right');
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handlesSlider]);


    useEffect(() => {
        const cartsEl = document.querySelectorAll('.reviews-content__customers_cart');
        cartsEl.forEach(cart => {
            cart.addEventListener('click', function (e) {
                let button = e.target.closest('button[data-button]');
                let keys = button.getAttribute('data-button');
                if (e.target.classList.contains('reviews-content__customers_cart_button')) {
                    setActiveKey(keys);
                    openIsModal('reviews');
                }
            });
        });

        // Cleanup function to remove event listeners
        return () => {
            cartsEl.forEach(cart => {
                cart.removeEventListener('click', function (e) {
                    /* your function here */
                });
            });
        };
    }, [openIsModal]);

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
                    entry.target.classList.add('reviews_active');
                }
            });
        }

        let observer = new IntersectionObserver(callback, options);

        let targets = document.querySelectorAll('.reviews');
        targets.forEach(target => {
            observer.observe(target);
        });

    }, []);

    return (
        <div ref={ref} className="reviews-container">
            <div className="reviews-content">
                <div className="reviews-content__text">
                    <h1 className="reviews-content__text_h1 reviews">ОТЗЫВЫ МОИХ КЛИЕНТОВ</h1>

                    <div className="reviews-content__text_arrows reviews">
                        <img onClick={() => handlesSlider('left')} src={leftImg} alt="left" className="reviews-content__text_arrows_arrow slider__left" />
                        <img onClick={() => handlesSlider('right')} src={rightImg} alt="right" className="reviews-content__text_arrows_arrow slider__right" />
                    </div>
                </div>

                <div className="reviews-content__review">
                    <div className="reviews-content__customers reviews">
                        {reviewsData.map((review, index) => (
                            // eslint-disable-next-line no-undef
                            <div key={review.id} className={`reviews-content__customers_cart ${isAnimating ? 'fade' : ''}`} style={{ display: (index >= slider && index < slider + slidesToShow) ? 'block' : 'none' }}
                                data-key={review.datakey} >
                                < p className="reviews-content__customers_cart_p" > {review.text}</p>
                                <button data-button={review.datakey} className="reviews-content__customers_cart_button" >Читать подробнее</button>
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


