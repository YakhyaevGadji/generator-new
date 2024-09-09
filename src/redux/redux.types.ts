// Типы карточек и их количеству
export type TypeButtonData = {
    kit: string,
    count: number
};

// Карточка
export type Card = {
    id: number; //Уникальное число
    img: string; //Изображение
    title: string; //Название
    kit: 'one' | 'two'; //Тип
    status: boolean; //Статус
};

export interface Data {
    cards: Card[];
    selectedCards: Card[];
    buttonData: TypeButtonData
};