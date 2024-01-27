import React, { FC, useState, useRef, useEffect } from 'react'
import ButtonDropdown from '../../../Atom/ButtonDropdown/ButtonDropdown'
import Input from '../../../Atom/Form/Input/Input'
import styles from './SelectRange.module.scss'
export interface Props {
   valueMin: string | number
   valueMax: string | number
   min: number
   max: number
   label: string
   listLength?: number
   onchangeMin: (e: React.ChangeEvent<HTMLInputElement>) => void
   onchangeMax: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const SelectRange: FC<Props> = ({
   label = 'select',
   valueMin = '',
   valueMax = '',
   min = 0,
   max = 0,
   onchangeMin,
   onchangeMax,
}) => {
   const [isDropdownOpen, setDropDownOpen] = useState<boolean>(false)
   const selectRef = useRef<HTMLDivElement>(null)
   const selectValue = (value: string) => {
      setDropDownOpen(false)
   }

   const onHandleDropdown = () => {
      setDropDownOpen(!isDropdownOpen)
   }

   return (
      <ButtonDropdown
         label={label}
         isSelectedValue={isDropdownOpen}
         value={''}
         onClick={onHandleDropdown}
      >
         <div className={styles.selectRange}>
            <Input
               type={'number'}
               state={'default'}
               value={valueMin}
               borderRadius={true}
               onChange={onchangeMin}
               min={min}
            />
            <Input
               type={'number'}
               state={'default'}
               value={valueMax}
               borderRadius={true}
               onChange={onchangeMax}
               max={max}
            />
         </div>
      </ButtonDropdown>
   )
}

export default SelectRange
