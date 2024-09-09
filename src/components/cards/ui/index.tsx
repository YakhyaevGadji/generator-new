import React from "react";
import "./cards.css";

const Cards: React.FC = (): React.JSX.Element => {
    return (
        <div className="generator__block">
            <div className="card">
                <img className="selecteds__img" src="" alt=""/>
                <p className="card__counter"></p>
            </div>
        </div>
    );
};

export default Cards;
