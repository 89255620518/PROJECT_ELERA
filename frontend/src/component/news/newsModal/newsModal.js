import React from "react";
import './newsModal.css';
import ipoteka from './img/ipoteka.png';
import strahovka from './img/strahovanie.png';
import rassrochka from './img/rassrochka.png';
import invest from './img/invest.png';
import strelka from './img/strelka.svg'

const NewsModalForm = ({ closeIsModal, selectedKey }) => {
    return (
        <div className="newsModal-container">
            <div className="newsModal-container__content">
                <div onClick={closeIsModal} className="newsModal-container__content_closed">
                    <img className="newsModal-container__content_closed_img" src={strelka} alt='closed'></img>
                    <p className="newsModal-container__content_closed_p">Назад</p>
                </div>

                <div className="newsModal-container__content_sections">
                    <div 
                        className={`newsModal-container__content_sections_section ${selectedKey === "1" ? "active" : ""}`}
                        data-section="1"
                    >
                        <h1 className="newsModal-container__content_sections_section_h1">Почему сейчас самое время инвестировать?</h1>
                        <div className="newsModal-container__content_sections_section_imgs">
                            <img src={invest} alt="invest" className="newsModal-container__content_sections_section_imgs_img" />
                        </div>

                        <p className="newsModal-container__content_sections_section_p">Инвестиционная недвижимость — это недвижимость, которая приобретается в целях сохранения или получения дохода.</p>

                        <h2 className="newsModal-container__content_sections_section_h2">Почему именно недвижимость?</h2>

                        <p className="newsModal-container__content_sections_section_p">
                            * Инвестиции в недвижимость - самый надежный инструмент для получения пассивного дохода<br></br>
                            * В среднем готовое первичное жилье на рынке дорожает примерно на уровне инфляции, т. е. гарантирует сохранение средств.<br></br>
                            * Относительно быстрая и высокая доходность - до 30% в год могут принести вложения в ликвидные проекты</p>

                        <h2 className="newsModal-container__content_sections_section_h2">95% Российских инвесторов придерживаются двух стратегий:</h2>

                        <p className="newsModal-container__content_sections_section_p">
                            1. Покупка квартиры для последующей сдачи в аренду<br></br>
                            2. Покупка с последующей перепродажей</p>

                        <p className="newsModal-container__content_sections_section_p">Инвестируя в недвижимость вы не задумываетесь о рисках, а вдруг прогорит! Действуя по своей выбранной стратегии вы получаете пассивный доход!</p>

                    </div>

                    <div 
                        className={`newsModal-container__content_sections_section ${selectedKey === "3" ? "active" : ""}`}
                        data-section="3"
                    >
                        <h1 className="newsModal-container__content_sections_section_h1">Можно ли отказаться от страховки по ипотеке?</h1>

                        <div className="newsModal-container__content_sections_section_imgs">
                            <img src={strahovka} alt="strahovka" className="newsModal-container__content_sections_section_imgs_img" />
                        </div>

                        <p className="newsModal-container__content_sections_section_p">
                            Страховка необходима для оформления ипотеки, но многие относятся к ней как к ненужным тратам. Давайте разберемся - можно ли отказаться от страховки при оформлении ипотеки?<br></br>
                            Полностью отказаться от страховки нельзя. Обязательное условие - это страхование объекта. А вот от страховки жизни Вы можете отказаться. Это по желанию.<br></br>
                            Есть один нюанс: в некоторых банках при отказе от страхования жизни могут повысить ставку, но такие условия не везде.<br></br>
                            Так же Вы имеете право отказаться от полиса конкретной страховой компании, которую предлагает Вам банк. В этом случае банк не может не принять полис, если вы оформили его в аккредитованной компании.<br></br>
                            Своих клиентов я сопровождаю на всех этапах сделки, помогаю оформить ипотеку и решить все важные вопросы.
                        </p>
                    </div>

                    <div 
                        className={`newsModal-container__content_sections_section ${selectedKey === "2" ? "active" : ""}`}
                        data-section="2"
                    >
                        <h1 className="newsModal-container__content_sections_section_h1">Ипотека - это выгодно или нет?</h1>
                        <div className="newsModal-container__content_sections_section_imgs">
                            <img src={ipoteka} alt="ipoteka" className="newsModal-container__content_sections_section_imgs_img" />
                        </div>

                        <p className="newsModal-container__content_sections_section_p">
                            Слово "ипотека" у многих вызывает страх и опасения, давайте разберемся почему?<br></br>
                            Люди годами снимают жилье и платят за съем около 30 000 р. в месяц, не задумываясь о том, что в итоге ничего не имеют. А ведь гораздо выгоднее взять ипотеку, платить ту же сумму, но платить уже за свое жилье.
                        </p>

                        <h2 className="newsModal-container__content_sections_section_h2">Плюсы Ипотеки.</h2>

                        <p className="newsModal-container__content_sections_section_p">
                            * Выгодное вложение для Вашего будущего<br></br>
                            * Недвижимость постоянно растет в цене<br></br>
                            * Инфляция растет, а значит платежи для вас менее обременительны<br></br>
                            * В собственной квартире можно менять интерьер по своему желанию<br></br>
                            * Возможность продать в любой момент<br></br>
                            * Сдавать в аренду и иметь постоянный доход
                        </p>

                        <h2 className="newsModal-container__content_sections_section_h2">Какие документы нужны для оформления ипотеки?</h2>

                        <p className="newsModal-container__content_sections_section_p">
                            Основной пакет документов: паспорт, снилс, справка по форме банка. Конечно в каждой ситуации есть исключения. Чтобы узнать подробнее, вы можете оставить заявку для рассмотрения вашей ситуации и я свяжусь с вами в ближайшее время.
                        </p>
                    </div>

                    <div 
                        className={`newsModal-container__content_sections_section ${selectedKey === "4" ? "active" : ""}`}
                        data-section="4"
                    >
                        <h1 className="newsModal-container__content_sections_section_h1">Квартира в рассрочку</h1>
                        <div className="newsModal-container__content_sections_section_imgs">
                            <img src={rassrochka} alt="rassrochka" className="newsModal-container__content_sections_section_imgs_img" />
                        </div>

                        <p className="newsModal-container__content_sections_section_p">
                            Далеко не все знают, что квартиру можно купить не только в ипотеку, но и в рассрочку. В зависимости от комплекса и застройщика условия будут отличаться:<br></br>
                            * Первоначальный взнос от 5% - 70%<br></br>
                            * Период рассрочки от полугода до 3-х лет<br></br>
                            * Платежи ежемесячно, один раз в квартал или через пол года<br></br>
                            * С удорожанием и без удорожания<br></br>
                            * С возможностью перевести часть суммы в ипотеку и без такой опции
                        </p>

                        <h2 className="newsModal-container__content_sections_section_h2">Кому выгодно покупать жилье в рассрочку?</h2>

                        <p className="newsModal-container__content_sections_section_p">
                            * Тем у кого высокий доход, но нет большой суммы накоплений на первоначальный взнос<br></br>
                            * У кого есть крупная сумма и осталось доплатить совсем немного<br></br>
                            * Тем, кто продает свою недвижимость и планирует погасить долг в ближайшее время<br></br>
                            * Если не дают ипотеку, например из-за плохой кредитной истории
                        </p>

                        <p className="newsModal-container__content_sections_section_p">Купить квартиру в рассрочку можно как в г. Москва, так и в Московской области. Чтобы узнать подробнее, оставьте заявку и я свяжусь с вами в ближайшее время.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewsModalForm;