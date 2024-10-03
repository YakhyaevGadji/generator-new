import App from './App.tsx';
import {render, renderHook} from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';
import { useMemo } from 'react';
import {Data} from "./redux/slices/redux.types.ts";

const initialState: Data = {
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
        {
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0lutGHI_snEF6hOUkp83oXDBuGPhHST9YQ&s',
            title: 'kit one3',
            kit: 'one',
            status: false,
        },
        {
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimeX2iQJcWi0ZIJ38Lb0SCZ1Yte71DEJWyw&s',
            title: 'kit one4',
            kit: 'one',
            status: false,
        },
        {
            id: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlytK5DOFx-h3FUbWQ0a5vk5xGurkrUEYRkQ&s',
            title: 'kit one5',
            kit: 'one',
            status: false,
        },
        {
            id: 6,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qXIMl6Fo07vNCLdwyHjpMno7bc-CUsmgBg&s',
            title: 'kit one6',
            kit: 'one',
            status: false,
        },
        {
            id: 7,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAR_NokEMsPB2RAL6gc2CEqHd_7ZEcSjorQ&s',
            title: 'kit one1',
            kit: 'two',
            status: false,
        },
        {
            id: 8,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DVbS8xGvoVmc5TeqhV1JPT_K9w4Nff4UzA&s',
            title: 'kit one2',
            kit: 'two',
            status: false,
        },
        {
            id: 9,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhdNPW46S44FHPAiB27dMinszAqabpXfGQQ&s',
            title: 'kit one3',
            kit: 'two',
            status: false,
        },
        {
            id: 10,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6mtllIWGnO8L3OKlLDPL9RvoLTJmT8w9Lg&s',
            title: 'kit one4',
            kit: 'two',
            status: false,
        },
        {
            id: 11,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuu3EKfalAj5i9ZX4oSrjDaeVK1px9qQ3Pw&s',
            title: 'kit one5',
            kit: 'two',
            status: false,
        },
        {
            id: 12,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDQkRN3MeUWK4U-9j0hjr0bNGFUcgQN5vhg&s',
            title: 'kit one6',
            kit: 'two',
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
};

describe('test App', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App />
            </Provider>
        );
    })

    describe('filterCards hook', () => {
        it('should filter and limit the number of cards correctly based on buttonData', () => {

            const { result } = renderHook(() =>
                useMemo(() => {
                    return initialState.cards.filter(card => initialState.buttonData.kit === card.kit).splice(0, initialState.buttonData.count);
                }, [])
            );

            expect(result.current).toEqual([]);
        });

        it('should return all matching cards if count is larger than the number of matches', () => {
            const buttonData = { kit: 'kit1', count: 10 };
            const cards = [
                { id: 1, kit: 'kit1' },
                { id: 2, kit: 'kit1' },
                { id: 3, kit: 'kit1' }
            ];

            const { result } = renderHook(() =>
                useMemo(() => {
                    return cards.filter(card => buttonData.kit === card.kit).splice(0, buttonData.count);
                }, [])
            );

            expect(result.current).toEqual(cards);
        });
    });
});
