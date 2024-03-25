import { FC } from 'react';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
    id: string;
    value: string | number;
    onInput: () => void;
}
declare const Checkbox: FC<MyInputProps>;
export default Checkbox;
