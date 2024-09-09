import React from "react";
import { Card } from "../../../redux/redux.types.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { setSelectedCards } from "../../../redux/reduxSlice.ts";
import "./selected-cards.css";

interface IProps {
    selectedCards: Card[];
    cards: Card[];
}

const SelectedCards: React.FC<IProps> = ({selectedCards, cards}): React.JSX.Element => {
    const dispatch = useAppDispatch();

    const onClickSelectedCard = (event: any) => {
        const id = Number(event.target.closest('.selecteds__item').dataset.card);
        const card = cards.find((card) => card.id === id);

        dispatch(setSelectedCards({card, id}));
    };

    return (
        <div className="selecteds">
            {selectedCards.map((card: Card) => {
                return (
                    <div onClick={onClickSelectedCard} key={card.id} className="selecteds__item" data-card={card.id}>
                        <img className="card__img" src={card.img} alt={card.title}/>
                    </div>
                );
            })}
        </div>
    );
};

export default SelectedCards;
