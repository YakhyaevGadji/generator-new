import {Card, TypeButtonData} from "../../../redux/redux.types.ts";

export interface IPropsCards {
    buttonData: TypeButtonData;
    cards: Card[];
    selectedCards: Card[]
}