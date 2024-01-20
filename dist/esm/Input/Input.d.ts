import { FC } from 'react';
export interface MyInputProps {
    type: 'text' | 'password' | 'number';
    state: 'default' | 'danger' | 'success' | 'disabled' | 'outlined';
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    value: string | number;
    borderRadius: boolean;
}
declare const Input: FC<MyInputProps>;
export default Input;
