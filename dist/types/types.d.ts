export interface CategoryList {
    id: number;
    name: string;
    icon: string;
    uri: string;
    secondLevelCategories?: {
        id: number;
        name: string;
        uri: string;
        thirdLevelCategories: {
            id: number;
            name: string;
            uri: string;
        }[];
    }[];
}
export interface SubCategoryList {
    secondLevelCategories: {
        id: number;
        name: string;
        uri: string;
        thirdLevelCategories: {
            id: number;
            name: string;
            uri: string;
        }[];
    }[];
}
