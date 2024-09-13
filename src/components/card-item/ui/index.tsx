import { FC } from 'react';
import { Card } from '../../../redux/slices/redux.types.ts';
import clsx from 'clsx';
import './card-item.css';

interface IProps {
    card: Card;
    handleClick: (card: Card, id: number) => void;
    type: string;
    indexCard?: number;
}

const CardItem: FC<IProps> = ({ card, handleClick, type, indexCard }) => {
    const classStyle = clsx(
        type === 'card' ? 'card' : 'selecteds__item',
        card.status && 'card__active'
    );

    return (
        <div onClick={() => handleClick(card, card.id)} className={classStyle}>
            <img className="selecteds__img" src={card.img} alt={card.title} />
            {type === 'card' && <p className="card__counter">{indexCard !== 0 ? indexCard : ''}</p>}
        </div>
    );
};

export default CardItem;
