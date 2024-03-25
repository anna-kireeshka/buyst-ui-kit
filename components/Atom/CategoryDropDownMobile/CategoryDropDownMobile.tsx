import React, { FC, useState } from 'react'
import Link from 'next/link'
import { ImageIcon } from '../../svg-sprite/common'
import styles from './CategoryDropDownMobile.module.scss'

export interface Props {
   open: boolean
   close: () => void
}

const CategoryDropDownMobile: FC<Props> = () => {
   const [isOpenSubCategory, setIsOpenSubCategory] = useState(false)
   return (
      <div className={styles.categories}>
         <div>
            <div className={styles.categoriesList}>
               <div className={styles.categoriesListContainer}>
                  <div>
                     <button className={styles.categoriesListMainLink}>
                        <ImageIcon />
                        <p>Main Category</p>
                     </button>
                     {isOpenSubCategory && (
                        <ul className={styles.categoriesChildrenList}>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category
                              </Link>
                           </li>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category_2
                              </Link>
                           </li>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category_3
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>
                  <div>
                     <button className={styles.categoriesListMainLink}>
                        <ImageIcon />
                        <p>Main Category</p>
                     </button>
                     {isOpenSubCategory && (
                        <ul className={styles.categoriesChildrenList}>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category
                              </Link>
                           </li>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category_2
                              </Link>
                           </li>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                                 sub_menu_category_3
                              </Link>
                           </li>
                        </ul>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryDropDownMobile
