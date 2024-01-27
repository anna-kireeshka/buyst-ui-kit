import React from 'react'
import { FC } from 'react'
import styles from './Radio.module.scss'
import '../../../index.scss'

export interface MyInputProps {
   disabled?: boolean
   defaultChecked?: boolean
   label?: string
}
const Radio: FC<MyInputProps> = ({ disabled }, props) => {
   return (
      <label className={styles.container}>
         <input type="radio" {...props} className={styles.radio} />
         <span className={styles.radioMark} />
         {props.label}
      </label>
   )
}

export default Radio
