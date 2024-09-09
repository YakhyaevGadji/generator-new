import React from "react";
import "./selected-cards.css";

const SelectedCards: React.FC = (): React.JSX.Element => {
    return (
        <div className="selecteds">
            <div className="selecteds__item" data-card="${item.id}">
                <img className="card__img" src="" alt=""/>
            </div>
        </div>
    );
};

export default SelectedCards;
