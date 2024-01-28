import { FC, ReactNode } from 'react';
export interface Props {
    label: string;
    children?: ReactNode;
    value: string | number;
    isOpen: boolean;
    onClick: () => void;
}
declare const ButtonDropdown: FC<Props>;
export default ButtonDropdown;
