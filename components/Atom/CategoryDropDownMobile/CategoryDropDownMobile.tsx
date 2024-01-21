import React, { FC, useState } from 'react'
import Link from 'next/link'
import { ArrowIconDown, ArrowRightIcon } from '../../svg-sprite/common'
import styles from './CategoryDropDownMobile.module.scss'

export interface Props {}

const CategoryDropDownMobile: FC<Props> = () => {
   return (
      <div className={styles.categories}>
         <div>
            <div className={styles.categoriesList}>
               <div className={styles.categoriesListContainer}>
                  <div>
                     <div className={styles.categoriesListMainLink}>
                        <div>
                           {/*<img*/}
                           {/*   className={styles.categoriesListMainLinkIcon}*/}
                           {/*   src={'/'}*/}
                           {/*   alt="category icon"*/}
                           {/*   width={30}*/}
                           {/*   height={30}*/}
                           {/*></img>*/}
                           <span>MainCategory</span>
                        </div>
                        <ArrowRightIcon />
                        {/*{activeCategory ? <ArrowRightIcon /> : <ArrowIconDown />}*/}
                     </div>
                     <ul className={styles.categoriesChildrenList}>
                        <li className={styles.categoriesChildrenListItem}>
                           <Link href={'/'} className={styles.categoriesLink}>
                              sub_menu_category
                           </Link>
                        </li>
                        <li className={styles.categoriesChildrenListItem}>
                           <Link href={'/'} className={styles.categoriesLink}>
                              sub_menu_category_2
                           </Link>
                        </li>
                        <li className={styles.categoriesChildrenListItem}>
                           <Link href={'/'} className={styles.categoriesLink}>
                              sub_menu_category_3
                           </Link>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryDropDownMobile
