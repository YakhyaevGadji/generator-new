import { FC } from 'react';
import Buttons from '../../buttons/ui';
import Title from '../../../shared/ui/title';
import './button-block.css';

const ButtonBlock: FC = () => {
    return (
        <div className="buttons__block">
            <Title className="title" value="Creator AI" type="h1" />
            <Buttons />
        </div>
    );
};

export default ButtonBlock;
