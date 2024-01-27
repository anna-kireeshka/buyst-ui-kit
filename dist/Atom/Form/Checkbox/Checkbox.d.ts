import { FC } from 'react';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Checkbox: FC<MyInputProps>;
export default Checkbox;
