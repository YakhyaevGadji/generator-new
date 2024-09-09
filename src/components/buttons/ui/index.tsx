import React from 'react';
import { resetSelectedCards, setButtonData } from "../../../redux/reduxSlice.ts";
import { useDispatch } from "react-redux";
import './buttons.css';

const Buttons: React.FC = (): React.JSX.Element => {
    const dispatch = useDispatch();

    const handleButtonClick = (event: any) => {
        const kit = event.target.id;
        const count = Number(event.target.dataset.kit);

        dispatch(setButtonData({kit, count}));
        dispatch(resetSelectedCards());
    };

    return (
        <div className="buttons__block">
            <h1 className="title">Generate AI</h1>

            <div className="buttons">
                <div className="buttons__flex">
                    <button onClick={handleButtonClick} className="buttons__button" id="one" data-kit="4">Набор 1</button>
                    <button onClick={handleButtonClick} className="buttons__button" id="two" data-kit="5">Набор 2</button>
                </div>
                <button className="buttons__generate" disabled>Генератор</button>
            </div>
        </div>
    );
};

export default Buttons;