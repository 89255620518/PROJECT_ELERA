import './usefulInfo.css';
import svg1 from './img/Group_47.svg';
import svg2 from './img/Group_1158.svg';
import svg3 from './img/Group_1305.svg';
import svg4 from './img/Group.svg';

const UsefulInfoFrom = () => {

    return (
        <div className="usefulInfo-content">
            <div className="usefulInfo-content__data">
                <div className="marquee">
                    <div className="marquee-content">
                        <div className="usefulInfo-content__data_info userfulInfo">
                            <img src={svg1} alt="iconki" className="usefulInfo-content__data_info_img"></img>

                            <div className="usefulInfo-content__data_info_text">
                                <h1 className="usefulInfo-content__data_info_text_h1">Полное сопровождение сделки</h1>

                                <p className="usefulInfo-content__data_info_text_p">от подбора до получения ключей</p>
                            </div>
                        </div>
                        <div className="usefulInfo-content__data_info userfulInfo">
                            <img src={svg2} alt="iconki" className="usefulInfo-content__data_info_img"></img>

                            <div className="usefulInfo-content__data_info_text">
                                <h1 className="usefulInfo-content__data_info_text_h1">Гарантия юридической чистоты</h1>

                                <p className="usefulInfo-content__data_info_text_p">при оформлении документов</p>
                            </div>
                        </div>
                        <div className="usefulInfo-content__data_info userfulInfo">
                            <img src={svg3} alt="iconki" className="usefulInfo-content__data_info_img"></img>

                            <div className="usefulInfo-content__data_info_text">
                                <h1 className="usefulInfo-content__data_info_text_h1">Только проверенные объекты</h1>

                                <p className="usefulInfo-content__data_info_text_p">прошедшие юридическую экспертизу</p>
                            </div>
                        </div>
                        <div className="usefulInfo-content__data_info userfulInfo">
                            <img src={svg4} alt="iconki" className="usefulInfo-content__data_info_img"></img>

                            <div className="usefulInfo-content__data_info_text">
                                <h1 className="usefulInfo-content__data_info_text_h1">Выгодная процентная ставка</h1>

                                <p className="usefulInfo-content__data_info_text_p">по ипотечному кредитованию</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="usefulInfo-content__text userfulInfo">купить недвижимость с моей помощью максимально быстро, качественно и без нервов</h1>
        </div>
    )
}


export default UsefulInfoFrom;





