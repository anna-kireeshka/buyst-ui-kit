import { ChangeEvent, FC } from 'react';
export interface Props {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const InputSearch: FC<Props>;
export default InputSearch;
