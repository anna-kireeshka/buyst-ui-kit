import { FC } from 'react';
export interface Props {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
    id: string;
}
declare const CheckboxBtn: FC<Props>;
export default CheckboxBtn;
