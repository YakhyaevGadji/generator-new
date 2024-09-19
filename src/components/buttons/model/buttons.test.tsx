import { Provider } from 'react-redux';
import Buttons from '../ui';
import { render, screen} from '@testing-library/react';
import {store} from "../../../redux/store.ts";

describe('Buttons', () => {
    test('render buttons', () => {
        render(
            <Provider store={store}>
                <Buttons/>
            </Provider>
        )

        expect(screen.getByText(/Набор 1/i)).toBeInTheDocument();
        expect(screen.getByText(/Набор 2/i)).toBeInTheDocument();
        expect(screen.getByText(/Генератор/i)).toBeInTheDocument();
    });
});