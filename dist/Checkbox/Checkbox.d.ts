import { FC } from 'react';
import './Checkbox.scss';
import '../index.scss';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
    onChange: () => {};
    onBlur: () => {};
    onFocus: () => {};
}
declare const Checkbox: FC<MyInputProps>;
export default Checkbox;
