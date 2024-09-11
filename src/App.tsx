import React from "react";
import Buttons from "./components/buttons/ui";
import Cards from "./components/cards/ui";
import SelectedCards from "./components/selected-cards/ui";
import { useAppSelector } from "./hooks/redux.ts";

const App: React.FC = (): React.JSX.Element => {
    const { buttonData, cards, selectedCards, buttons } = useAppSelector((state) => state.data);

    return (
        <div className="main">
            <Buttons selectedCards={selectedCards} buttons={buttons}/>
            <div className="render__block">
                <Cards
                    buttonData={buttonData}
                    cards={cards}
                    selectedCards={selectedCards}
                />
                <SelectedCards
                    selectedCards={selectedCards}
                    cards={cards}
                />
            </div>
        </div>
    );
};

export default App;
