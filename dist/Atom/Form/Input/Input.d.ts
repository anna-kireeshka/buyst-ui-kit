import { ChangeEvent } from 'react';
import { FC } from 'react';
export interface MyInputProps {
    type: 'text' | 'password' | 'number';
    state: string | 'default' | 'danger' | 'success' | 'disabled' | 'outlined';
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    value: string | number;
    borderRadius: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    size: 'xs' | 'sm';
}
declare const Input: FC<MyInputProps>;
export default Input;
