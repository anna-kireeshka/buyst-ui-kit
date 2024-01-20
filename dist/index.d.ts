import { FC, ReactNode } from 'react';

type Color$1 = 'green' | 'gray' | 'orange' | 'red' | 'primary';
interface MyButtonProps$1 {
    children: ReactNode;
    loading?: boolean;
    size?: 'small' | 'medium';
    theme: Color$1;
    transparent?: boolean;
    fullWidth?: boolean;
    withIcon?: boolean;
    outline?: boolean;
    disabled?: boolean;
}
declare const Button: FC<MyButtonProps$1>;

interface MyInputProps$2 {
    type: 'text' | 'password' | 'number';
    state: 'default' | 'danger' | 'success' | 'disabled' | 'outlined';
    placeholder?: string;
    label?: string;
    min?: number;
    max?: number;
    value: string | number;
    borderRadius: boolean;
}
declare const Input: FC<MyInputProps$2>;

interface MyInputProps$1 {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Checkbox: FC<MyInputProps$1>;

interface MyInputProps {
    disabled?: boolean;
    defaultChecked?: boolean;
    label?: string;
}
declare const Radio: FC<MyInputProps>;

interface Props$1 {
    theme: 'green' | 'gray' | 'orange' | 'red';
    size: 'xs' | 'sm' | 'lg';
    fill?: boolean;
    children: ReactNode;
}
declare const ButtonIcon: FC<Props$1>;

type Color = 'whatsapp' | 'facebook' | 'telegram' | 'instagram';
interface MyButtonProps {
    children: ReactNode;
    theme: Color;
    transparent?: boolean;
}
declare const ButtonSocialNetwork: FC<MyButtonProps>;

interface Props {
    categoryList: {
        id: number;
        name: string;
        icon: string;
        uri: string;
    }[];
    subCategoriesList: {
        secondLevelCategories: [
            {
                id: number;
                name: string;
                uri: string;
                thirdLevelCategories: {
                    id: number;
                    name: string;
                    uri: string;
                }[];
            }
        ];
    }[];
}
declare const CategoryDropDownDesktop: FC<Props>;

export { Button, ButtonIcon, ButtonSocialNetwork, CategoryDropDownDesktop, Checkbox, Input, Radio };
