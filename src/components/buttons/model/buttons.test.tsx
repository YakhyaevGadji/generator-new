import Buttons from '../ui';
import { Provider } from 'react-redux';
import { fireEvent, render, screen } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import { Data } from '../../../redux/slices/redux.types.ts';
import { resetSelectedCards, setButtonData } from '../../../redux/slices/reduxSlice.ts';

const initialState = {
    data: {
        cards: [
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
            },
        ],

        buttons: [
            { id: 1, kit: 'one', title: 'Набор 1', count: 4 },
            { id: 2, kit: 'two', title: 'Набор 2', count: 5 },
        ],

        selectedCards: [],

        buttonData: {
            kit: '',
            count: 0,
        },
    } as Data,
};

const mockState = configureMockStore([]);
let mockStoreInstance: ReturnType<typeof mockState>;

describe('Buttons', () => {
    beforeEach(() => {
        mockStoreInstance = mockState(initialState);
        mockStoreInstance.dispatch = jest.fn();
    });

    it('click button', () => {
        render(
            <Provider store={mockStoreInstance}>
                <Buttons />
            </Provider>
        );

        // Находит кнопки
        const btn1 = screen.getByText(/Набор 1/i);
        const btn2 = screen.getByText(/Набор 2/i);

        // Проверка рендера
        expect(btn1).toBeInTheDocument();
        expect(btn2).toBeInTheDocument();

        // Клик по кнопке
        fireEvent.click(btn1);

        // Сработали функции или нет
        expect(mockStoreInstance.dispatch).toHaveBeenCalledWith(
            setButtonData({ kit: 'one', count: 4 })
        );
        expect(mockStoreInstance.dispatch).toHaveBeenCalledWith(resetSelectedCards());

        // Проверяет меняется класс или нет
        expect(btn1.classList).toContain('button__active');
    });
});
