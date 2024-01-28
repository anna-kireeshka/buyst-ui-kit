import React, { FC, ReactNode } from 'react'
import ButtonDropdown from '../../../Atom/ButtonDropdown/ButtonDropdown'
import styles from './SelectRange.module.scss'
export interface Props {
   label: string
   children: ReactNode
   id: number | string
   onHandleDropdown: (id?: number | null | string) => void
   isOpen: boolean
}
const SelectRange: FC<Props> = ({ label = 'select', children, id, onHandleDropdown, isOpen }) => {
   return (
      <ButtonDropdown label={label} isOpen={isOpen} value={''} onClick={onHandleDropdown}>
         <div className={styles.selectRange}>{children}</div>
      </ButtonDropdown>
   )
}

export default SelectRange
