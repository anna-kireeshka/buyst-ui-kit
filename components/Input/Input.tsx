import React, { ChangeEvent, KeyboardEvent } from 'react'
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
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const Input: FC<MyInputProps> = ({
   type,
   label = '',
   state = 'default',
   value,
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

   const inputStyle = cx(styles['input'], {
      [styles[`input-${state}`]]: state,
      [styles[`input-withoutBorder`]]: !borderRadius,
   })

   const borderStyle = () => (!borderRadius ? { borderRadius: 0 } : null)

   return (
      <label className={styles.label}>
         {label}
         <input
            type={type}
            value={value}
            className={inputStyle}
            onKeyDown={(ev) => handleInputKeyup(ev)}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
         />
      </label>
   )
}

export default Input
