import './reviewsModal.css';
import foto1 from './img/umida-1.png';
import foto2 from './img/elena-2.png';
import foto3 from './img/kristina-3.png';
import foto4 from './img/andrey-4.png';
import foto5 from './img/anastasia-5.png';
import foto6 from './img/ruslan-6.png';
import closeImg from './img/Vector.png';
import { useEffect } from 'react';


const ReviewsModalForm = ({ closeIsModal, activeKey }) => {

    console.log(activeKey, 'keys')
    useEffect(() => {
        if (!activeKey) return;

        const imgElement = document.querySelector(`[data-img="${activeKey}"]`);
        console.log(imgElement)
        if (imgElement) {
            imgElement.classList.add('active');
        }

        return () => {
            if (imgElement) {
                imgElement.classList.remove('active');
            }
        };
    }, [activeKey]);

    return (
        <div className="reviewsModal-container">
            <div className="reviewsModal-container__content">
                <div className='reviewsModal-container__content_closed'>
                    <img onClick={closeIsModal} className="reviewsModal-container_closed_img" src={closeImg} alt='closed' />
                </div>

                <div className="reviewsModal-container__content_imgs">
                    <img src={foto1} alt="foto" data-img='1' className="reviewsModal-container__content_img" />


                    <img src={foto2} alt="foto" data-img='2' className="reviewsModal-container__content_img" />

                    <img src={foto3} alt="foto" data-img='3' className="reviewsModal-container__content_img" />

                    <img src={foto4} alt="foto" data-img='4' className="reviewsModal-container__content_img" />

                    <img src={foto5} alt="foto" data-img='5' className="reviewsModal-container__content_img" />

                    <img src={foto6} alt="foto" data-img='6' className="reviewsModal-container__content_img" />
                </div>
            </div>
        </div>
    )
}


export default ReviewsModalForm;