import React, { FC, useState, useRef, useEffect, ReactNode } from 'react'
import ButtonDropdown from '../../../Atom/ButtonDropdown/ButtonDropdown'
import styles from './SelectRange.module.scss'
export interface Props {
   label: string
   children: ReactNode
}
const SelectRange: FC<Props> = ({ label = 'select', children }) => {
   const [isDropdownOpen, setDropDownOpen] = useState<boolean>(false)

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
         <div className={styles.selectRange}>{children}</div>
      </ButtonDropdown>
   )
}

export default SelectRange
