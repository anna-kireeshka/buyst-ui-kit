import { FC, ReactNode } from 'react';

type Color$1 = 'green' | 'gray' | 'orange' | 'red' | 'primary';
interface MyButtonProps$1 {
    children: ReactNode;
    loading?: boolean;
    size?: 'small' | 'medium';
    theme: Color$1;
    transparent?: boolean;
    fullWidth?: boolean;
    withIcon?: boolean;
    outline?: boolean;
    disabled?: boolean;
}
declare const Button: FC<MyButtonProps$1>;

interface MyInputProps$2 {
    type: 'text' | 'password' | 'number';
    state: 'default' | 'danger' | 'success' | 'disabled' | 'outlined';
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    value: string | number;
}
declare const Input: FC<MyInputProps$2>;

interface MyInputProps$1 {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Checkbox: FC<MyInputProps$1>;

interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Radio: FC<MyInputProps>;

interface Props {
    theme: 'green' | 'gray' | 'orange' | 'red';
    size: 'xs' | 'sm' | 'lg';
    fill?: boolean;
    children: ReactNode;
}
declare const ButtonIcon: FC<Props>;

type Color = 'whatsapp' | 'facebook' | 'telegram' | 'instagram';
interface MyButtonProps {
    children: ReactNode;
    theme: Color;
    transparent?: boolean;
}
declare const ButtonSocialNetwork: FC<MyButtonProps>;

export { Button, ButtonIcon, ButtonSocialNetwork, Checkbox, Input, Radio };
