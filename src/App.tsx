import { FC, useMemo } from 'react';
import ButtonBlock from './components/button-block/ui';
import CardList from './components/card-list/ui';
import { useAppSelector } from './shared/hooks/redux.ts';
import { getButtonData, getCards, getSelectedCards } from './redux/selectors.ts';
import SelectedList from './components/selected-list/ui';

const App: FC = () => {
    const cards = useAppSelector(getCards);
    const buttonData = useAppSelector(getButtonData);
    const selectedCards = useAppSelector(getSelectedCards);

    const filterCards = useMemo(() => {
        return cards.filter(card => buttonData.kit === card.kit).splice(0, buttonData.count);
    }, [ buttonData.count, buttonData.kit, cards ]);

    return (
        <div className="main">
            <ButtonBlock/>
            <div className="render__block">
                <CardList cards={filterCards} selectedCards={selectedCards} />
                <SelectedList selectedCards={selectedCards} />
            </div>
        </div>
    );
};

export default App;
