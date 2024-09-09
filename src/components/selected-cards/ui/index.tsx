import React from "react";
import { Card } from "../../../redux/redux.types.ts";
import { useAppDispatch } from "../../../hooks/redux.ts";
import { setSelectedCards } from "../../../redux/reduxSlice.ts";
import { IPropsSelectedCards } from "../model/selected-cards.types.ts";
import "./selected-cards.css";

const SelectedCards: React.FC<IPropsSelectedCards> = ({selectedCards, cards}): React.JSX.Element => {
    const dispatch = useAppDispatch();

    // Обработчик клика по выбранным карточкам
    const onClickSelectedCard = (event: React.MouseEvent<HTMLDivElement>): void => {
        const target = event.target as HTMLDivElement;
        const closestItem = target.closest('.selecteds__item') as HTMLDivElement;

        const id = Number(closestItem.dataset.card);
        const card = cards.find((card) => card.id === id);

        if (card) {
            dispatch(setSelectedCards({card, id}));
        }
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