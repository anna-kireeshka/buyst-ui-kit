import React, { ChangeEvent, FC, ReactNode, useState } from 'react'
import Input from '../../Input/Input'
import { CategoryIcon, CloseIcon, SearchIcon } from '../../svg-sprite/common'
import styles from './InputSearch.module.scss'
import CategoryDropDownDesktop from '../../Atom/CategoryDropDownDesktop/CategoryDropDownDesktop'
import { CategoryList, SubCategoryList } from '../../types/types'
import CategoryDropDownMobile from '../../Atom/CategoryDropDownMobile/CategoryDropDownMobile'
import { useMediaQuery } from 'react-responsive'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   openCategoryList: boolean
   onClick: () => void
   categoryList: CategoryList[]
   subCategoriesList: SubCategoryList[]
}

export interface PropsCategoryList {
   categoryList: CategoryList[]
   subCategoriesList: SubCategoryList[]
}

const CategoryListTemplate: FC<PropsCategoryList> = ({ categoryList, subCategoriesList }) => {
   const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1024px)',
   })
   let node: ReactNode

   console.log(isDesktopOrLaptop, 'isDesktopOrLaptop')
   if (isDesktopOrLaptop) {
      node = (
         <CategoryDropDownDesktop
            categoryList={categoryList}
            subCategoriesList={subCategoriesList}
         />
      )
   } else {
      node = <CategoryDropDownMobile categoryList={categoryList} />
   }
   return node
}
const InputSearch: FC<Props> = (
   { label, value, onChange, openCategoryList, onClick, subCategoriesList, categoryList },
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
