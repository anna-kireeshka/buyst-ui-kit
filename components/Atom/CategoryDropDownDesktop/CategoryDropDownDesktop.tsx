import React, { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '../../svg-sprite/common'
import styles from './CategoryDropDownDesctop.module.scss'

export interface Props {}

const CategoryDropDownDesktop: FC<Props> = () => {
   return (
      <div className={styles.categories}>
         <div className={styles.categoriesContainer}>
            <div className={styles.categoriesMain}>
               <ul className={styles.categoriesMainList}>
                  <li className={styles.categoriesMainListItem}>
                     <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                        main category
                     </Link>
                     <ArrowRightIcon />
                  </li>
                  <li className={styles.categoriesMainListItem}>
                     <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                        main category 2
                     </Link>
                     <ArrowRightIcon />
                  </li>
                  <li className={styles.categoriesMainListItem}>
                     <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                        main category 3
                     </Link>
                     <ArrowRightIcon />
                  </li>
                  <li className={styles.categoriesMainListItem}>
                     <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                        main category 4
                     </Link>
                     <ArrowRightIcon />
                  </li>
                  <li className={styles.categoriesMainListItem}>
                     <Link prefetch={false} href={'/'} className={styles.categoriesLink}>
                        main category 5
                     </Link>
                     <ArrowRightIcon />
                  </li>
               </ul>
            </div>
            <div className={styles.categoriesChildren}>
               <strong className={styles.categoriesChildrenTitle}>Main Category Active</strong>
               <div className={styles.categoriesChildrenGrid}>
                  <ul className={styles.categoriesChildrenList}>
                     <li className={styles.categoriesChildrenListItem}>
                        <Link prefetch={false} className={styles.categoriesLink} href={'/'}>
                           <strong>sub_menu_category</strong>
                        </Link>
                        <Link prefetch={false} className={styles.categoriesLink} href={'/'}>
                           sub_menu_second_category
                        </Link>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryDropDownDesktop
