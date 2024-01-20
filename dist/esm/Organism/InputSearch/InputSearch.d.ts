import { ChangeEvent, FC } from 'react';
import { CategoryList, SubCategoryList } from '../../types/types';
export interface Props {
    label: string;
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isDesktop: boolean;
    openCategoryList: boolean;
    onClick: () => void;
    categoryList: CategoryList[];
    subCategoriesList: SubCategoryList[];
}
export interface PropsCategoryList {
    categoryList: CategoryList[];
    subCategoriesList: SubCategoryList[];
    isDesktop: boolean;
}
declare const InputSearch: FC<Props>;
export default InputSearch;
