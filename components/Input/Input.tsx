import React, { ChangeEvent, KeyboardEvent } from 'react'
import { FC } from 'react'
import styles from './Input.module.scss'
import cn from 'classnames'

export interface MyInputProps {
   type: 'text' | 'password' | 'number'
   state: string | 'default' | 'danger' | 'success' | 'disabled' | 'outlined'
   placeholder?: string
   label?: string
   min?: number
   max?: number
   value: string | number
   borderRadius: boolean
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<MyInputProps> = ({
   type = 'text',
   label = '',
   state = '',
   value = '',
   borderRadius = true,
   onChange,
   placeholder = '',
   ...props
}) => {
   const handleInputKeyup = (ev: KeyboardEvent<HTMLInputElement>) => {
      const code = ev.code.toLowerCase()
      if (type === 'number') {
         if (code.includes('key')) {
            ev.preventDefault()
         }
      }
   }

   const classes = cn(styles['input'], {
      [styles[`input-${state}`]]: state !== '',
      [styles.inputWithoutBorder]: !borderRadius,
   })

   return (
      <label className={styles.label}>
         {label}
         <input
            type={type}
            value={value}
            className={` ${styles.inputField} ${styles.input + '--' + state} ${
               !borderRadius && styles.inputWithoutBorder
            }`}
            onKeyDown={(ev) => handleInputKeyup(ev)}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
         />
      </label>
   )
}

export default Input
