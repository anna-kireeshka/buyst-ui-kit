import { FC, ReactNode } from 'react';
export interface Props {
    label: string;
    children?: ReactNode;
    isSelectedValue: boolean;
    onClick: () => void;
    value: string | number;
}
declare const ButtonDropdown: FC<Props>;
export default ButtonDropdown;
