import { FC } from 'react';

interface IProps {
    className?: string;
    value: string;
    onClick?: () => void;
}

const Button: FC<IProps> = ({ className, value, onClick }) => {
    return (
        <button onClick={onClick} className={className}>
            {value}
        </button>
    );
};

export default Button;
