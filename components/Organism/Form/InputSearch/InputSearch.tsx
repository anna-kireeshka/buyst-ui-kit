import React, { ChangeEvent, FC, ReactNode, useState } from 'react'
import Input from '../../../Atom/Form/Input/Input'
import { CategoryIcon, CloseIcon, SearchIcon } from '../../../svg-sprite/common'
import CategoryDropDownDesktop from '../../../Atom/CategoryDropDownDesktop/CategoryDropDownDesktop'
import CategoryDropDownMobile from '../../../Atom/CategoryDropDownMobile/CategoryDropDownMobile'
import { useMediaQuery } from 'react-responsive'

import styles from './InputSearch.module.scss'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   openCategoryList: boolean
   onClick: () => void
   placeholder: string
}

export interface PropsCategoryList {
   isOpen: boolean
}

const CategoryListTemplate: FC<PropsCategoryList> = ({ isOpen }) => {
   const isDesktopOrLaptop = useMediaQuery({
      query: '(min-width: 1024px)',
   })

   let node: ReactNode = null
   if (isOpen) {
      if (isDesktopOrLaptop) {
         node = <CategoryDropDownDesktop />
      } else {
         node = <CategoryDropDownMobile />
      }
   }
   return node
}
const InputSearch: FC<Props> = ({
   label = '',
   value = '',
   onChange,
   openCategoryList = false,
   onClick,
   placeholder = '',
   ...props
}) => {
   return (
      <div className={styles.search}>
         <button className={styles.categoryBtn} onClick={onClick}>
            {openCategoryList ? <CloseIcon /> : <CategoryIcon />}
         </button>
         <CategoryListTemplate isOpen={openCategoryList} />
         <div className={styles.searchWrapper}>
            <Input
               type={'text'}
               label={label}
               state={''}
               borderRadius={false}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               {...props}
            ></Input>
         </div>

         <button className={styles.searchBtn}>
            <SearchIcon />
         </button>
      </div>
   )
}

export default InputSearch