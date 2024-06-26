import { FC } from 'react';
export interface Props {
    isClickable: boolean;
    fontSize: number;
    rating: number;
    setRating: (index: number) => void;
    hover: number;
    setHover: (index: number) => void;
    isShowRatingCount: boolean;
    isShowReviewCount: boolean;
    reviewCount: string;
}
declare const Rating: FC<Props>;
export default Rating;
