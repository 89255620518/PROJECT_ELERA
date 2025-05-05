
import './App.css';
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import SecurityModalForm from './component/securityModal/securityModal';
import NotFound from './NotFound';
import HomeForm from './component/home/home';
import UserfulTableModalForm from './component/userfulTableModal/userfulTableModal';
import PopularComplexesModalForm from './component/popularComplexesModal/popularComplexesModal';
import HeadForm from './component/head/heads';
import FooterForm from './component/footer/footer';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const footerRef = useRef(null);
  const reviewsRef = useRef(null);
  const contactsRef = useRef(null);
  const newsRef = useRef(null);
  const [isModalOpen, setIsModalOpen] = useState(null);

  const openIsModal = (modalName) => {
    document.body.classList.add('no-scroll');
    setIsModalOpen(modalName);
  }

  const closeIsModal = () => {
    document.body.classList.remove('no-scroll');
    setIsModalOpen(null);
  };

  return (
    <Router>
      <div className='app'>
        <ScrollToTop />
        <HeadForm
          footerRef={footerRef}
          reviewsRef={reviewsRef}
          contactsRef={contactsRef}
          newsRef={newsRef}
          closeIsModal={closeIsModal}
          isModalOpen={isModalOpen}
        />
        <Routes>
          <Route path="/" exact element={<HomeForm
            footerRef={footerRef}
            reviewsRef={reviewsRef}
            contactsRef={contactsRef}
            newsRef={newsRef}
            openIsModal={openIsModal}
            isModalOpen={isModalOpen}
            closeIsModal={closeIsModal}
          />} />
          <Route path="/userfulTableModal" element={<UserfulTableModalForm />} />
          <Route path="/securityModalForm" element={<SecurityModalForm />} />
          <Route path="/PopularComplexesModalForm" element={<PopularComplexesModalForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterForm
          footerRef={footerRef}
          reviewsRef={reviewsRef}
          contactsRef={contactsRef}
          newsRef={newsRef}
          closeIsModal={closeIsModal}
          isModalOpen={isModalOpen}
        />
      </div>
    </Router>
  );
}

export default App;
