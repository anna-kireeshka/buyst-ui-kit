import { FC, ReactNode } from 'react';
export interface Props {
    children: ReactNode;
    bgColor: string;
    size?: 'small' | 'big';
}
declare const Tag: FC<Props>;
export default Tag;
