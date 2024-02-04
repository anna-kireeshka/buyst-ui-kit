import { ChangeEvent, FC } from 'react';
export interface Props {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    openCategoryList: boolean;
    onClick: () => void;
    placeholder: string;
    borderRadius: boolean;
}
declare const InputSerach: FC<Props>;
export default InputSerach;
