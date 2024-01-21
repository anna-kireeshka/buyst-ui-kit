import { ChangeEvent, FC } from 'react';
export interface Props {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    openCategoryList: boolean;
    onClick: () => void;
    placeholder: string;
}
export interface PropsCategoryList {
    isOpen: boolean;
}
declare const InputSearch: FC<Props>;
export default InputSearch;
