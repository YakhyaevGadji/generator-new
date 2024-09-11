import React from 'react';
import { resetSelectedCards, setButtonData } from "../../../redux/reduxSlice.ts";
import { useDispatch } from "react-redux";
import { IPropsButtons } from "../model/buttons.types.ts";
import './buttons.css';

const Buttons: React.FC<IPropsButtons> = ({selectedCards, buttons}): React.JSX.Element => {
    const dispatch = useDispatch();
    const [toggleActive, setToggleActive] = React.useState<number>(0);

    // Обработчик клика по кнопкам
    const handleButtonClick = (kit: string, count: number, id: number): void => {
        setToggleActive(id);

        dispatch(setButtonData({kit, count}));
        dispatch(resetSelectedCards());
    };

    return (
        <div className="buttons__block">
            <h1 className="title">Creator AI</h1>

            <div className="buttons">
                <div className="buttons__flex">
                    {buttons.map((btn) => {
                        return (
                            <button
                                onClick={() => handleButtonClick(btn.kit, btn.count, btn.id)}
                                key={btn.id}
                                className={`buttons__button ${btn.id === toggleActive ? 'button__active' : ''}`}
                            >
                                {btn.title}
                            </button>
                        );
                    })}
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