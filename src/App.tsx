import React from "react";
import Buttons from "./components/buttons/ui";
import Cards from "./components/cards/ui";
import SelectedCards from "./components/selected-cards/ui";

const App: React.FC = (): React.JSX.Element => {
    return (
        <div className="main">
            <Buttons/>
            <div className="render__block">
                <Cards/>
                <SelectedCards/>;
            </div>
        </div>
    );
};

export default App;
