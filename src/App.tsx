import React from "react";
import Buttons from "./components/buttons/ui";
import Cards from "./components/cards/ui";
import SelectedCards from "./components/selected-cards/ui";
import { useAppSelector } from "./hooks/redux.ts";

const App: React.FC = (): React.JSX.Element => {
    const { buttonData, cards, selectedCards } = useAppSelector((state) => state.data);

    console.log(selectedCards);

    return (
        <div className="main">
            <Buttons/>
            <div className="render__block">
                <Cards buttonData={buttonData} cards={cards} selectedCards={selectedCards}/>
                <SelectedCards selectedCards={selectedCards} cards={cards}/>;
            </div>
        </div>
    );
};

export default App;
