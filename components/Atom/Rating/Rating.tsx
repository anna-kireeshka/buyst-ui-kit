import React, { FC, useState } from 'react'
import styles from './Rating.module.scss'

export interface Props {
   isClickable: boolean
   fontSize: number
   rating: number
   setRating: (index: number) => void
   hover: number
   setHover: (index: number) => void
   isShowRatingCount: boolean
   isShowReviewCount: boolean
   reviewCount: string
}
const Rating: FC<Props> = ({
   fontSize = 1,
   rating = 0,
   setRating,
   hover,
   setHover,
   isClickable = false,
   isShowRatingCount = true,
   isShowReviewCount = true,
   reviewCount = '',
}) => {
   return (
      <div className={styles.rating}>
         {isShowRatingCount && (
            <strong className={styles.ratingCount} style={{ fontSize: fontSize + 'rem' }}>
               {rating}
            </strong>
         )}
         {[...Array(5)].map((star, index) => {
            index += 1
            return (
               <button
                  type="button"
                  key={index}
                  style={{ fontSize: fontSize + 'rem' }}
                  className={`${styles.button} ${
                     index <= (hover || rating) ? styles.buttonOn : styles.buttonOff
                  }`}
                  onClick={isClickable ? () => setRating(index) : undefined}
                  onMouseEnter={isClickable ? () => setHover(index) : undefined}
                  onMouseLeave={isClickable ? () => setHover(rating) : undefined}
               >
                  <span className={styles.star}>&#9733;</span>
               </button>
            )
         })}
         {isShowReviewCount && (
            <strong className={styles.ratingCount} style={{ fontSize: fontSize + 'rem' }}>
               {reviewCount}
            </strong>
         )}
      </div>
   )
}

export default Rating
