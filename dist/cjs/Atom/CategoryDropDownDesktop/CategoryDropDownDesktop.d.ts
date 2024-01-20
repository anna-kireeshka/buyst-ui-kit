import { FC } from 'react';
import { CategoryList, SubCategoryList } from '../../types/types';
export interface Props {
    categoryList: CategoryList[];
    subCategoriesList: SubCategoryList[];
}
declare const CategoryDropDownDesktop: FC<Props>;
export default CategoryDropDownDesktop;
