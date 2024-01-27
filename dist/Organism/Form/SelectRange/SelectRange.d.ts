import React, { FC } from 'react';
export interface Props {
    valueMin: string | number;
    valueMax: string | number;
    min: number;
    max: number;
    label: string;
    listLength?: number;
    onchangeMin: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onchangeMax: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const SelectRange: FC<Props>;
export default SelectRange;
