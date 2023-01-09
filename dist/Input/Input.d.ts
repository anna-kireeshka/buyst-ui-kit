import { FC } from 'react';
import './Input.css';
import '../index.css';
export interface MyInputProps {
    block?: boolean;
    placeholder?: string;
    label?: string;
    onChange?: () => void;
    type: 'text' | 'phone' | 'email';
    column?: boolean;
}
declare const Input: FC<MyInputProps>;
export default Input;
