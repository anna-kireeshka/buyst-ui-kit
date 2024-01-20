import React, { KeyboardEvent } from 'react'
import { FC } from 'react'
import styles from './Input.module.scss'
import cx from 'classnames'

export interface MyInputProps {
   type: 'text' | 'password' | 'number'
   state: 'default' | 'danger' | 'success' | 'disabled' | 'outlined'
   placeholder?: string
   label?: string
   min?: number
   max?: number
   value: string | number
   borderRadius: boolean
}
const Input: FC<MyInputProps> = (
   { type, label = '', state = 'default', value, borderRadius = true },
   props
) => {
   const handleInputKeyup = (ev: KeyboardEvent<HTMLInputElement>) => {
      const code = ev.code.toLowerCase()
      if (type === 'number') {
         if (code.includes('key')) {
            ev.preventDefault()
         }
      }
   }

   const inputStyle = cx(styles['input'], {
      [styles[`input-${state}`]]: state,
   })

   return (
      <label className={styles.label}>
         {label}
         <input
            {...props}
            type={type}
            defaultValue={value}
            className={inputStyle}
            onKeyDown={(ev) => handleInputKeyup(ev)}
            style={!borderRadius && { borderRadius: 0 }}
         />
      </label>
   )
}

export default Input
