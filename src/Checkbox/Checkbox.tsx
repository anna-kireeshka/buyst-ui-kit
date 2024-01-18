import React from 'react'
import { FC } from 'react'
import './Checkbox.scss'
import '../index.scss'

export interface MyInputProps {
   disabled?: boolean
   defaultChecked?: boolean
   label?: string
}
const Checkbox: FC<MyInputProps> = ({ disabled, ...props }) => {
   return (
      <label className="container">
         {' '}
         {props.label}
         <input type="checkbox" {...props} className={'input-checkbox'} />
         <span className={'input-checkmark'} />
      </label>
   )
}

export default Checkbox
