import React, { FC } from 'react'
import styles from './ColorPicker.module.scss'
export interface Props {
   checked: boolean
}
const ColorPicker: FC<Props> = ({ checked }) => {
   return (
      <div className={styles.colors}>
         <label className={styles.container}>
            <input type="checkbox" className={styles.input}></input>
            <div
               className={`${styles.inputColor} ${checked && styles.inputColorChecked}`}
               style={{ backgroundColor: 'red' }}
            ></div>
         </label>
         <label className={styles.container}>
            <input type="checkbox" className={styles.input}></input>
            <div
               className={`${styles.inputColor} ${checked && styles.inputColorChecked}`}
               style={{ backgroundColor: 'green' }}
            ></div>
         </label>
      </div>
   )
}

export default ColorPicker
