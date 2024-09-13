import { FC } from 'react';
import { Card } from '../../../redux/slices/redux.types.ts';
import CardItem from '../../card-item/ui';
import { useAppDispatch } from '../../../shared/hooks/redux.ts';
import { setSelectedCards } from '../../../redux/slices/reduxSlice.ts';
import './card-list.css';

interface IProps {
    cards: Card[];
    selectedCards: Card[];
}

const CardList: FC<IProps> = ({ cards, selectedCards }) => {
    const dispatch = useAppDispatch();
    const selectedCardId = selectedCards.map(card => card.id);

    // Обработчик клика по карточке
    const handleClick = (card: Card, id: number) => {
        if (!card.status) {
            dispatch(setSelectedCards({ card, id }));
        }
    };

    return (
        <div className="generator__block">
            {cards.map(item => {
                const indexCard = selectedCardId.indexOf(item.id) + 1;

                return (
                    <CardItem
                        key={item.id}
                        card={item}
                        handleClick={handleClick}
                        type="card"
                        indexCard={indexCard}
                    />
                );
            })}
        </div>
    );
};

export default CardList;
