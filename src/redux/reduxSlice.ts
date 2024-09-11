import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {Card, Data, TypeButtonData} from "./redux.types.ts";

const initialState: Data = {

    // Массив карточек
    cards: [
        {id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nAnjJlvd4VGFaoKIyredFj6o66AFuevc7A&s',
            title: 'kit one1',
            kit: 'one',
            status: false
        },
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgMO_vLuojLTA7Jmm4XBQmSuF0ykBMXZVig&s', title: 'kit one2', kit: 'one', status: false},
        {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0lutGHI_snEF6hOUkp83oXDBuGPhHST9YQ&s', title: 'kit one3', kit: 'one', status: false},
        {id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimeX2iQJcWi0ZIJ38Lb0SCZ1Yte71DEJWyw&s', title: 'kit one4', kit: 'one', status: false},
        {id: 5, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlytK5DOFx-h3FUbWQ0a5vk5xGurkrUEYRkQ&s', title: 'kit one5', kit: 'one', status: false},
        {id: 6, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6qXIMl6Fo07vNCLdwyHjpMno7bc-CUsmgBg&s', title: 'kit one6', kit: 'one', status: false},
        {id: 7, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJAR_NokEMsPB2RAL6gc2CEqHd_7ZEcSjorQ&s', title: 'kit one1', kit: 'two', status: false},
        {id: 8, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4DVbS8xGvoVmc5TeqhV1JPT_K9w4Nff4UzA&s', title: 'kit one2', kit: 'two', status: false},
        {id: 9, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGhdNPW46S44FHPAiB27dMinszAqabpXfGQQ&s', title: 'kit one3', kit: 'two', status: false},
        {id: 10, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE6mtllIWGnO8L3OKlLDPL9RvoLTJmT8w9Lg&s', title: 'kit one4', kit: 'two', status: false},
        {id: 11, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtuu3EKfalAj5i9ZX4oSrjDaeVK1px9qQ3Pw&s', title: 'kit one5', kit: 'two', status: false},
        {id: 12, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoDQkRN3MeUWK4U-9j0hjr0bNGFUcgQN5vhg&s', title: 'kit one6', kit: 'two', status: false},
    ],

    buttons: [
        {id: 1, kit: 'one', title: 'Набор 1', count: 4},
        {id: 2, kit: 'one', title: 'Набор 1', count: 5},
    ],

    // Массив выбранных карточек
    selectedCards: [],

    //Объект с данными кнопок
    buttonData: {
        kit: '',
        count: 0
    },

};

export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setButtonData: (state, action: PayloadAction<TypeButtonData>) => {
            state.buttonData = action.payload;
        },
        setSelectedCards: (state, action: PayloadAction<{card: Card, id: number}>) => {
            const { id, card } = action.payload;
            const cardIndex = state.selectedCards.findIndex((item) => item.id === id);

            if (cardIndex > -1) {
                state.selectedCards.splice(cardIndex, 1);
            } else {
                state.selectedCards.push(card);
            }

            state.cards = state.cards.map((item) =>
                item.id === id ? { ...item, status: !item.status } : item
            )
        },
        resetSelectedCards: (state) => {
            state.selectedCards = [];
            state.cards = state.cards.map((item) => {return {...item, status: false}});
        },
    },
});

export const {
    setButtonData,
    setSelectedCards,
    resetSelectedCards,
} = counterSlice.actions

export default counterSlice.reducer