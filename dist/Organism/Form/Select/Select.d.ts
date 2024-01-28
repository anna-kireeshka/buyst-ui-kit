import { FC } from 'react';
export interface Props {
    label: string;
    listLength?: number;
    value: string | number;
    isOpen: boolean;
    onHandleDropdown: (id?: number | null | string) => void;
    selectValue: (value: string | number) => void;
    id: number | string;
}
declare const Select: FC<Props>;
export default Select;
