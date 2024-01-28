import { FC, ReactNode } from 'react';
export interface Props {
    label: string;
    children: ReactNode;
    id: number | string;
    onHandleDropdown: (id?: number | null | string) => void;
    isOpen: boolean;
}
declare const SelectRange: FC<Props>;
export default SelectRange;
