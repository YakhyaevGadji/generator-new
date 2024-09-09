import React from 'react';
import { resetSelectedCards, setButtonData } from "../../../redux/reduxSlice.ts";
import { useDispatch } from "react-redux";
import { IPropsButtons } from "../model/buttons.types.ts";
import './buttons.css';

const Buttons: React.FC<IPropsButtons> = ({selectedCards}): React.JSX.Element => {
    const dispatch = useDispatch();
    const [toggleActive, setToggleActive] = React.useState<string>('');

    // Обработчик клика по кнопкам
    const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>, btn: string): void => {
        const target = event.target as HTMLButtonElement;
        const kit = target.id;
        const count = Number(target.dataset.kit);

        dispatch(setButtonData({kit, count}));
        dispatch(resetSelectedCards());
        setToggleActive(btn);
    };

    return (
        <div className="buttons__block">
            <h1 className="title">Creator AI</h1>

            <div className="buttons">
                <div className="buttons__flex">
                    <button
                        onClick={(event) => handleButtonClick(event, 'button1')}
                        className={`buttons__button ${toggleActive === 'button1' ? 'button__active' : ''}`}
                        id="one"
                        data-kit="4"
                    >Набор 1</button>
                    <button
                        onClick={(event) => handleButtonClick(event, 'button2')}
                        className={`buttons__button ${toggleActive === 'button2' ? 'button__active' : ''}`}
                        id="two"
                        data-kit="5"
                    >Набор 2</button>
                </div>
                <button
                    className={`buttons__generate ${selectedCards.length >= 2 ? 'buttons__generate__active' : ''}`}
                    disabled
                >Генератор</button>
            </div>
        </div>
    );
};

export default Buttons;