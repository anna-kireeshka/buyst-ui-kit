import { FC } from 'react';
import './Button.css';
import '../index.css';
export interface MyButtonProps {
    label: string;
    disabled?: boolean;
    outline?: boolean;
    block?: boolean;
    variant: 'primary' | 'red' | 'yellow' | 'green' | 'violet';
    onClick?: () => void;
}
declare const Button: FC<MyButtonProps>;
export default Button;
