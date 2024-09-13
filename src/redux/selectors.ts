import { RootState } from './store.ts';

export const getButtonsType = (state: RootState) => state.data.buttons;
export const getCards = (state: RootState) => state.data.cards;
export const getButtonData = (state: RootState) => state.data.buttonData;
export const getSelectedCards = (state: RootState) => state.data.selectedCards;
