import React, { FC, useState, useRef, useEffect, ReactNode } from 'react'
import styles from './ButtonDropdown.module.scss'
import { ArrowIconDown, ArrowIconUp } from '../../svg-sprite/common'
export interface Props {
   label: string
   children?: ReactNode
   isSelectedValue: boolean
   onClick: () => void
   value: string | number
}
const ButtonDropdown: FC<Props> = ({
   label = 'select',
   children,
   isSelectedValue,
   onClick,
   value,
}) => {
   return (
      <div className={styles.selectContainer}>
         <button
            className={styles.selectContainerLabel}
            onClick={onClick}
            role="combobox"
            aria-haspopup="listbox"
            aria-controls={`${label}_dropdown`}
            aria-labelledby={`${label}_label`}
            aria-expanded={isSelectedValue}
            aria-activedescendant={`${label}_element_${value}`}
         >
            {value ? value : 'Label'}
            {isSelectedValue ? <ArrowIconDown /> : <ArrowIconUp />}
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
