import React, { ChangeEvent, FC } from 'react'
import Input from '../../Input/Input'

export interface Props {
   label: string
   value: string
   onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
const InputSearch: FC<Props> = ({ label, value, onChange }, props) => {
   return (
      <Input
         {...props}
         type={'text'}
         label={label}
         state={'default'}
         borderRadius={false}
         value={value}
         onChange={onChange}
      ></Input>
   )
}

export default InputSearch
