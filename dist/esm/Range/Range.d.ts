import { FC } from 'react';
import './Range.scss';
import '../index.scss';
export interface MyInputProps {
    label?: string;
    min: number;
    max: number;
}
declare const Range: FC<MyInputProps>;
export default Range;
