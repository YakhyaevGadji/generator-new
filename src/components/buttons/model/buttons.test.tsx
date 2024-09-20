import Buttons from '../ui';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { setButtonData } from "../../../redux/slices/reduxSlice.ts";
import {getButtonsType} from "../../../redux/selectors.ts";
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore([]);

const store = mockStore({
    data: {
        buttons: [
            { id: 1, kit: 'one', title: 'Набор 1', count: 4 },
            { id: 2, kit: 'two', title: 'Набор 2', count: 5 },
        ],

        selectedCards: [],

        buttonData: {
            kit: '',
            count: 0,
        },
    }
});

describe('Buttons', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <Buttons />
            </Provider>
        );
    });

    test('render buttons', () => {
        expect(screen.getByText(/Набор 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Набор 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Генератор/i)).toBeInTheDocument();
    });

    test('selectors redux', () => {
        const result = getButtonsType(store.getState() as any);

        expect(result).toEqual([
            { id: 1, kit: 'one', title: 'Набор 1', count: 4 },
            { id: 2, kit: 'two', title: 'Набор 2', count: 5 },
        ]);
    });

    test('button click', () => {
        expect(store.dispatch(setButtonData({kit: '', count: 0})))
    });
});