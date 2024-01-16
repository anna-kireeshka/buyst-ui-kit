import { FC } from 'react';
import './Range.scss';
import '../index.scss';
export interface MyInputProps {
    label?: string;
    step: number;
    min: number;
    max: number;
    onChange?: () => {};
    onBlur?: () => {};
    onFocus?: () => {};
}
declare const Range: FC<MyInputProps>;
export default Range;
