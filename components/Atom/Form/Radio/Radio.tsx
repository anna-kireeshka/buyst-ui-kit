import React from 'react'
import { FC } from 'react'
import styles from './Radio.module.scss'
import '../../../index.scss'

export interface MyInputProps {
   disabled?: boolean
   defaultChecked?: boolean
   label: string
   id: string
   value: string
}
const Radio: FC<MyInputProps> = ({ id, label, value }) => {
   return (
      <label className={styles.container}>
         <input type="radio" id={id} name={id} value={value} className={styles.radio} />
         <span className={styles.radioMark} />
         {label}
      </label>
   )
}

export default Radio
