import { FC } from 'react';
export interface Props {
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
export default CategoryDropDownDesktop;
