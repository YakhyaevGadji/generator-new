import { Card } from '../../../redux/slices/redux.types.ts';
import CardItem from '../ui';
import { fireEvent, render, screen } from '@testing-library/react';

describe('card-item', () => {
    const handleClick = jest.fn();
    const mockCard: Card = {
        id: 1,
        img: 'https://example.com/image.png',
        title: 'test card',
        kit: 'one',
        status: true,
    };

    beforeEach(() => {
        render(<CardItem card={mockCard} handleClick={handleClick} type="card" indexCard={1} />);
    });

    it('render card', () => {
        const imgElem = screen.getByAltText(/Test Card/i);
        const counterElement = screen.getByText(/1/i);

        expect(imgElem).toHaveAttribute('src', mockCard.img);
        expect(counterElement).toBeInTheDocument();
    });

    it('click handle card', () => {
        const cardImg = screen.getByAltText(/Test Card/i);

        fireEvent.click(cardImg);

        expect(handleClick).toHaveBeenCalledWith(mockCard, mockCard.id);
    });

    it('check card active', () => {
        const card = screen.getByAltText(/Test Card/i).parentElement;

        expect(card).toHaveClass('card__active');
    });
});
