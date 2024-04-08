import React, { ChangeEvent, FC } from 'react'
import Input from '../../../Atom/Form/Input/Input'
import { SearchIcon } from '../../../svg-sprite/common'

import styles from './InputSearchMobile.module.scss'

export interface Props {
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
   placeholder: string
}
const InputSearchMobile: FC<Props> = ({ value = '', onChange, placeholder = '', ...props }) => {
   return (
      <div className={styles.search}>
         <div className={styles.searchWrapper}>
            <Input
               type={'text'}
               label={''}
               state={''}
               borderRadius={true}
               value={value}
               onChange={onChange}
               placeholder={placeholder}
               size={'sm'}
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
