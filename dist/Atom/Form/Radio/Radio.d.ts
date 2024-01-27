import { FC } from 'react';
export interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Radio: FC<MyInputProps>;
export default Radio;
