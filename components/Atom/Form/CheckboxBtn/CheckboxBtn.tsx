import React from 'react'
import { FC } from 'react'
import styles from './CheckboxBtn.module.scss'

export interface Props {
   disabled?: boolean
   defaultChecked?: boolean
   label?: string
   id: string
}
const CheckboxBtn: FC<Props> = (props) => {
   return (
      <label className={styles.container} htmlFor={props.id}>
         <input type="checkbox" {...props} className={styles.checkbox} id={props.id} />
         <span className={styles.buttonCheckmark}>{props.label}</span>
      </label>
   )
}

export default CheckboxBtn
