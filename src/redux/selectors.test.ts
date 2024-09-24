import { getButtonData, getButtonsType, getCards, getSelectedCards } from './selectors.ts';
import { Data } from './slices/redux.types.ts';

describe('selects', () => {
    const mockState = {
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

    it('getButtonData', () => {
        expect(getButtonData(mockState)).toEqual({ kit: '', count: 0 });
    });

    it('getCards', () => {
        expect(getCards(mockState)).toEqual([
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
        ]);
    });

    it('getButtonsType', () => {
        expect(getButtonsType(mockState)).toEqual([
            { id: 1, kit: 'one', title: 'Набор 1', count: 4 },
            { id: 2, kit: 'two', title: 'Набор 2', count: 5 },
        ]);
    });

    it('getButtonsType', () => {
        expect(getSelectedCards(mockState)).toEqual([]);
    });
});
