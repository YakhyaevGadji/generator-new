import configureStore from "redux-mock-store";
import {render} from "@testing-library/react";
import {Provider} from "react-redux";
import App from "../../App.tsx";
import {setButtonData} from "./reduxSlice.ts";

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

        // Массив выбранных карточек
        selectedCards: [],

        //Объект с данными кнопок
        buttonData: {
            kit: '',
            count: 0,
        },
    }
}

const mockStore = configureStore([]);
const store = mockStore(initialState);

describe('redux reducers', () => {
    beforeEach(() => {
        render(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    });

    it('setButtonData test', () => {
        const action = setButtonData({kit: '', count: 0});

        expect(action.payload).toEqual({kit: '', count: 0});
    });

    it('setSelectedCards test', () => {

    });
});