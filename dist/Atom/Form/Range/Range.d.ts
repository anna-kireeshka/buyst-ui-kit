import { FC } from 'react';
export interface MyInputProps {
    label?: string;
    min: number;
    max: number;
}
declare const Range: FC<MyInputProps>;
export default Range;
