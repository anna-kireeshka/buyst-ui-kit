import React, { ChangeEvent, FC } from 'react'
import Input from '../../../Atom/Form/Input/Input'
import { SearchIcon } from '../../../svg-sprite/common'

import styles from './InputSearchMobile.module.scss'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   openCategoryList: boolean
   onClick: () => void
   placeholder: string
   borderRadius: boolean
}
const InputSearchMobile: FC<Props> = ({
   label = '',
   value = '',
   onChange,
   openCategoryList = false,
   onClick,
   placeholder = '',
   borderRadius = true,
   ...props
}) => {
   return (
      <div className={styles.search}>
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
            <div className={styles.searchWrapperIcon}>
               <SearchIcon />
            </div>
         </div>
      </div>
   )
}

export default InputSearchMobile
