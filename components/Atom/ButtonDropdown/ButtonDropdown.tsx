import React, { FC, ReactNode } from 'react'
import styles from './ButtonDropdown.module.scss'
import { ArrowIconDown, ArrowIconUp } from '../../svg-sprite/common'

export interface Props {
   label: string
   children?: ReactNode
   value: string | number
   isOpen: boolean
   onClick: () => void
}
const ButtonDropdown: FC<Props> = ({ label = 'select', children, isOpen, value, onClick }) => {
   return (
      <div className={styles.selectContainer}>
         <button
            className={styles.selectContainerLabel}
            role="combobox"
            aria-haspopup="listbox"
            aria-controls={`${label}_dropdown`}
            aria-labelledby={`${label}_label`}
            aria-expanded={isOpen}
            aria-activedescendant={`${label}_element_${value}`}
            onClick={onClick}
         >
            {value ? value : 'Label'}
            {isOpen ? <ArrowIconDown /> : <ArrowIconUp />}
         </button>
         <ul
            className={styles.selectList}
            role="listbox"
            tabIndex={-1}
            aria-multiselectable={false}
            id={`${label}_dropdown`}
         >
            {children}
         </ul>
      </div>
   )
}

export default ButtonDropdown
