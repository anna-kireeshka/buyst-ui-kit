import { FC } from 'react';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label: string;
    id: string;
    value: string;
}
declare const Radio: FC<MyInputProps>;
export default Radio;
