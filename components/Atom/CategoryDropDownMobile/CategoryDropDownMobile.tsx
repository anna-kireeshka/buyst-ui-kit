import React, { FC, useState } from 'react'
import Link from 'next/link'
import { ArrowIconDown, ArrowRightIcon } from '../../svg-sprite/common'
import styles from './CategoryDropDownMobile.module.scss'
import { CategoryList } from '../../types/types'

export interface Props {
   categoryList: CategoryList[]
}

const CategoryDropDownMobile: FC<Props> = ({ categoryList }) => {
   const [activeCategory, setActiveCategory] = useState('')
   const openCategory = (name: string) => {
      activeCategory.length ? setActiveCategory('') : setActiveCategory(name)
   }
   return (
      <div className={styles.categories}>
         <div>
            <div className={styles.categoriesList}>
               <div className={styles.categoriesListContainer}>
                  {categoryList.map((el) => (
                     <div key={el.id} onClick={() => openCategory(el.name)}>
                        <div className={styles.categoriesListMainLink}>
                           <div>
                              <img
                                 className={styles.categoriesListMainLinkIcon}
                                 src={el.icon}
                                 alt="category icon"
                                 width={30}
                                 height={30}
                              ></img>
                              <span>{el.name}</span>
                           </div>

                           {activeCategory !== el.name ? <ArrowRightIcon /> : <ArrowIconDown />}
                        </div>
                        {activeCategory === el.name && el.secondLevelCategories?.length ? (
                           <ul className={styles.categoriesChildrenList}>
                              {el.secondLevelCategories.map((second) => (
                                 <li key={second.id} className={styles.categoriesChildrenListItem}>
                                    <Link href={second.uri} className={styles.categoriesLink}>
                                       {second.name}
                                    </Link>
                                 </li>
                              ))}
                           </ul>
                        ) : null}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default CategoryDropDownMobile
