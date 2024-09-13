export type TypeButton = {
    id: number;
    title: string;
    kit: 'one' | 'two';
<<<<<<< HEAD:src/redux/slices/redux.types.ts
    count: number;
=======
    count: number
>>>>>>> 160f29ec6d4b5d6401856e728e5d1bb83dc6a194:src/redux/redux.types.ts
};

// Типы карточек и их количеству
export type TypeButtonData = {
    kit: string;
    count: number;
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
    buttonData: TypeButtonData;
    buttons: TypeButton[];
<<<<<<< HEAD:src/redux/slices/redux.types.ts
}
=======
}
>>>>>>> 160f29ec6d4b5d6401856e728e5d1bb83dc6a194:src/redux/redux.types.ts
