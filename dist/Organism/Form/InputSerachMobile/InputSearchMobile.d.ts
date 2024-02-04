import { ChangeEvent, FC } from 'react';
export interface Props {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}
declare const InputSearchMobile: FC<Props>;
export default InputSearchMobile;
