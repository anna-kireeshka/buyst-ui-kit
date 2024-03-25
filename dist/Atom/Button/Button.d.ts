import { FC, ReactNode } from 'react';
type Color = 'green' | 'gray' | 'orange' | 'red' | 'primary';
export interface MyButtonProps {
    children: ReactNode;
    loading?: boolean;
    size?: 'small' | 'medium';
    theme: Color;
    transparent?: boolean;
    fullWidth?: boolean;
    withIcon?: boolean;
    outline?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
declare const Button: FC<MyButtonProps>;
export default Button;
