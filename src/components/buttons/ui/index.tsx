import React from 'react';
import './buttons.css';

const Buttons: React.FC = (): React.JSX.Element => {
    return (
        <div className="buttons__block">
            <h1 className="title">Generate AI</h1>

            <div className="buttons">
                <div className="buttons__flex">
                    <button className="buttons__button" id="one" data-kit="4">Набор 1</button>
                    <button className="buttons__button" id="two" data-kit="5">Набор 2</button>
                </div>
                <button className="buttons__generate" disabled>Генератор</button>
            </div>
        </div>
    );
};

export default Buttons;