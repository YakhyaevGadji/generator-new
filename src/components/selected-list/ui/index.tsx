import { FC } from 'react';
import { Card } from '../../../redux/slices/redux.types.ts';
import CardItem from '../../card-item/ui';
import { setSelectedCards } from '../../../redux/slices/reduxSlice.ts';
import { useAppDispatch } from '../../../shared/hooks/redux.ts';
import './selected-list.css';

interface IProps {
    selectedCards: Card[];
}

const SelectedList: FC<IProps> = ({ selectedCards }) => {
    const dispatch = useAppDispatch();

    const handleClick = (card: Card, id: number) => {
        dispatch(setSelectedCards({ card, id }));
    };

    return (
        <div className="selecteds">
            {selectedCards.map(item => {
                return (
                    <CardItem key={item.id} card={item} handleClick={handleClick} type="selected" />
                );
            })}
        </div>
    );
};

export default SelectedList;
