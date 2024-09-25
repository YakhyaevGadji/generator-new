import configureStore from 'redux-mock-store';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import SelectedList from "../ui";
import { Card } from "../../../redux/slices/redux.types.ts";
import { setSelectedCards } from "../../../redux/slices/reduxSlice.ts";

const mockStore = configureStore([]);
const store = mockStore({});

describe('selected list', () => {
    const selectedCards: Card[] = [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nAnjJlvd4VGFaoKIyredFj6o66AFuevc7A&s',
            title: 'kit one1',
            kit: 'one',
            status: false,
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgMO_vLuojLTA7Jmm4XBQmSuF0ykBMXZVig&s',
            title: 'kit one2',
            kit: 'one',
            status: false,
        }
    ];

    beforeEach(() => {
        render(
            <Provider store={store}>
                <SelectedList selectedCards={selectedCards} />
            </Provider>
        );
    });

    it('render selected card', () => {
        expect(screen.getByAltText(/kit one1/i)).toBeInTheDocument();
        expect(screen.getByAltText(/kit one2/i)).toBeInTheDocument();
    });

    it('dispatch selected card', () => {
        const card = screen.getByAltText(/kit one1/i);

        fireEvent.click(card);

        const action = store.getActions();

        expect(action).toEqual([setSelectedCards({card: selectedCards[0], id: selectedCards[0].id})]);
    });
});