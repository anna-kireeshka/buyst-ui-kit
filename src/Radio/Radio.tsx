import React from 'react'
import { FC } from 'react'
import './Radio.scss'
import '../index.scss'

export interface MyInputProps {
   disabled?: boolean
   defaultChecked?: boolean
   label?: string
}
const Radio: FC<MyInputProps> = ({ disabled, ...props }) => {
   return (
      <label className="container">
         {' '}
         {props.label}
         <input type="radio" {...props} className={'input-radio'} />
         <span className={'input-radiomark'} />
      </label>
   )
}

export default Radio
