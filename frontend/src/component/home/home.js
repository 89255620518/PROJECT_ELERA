import BiographyForm from '../biography/biography';
import ContactsForm from '../contacts/contacts';
import ExclusiveOffers from '../exclusiveOffers/exclusiveOffers';
import GuideForm from '../guide/guide';
import NewsForm from '../news/news';
import PopularComplexes from '../popularComplexes/popularComplexes';
import ReviewsSlider from '../reviews/reviews';
import SelectionForm from '../selection/selections';
import SubmitApplicationForm from '../submitApplication/submitApplication';
import UsefulInfoFrom from '../usefulInfo/usefulInfo';
import UserfulTableForm from '../userfulTable/userfulTable';
import './home.css'
import { useEffect } from "react";



const HomeForm = ({ isModalOpen, openIsModal, closeIsModal, footerRef, reviewsRef, contactsRef, newsRef }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = 'Покупка или продажа недвижимости? Эргешева Элёра — ваш надежный партнер!';
    }, []);

    return (
        <div className='home-container'>
            <SelectionForm />
            <UsefulInfoFrom />
            <UserfulTableForm />
            <PopularComplexes />
            <ExclusiveOffers />
            <SubmitApplicationForm />
            <BiographyForm ref={footerRef} />
            <ReviewsSlider ref={reviewsRef} isModalOpen={isModalOpen} openIsModal={openIsModal} closeIsModal={closeIsModal} />
            <NewsForm ref={newsRef} isModalOpen={isModalOpen} openIsModal={openIsModal} closeIsModal={closeIsModal} />
            <ContactsForm ref={contactsRef} />
            <GuideForm />
        </div>
    )
}

export default HomeForm;