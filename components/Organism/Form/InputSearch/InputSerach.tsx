import React, { ChangeEvent, FC, ReactNode, useState } from 'react'
import Input from '../../../Atom/Form/Input/Input'
import { CategoryIcon, CloseIcon, SearchIcon } from '../../../svg-sprite/common'
import CategoryDropDownDesktop from '../../../Atom/CategoryDropDownDesktop/CategoryDropDownDesktop'

import styles from './InputSerach.module.scss'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   openCategoryList: boolean
   onClick: () => void
   placeholder: string
   borderRadius: boolean
}
const InputSerach: FC<Props> = ({
   label = '',
   value = '',
   onChange,
   openCategoryList = false,
   onClick,
   placeholder = '',
   borderRadius = false,
   ...props
}) => {
   return (
      <div className={styles.search}>
         <button className={styles.categoryBtn} onClick={onClick}>
            {openCategoryList ? <CloseIcon /> : <CategoryIcon />}
         </button>
         {openCategoryList && <CategoryDropDownDesktop />}
         <div className={styles.searchWrapper}>
            <Input
               type={'text'}
               label={label}
               state={''}
               borderRadius={borderRadius}
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

export default InputSerach
