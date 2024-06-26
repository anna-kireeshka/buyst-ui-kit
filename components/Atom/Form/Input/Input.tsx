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
   size: 'xs' | 'sm'
}
const Input: FC<MyInputProps> = ({
   type = 'text',
   label = '',
   state = '',
   value = '',
   borderRadius,
   onChange,
   placeholder = '',
   size = 'sm',
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

   const classes = cn(styles['input'], [styles[`input--${size}`]], {
      [styles[`input--${state}`]]: state !== '',
      [styles.inputWithoutBorder]: !borderRadius,
   })

   return (
      <div className={styles.field}>
         {!!label.length && <label className={styles.label}> {label} </label>}

         <input
            type={type}
            value={value}
            className={classes}
            onKeyDown={(ev) => handleInputKeyup(ev)}
            onChange={onChange}
            placeholder={placeholder}
            {...props}
         />
      </div>
   )
}

export default Input
