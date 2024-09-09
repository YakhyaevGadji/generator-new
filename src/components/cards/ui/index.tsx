import React from "react";
import { Card } from "../../../redux/redux.types.ts";
import { useDispatch } from "react-redux";
import { setSelectedCards } from "../../../redux/reduxSlice.ts";
import { IPropsCards } from "../model/cards.types.ts";
import "./cards.css";

const Cards: React.FC<IPropsCards> = ({ buttonData, cards, selectedCards }): React.JSX.Element => {
    const dispatch = useDispatch();

    const filterCards = cards.filter((card) => buttonData.kit === card.kit).splice(0, buttonData.count);
    const selectedCardId = selectedCards.map((card) => card.id);

    // Обработчик клика по карточке
    const onClickCard = (event: React.MouseEvent<HTMLDivElement>): void => {
        const cardElement = event.currentTarget.closest(".card") as HTMLDivElement;
        if (!cardElement) return;

        const id = Number(cardElement.dataset.id);
        const card = cards.find((card) => card.id === id);

        if (selectedCards.findIndex((card) => card.id === id) < 0 && card) {
            dispatch(setSelectedCards({card, id}));
        }
    };

    return (
        <div className="generator__block">
            {filterCards.map((card: Card) => {
                const indexCard = selectedCardId.indexOf(card.id) + 1;

                return (
                    <div key={card.id} onClick={onClickCard} className={`card ${card.status ? 'card__active' : ''}`} data-id={card.id}>
                        <img className="selecteds__img" src={card.img} alt={card.title}/>
                        <p className="card__counter">{indexCard !== 0 ? indexCard : ''}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;