import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    buttons: [
        {title: 'Набор 1', value: 'kitOne'},
        {title: 'Набор 2', value: 'kitTwo'},
    ],

    cards: [
        {id: 1, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2nAnjJlvd4VGFaoKIyredFj6o66AFuevc7A&s', title: 'kit one1', kit: 'one', status: false},
        {id: 2, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgMO_vLuojLTA7Jmm4XBQmSuF0ykBMXZVig&s', title: 'kit one2', kit: 'one', status: false},
        {id: 3, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0lutGHI_snEF6hOUkp83oXDBuGPhHST9YQ&s', title: 'kit one3', kit: 'one', status: false},
        {id: 4, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimeX2iQJcWi0ZIJ38Lb0SCZ1Yte71DEJWyw&s', title: 'kit one4', kit: 'one', status: false},
    ],

    selectedCards: [],

    kit: '',
    count: 0
}

export const counterSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {

    },
})

export const {  } = counterSlice.actions

export default counterSlice.reducer