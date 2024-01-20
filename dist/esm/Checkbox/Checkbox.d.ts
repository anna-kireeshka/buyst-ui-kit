import { FC } from 'react';
import '../index.scss';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Checkbox: FC<MyInputProps>;
export default Checkbox;
