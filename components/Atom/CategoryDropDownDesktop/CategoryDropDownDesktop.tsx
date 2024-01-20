import React, { FC } from 'react'
import Link from 'next/link'
import { ArrowRightIcon } from '../../svg-sprite/common'
import styles from './CategoryDropDownDesctop.module.scss'

export interface Props {
   categoryList: {
      id: number
      name: string
      icon: string
      uri: string
   }[]
   subCategoriesList: {
      secondLevelCategories: [
         {
            id: number
            name: string
            uri: string
            thirdLevelCategories: {
               id: number
               name: string
               uri: string
            }[]
         }
      ]
   }[]
   onMouseOver: () => void
   activeCategory: string
}

const CategoryDropDownDesktop: FC<Props> = ({
   categoryList,
   subCategoriesList,
   onMouseOver,
   activeCategory,
}) => {
   return (
      <div className={styles.categories}>
         <div className={styles.categoriesContainer}>
            <div className={styles.categoriesMain}>
               <ul className={styles.categoriesMainList}>
                  {categoryList.map((el) => (
                     <li
                        key={el.id}
                        className={styles.categoriesMainListItem}
                        onMouseOver={onMouseOver}
                     >
                        <Link href={el.uri} className={styles.categoriesLink}>
                           {el.name}
                        </Link>
                        <ArrowRightIcon />
                     </li>
                  ))}
               </ul>
            </div>
            <div className={styles.categoriesChildren}>
               <strong className={styles.categoriesChildrenTitle}>{activeCategory}</strong>
               <div className={styles.categoriesChildrenGrid}>
                  {subCategoriesList.map((el) =>
                     el.secondLevelCategories.map((second) => (
                        <ul className={styles.categoriesChildrenList} key={second.id}>
                           <li className={styles.categoriesChildrenListItem}>
                              <Link className={styles.categoriesLink} href={second.uri}>
                                 <strong>{second.name}</strong>
                              </Link>
                              {second.thirdLevelCategories.map((third) => (
                                 <Link
                                    className={styles.categoriesLink}
                                    href={third.uri}
                                    key={third.id}
                                 >
                                    {third.name}
                                 </Link>
                              ))}
                           </li>
                        </ul>
                     ))
                  )}
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryDropDownDesktop
