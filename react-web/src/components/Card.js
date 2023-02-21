import React, { useState } from "react";
import "./Card.css"


function Card() {

    const [type, setType] = useState('คาว');
    const [about, setAbout] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.');
    const [menu, setMenu] = useState('ข้าวผัดกระเพรา');

    return (
        <div className="Card">
            <div className="upper-container">
                <div className="img-container">
                    <img src={'https://images.deliveryhero.io/image/fd-th/LH/mf1x-hero.jpg'} alt='' width='25%'></img>
                </div>

                <div className="lower-container">
                    <h3>อาหาร{type}</h3>
                    <h4>{menu}</h4>
                    <p>{about}</p>

                </div>
            </div>
        </div>
    )
}
export default Card;