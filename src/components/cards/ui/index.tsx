import React from "react";
import { Card, TypeButtonData } from "../../../redux/redux.types.ts";
import { useDispatch } from "react-redux";
import { setSelectedCards } from "../../../redux/reduxSlice.ts";
import "./cards.css";

interface IProps {
    buttonData: TypeButtonData;
    cards: Card[];
    selectedCards: Card[]
}

const Cards: React.FC<IProps> = ({ buttonData, cards }): React.JSX.Element => {
    const dispatch = useDispatch();

    const filterCards = cards.filter((card) => buttonData.kit === card.kit).splice(0, buttonData.count);

    const onClickCard = (event: any) => {
        const id = Number(event.target.closest(".card").dataset.id);
        const card = cards.find((card) => card.id === id);

        if (card) {
            dispatch(setSelectedCards({card, id}));
        }
    };

    console.log(filterCards);

    return (
        <div className="generator__block">
            {filterCards.map((card: Card) => {
                return (
                    <div key={card.id} onClick={onClickCard} className={`card ${card.status ? 'card__active' : ''}`} data-id={card.id}>
                        <img className="selecteds__img" src={card.img} alt={card.title}/>
                        <p className="card__counter"></p>
                    </div>
                );
            })}
        </div>
    );
};

export default Cards;
