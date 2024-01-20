import React, { ChangeEvent, FC, ReactNode, useState } from 'react'
import Input from '../../Input/Input'
import { CategoryIcon, CloseIcon, SearchIcon } from '../../svg-sprite/common'
import styles from './InputSearch.module.scss'
import CategoryDropDownDesktop from '../../Atom/CategoryDropDownDesktop/CategoryDropDownDesktop'
import { CategoryList, SubCategoryList } from '../../types/types'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   isDesktop: boolean
   openCategoryList: boolean
   onClick: () => void
   categoryList: CategoryList[]
   subCategoriesList: SubCategoryList[]
}

export interface PropsCategoryList {
   categoryList: CategoryList[]
   subCategoriesList: SubCategoryList[]
   isDesktop: boolean
}

const CategoryListTemplate: FC<PropsCategoryList> = ({
   isDesktop,
   categoryList,
   subCategoriesList,
}) => {
   let node: ReactNode

   if (isDesktop) {
      node = (
         <CategoryDropDownDesktop
            categoryList={categoryList}
            subCategoriesList={subCategoriesList}
         />
      )
   } else {
      node = null
   }
   return node
}
const InputSearch: FC<Props> = (
   {
      label,
      value,
      onChange,
      isDesktop,
      openCategoryList,
      onClick,
      subCategoriesList,
      categoryList,
   },
   props
) => {
   return (
      <div className={styles.search}>
         <button className={styles.categoryBtn} onClick={onClick}>
            {openCategoryList ? <CloseIcon /> : <CategoryIcon />}
         </button>
         {openCategoryList && (
            <CategoryListTemplate
               categoryList={categoryList}
               subCategoriesList={subCategoriesList}
               isDesktop={isDesktop}
            />
         )}
         <div className={styles.searchWrapper}>
            <Input
               {...props}
               type={'text'}
               label={label}
               state={'default'}
               borderRadius={false}
               value={value}
               onChange={onChange}
            ></Input>
         </div>

         <button className={styles.searchBtn}>
            <SearchIcon />
         </button>
      </div>
   )
}

export default InputSearch
