import { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../shared/hooks/redux.ts';
import { getButtonsType, getSelectedCards } from '../../../redux/selectors.ts';
import Button from '../../../shared/ui/button';
import { resetSelectedCards, setButtonData } from '../../../redux/slices/reduxSlice.ts';
import clsx from 'clsx';
import './buttons.css';

const Buttons: FC = () => {
    const [ toggleActive, setToggleActive ] = useState<number>(0);
    const buttons = useAppSelector(getButtonsType);
    const selectedCards = useAppSelector(getSelectedCards);
    const dispatch = useAppDispatch();

    // Обработчик клика на кнопку
    const handleClick = (kit: string, count: number, id: number): void => {
        setToggleActive(id)
        dispatch(setButtonData({ kit, count }));
        dispatch(resetSelectedCards());
    };

    return (
        <div className="buttons">
            <div className="buttons__flex">
                {buttons.map(btn => {
                    return (
                        <Button
                            onClick={() => handleClick(btn.kit, btn.count, btn.id)}
                            className={clsx('buttons__button', toggleActive === btn.id && 'button__active')}
                            value={btn.title}
                            key={btn.id}
                        />
                    );
                })}
            </div>
            <Button
                className={clsx(
                    'buttons__generate',
                    selectedCards.length >= 2 && 'buttons__generate__active'
                )}
                value="Генератор"
            />
        </div>
    );
};

export default Buttons;