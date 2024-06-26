import { FC, ReactNode } from 'react';
export interface Props {
    theme: 'green' | 'gray' | 'orange' | 'red';
    size: 'xs' | 'sm' | 'lg';
    fill?: boolean;
    children: ReactNode;
    onClick?: () => void;
}
declare const ButtonIcon: FC<Props>;
export default ButtonIcon;
