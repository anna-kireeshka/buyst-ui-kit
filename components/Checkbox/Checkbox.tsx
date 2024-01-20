import React from 'react'
import { FC } from 'react'
import styles from './Checkbox.module.scss'
import '../index.scss'

export interface MyInputProps {
   disabled?: boolean
   defaultChecked?: boolean
   label?: string
}
const Checkbox: FC<MyInputProps> = (props) => {
   return (
      <label className={styles.container}>
         <input type="checkbox" {...props} className={styles.checkbox} />
         <span className={styles.checkmark} />
         {props.label}
      </label>
   )
}

export default Checkbox
