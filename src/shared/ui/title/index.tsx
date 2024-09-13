import { createElement, FC } from 'react';

interface IProps {
    className?: string;
    value: string;
    type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const Title: FC<IProps> = ({ className, value, type }) => {
    return createElement(type, { className: className }, value);
};

export default Title;
