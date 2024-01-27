import React, { FC, useState, useRef, useEffect } from 'react'
import styles from './Select.module.scss'
import ButtonDropdown from '../../../Atom/ButtonDropdown/ButtonDropdown'
export interface Props {
   label: string
   listLength?: number
}
const Select: FC<Props> = ({ label = 'select', listLength = 5 }) => {
   const [value, setValue] = useState<string | number>('')
   const [isDropdownOpen, setDropDownOpen] = useState<boolean>(false)
   let [activeIndex, setActiveIndex] = useState<number>(0)
   const selectRef = useRef<HTMLDivElement>(null)

   const keyUp = 38
   const keyDown = 40

   useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
         keyDownCallback(e)
      }
      isDropdownOpen && document.addEventListener('keydown', handleKeyDown)

      return () => document.removeEventListener('keydown', handleKeyDown)
   }, [isDropdownOpen, activeIndex])

   const keyDownCallback = (e: KeyboardEvent): void => {
      if (e.keyCode === keyUp && activeIndex > 0) {
         setActiveIndex((activeIndex) => activeIndex - 1)
      } else if (e.keyCode === keyDown) {
         if (listLength === activeIndex) {
            setActiveIndex(0)
         } else {
            setActiveIndex((activeIndex) => activeIndex + 1)
         }
      }
      scrollToItem()
   }

   const scrollToItem = () => {
      const items = selectRef?.current?.children
      let itemHeight: number = 0
      items &&
         Array.from(items).map((el, index) => {
            const option: string = el.textContent || ''
            if (index === activeIndex) {
               setValue(option)
               itemHeight = el.clientHeight
            }
         })
      selectRef.current && (selectRef.current.scrollTop = itemHeight * activeIndex)
   }
   const selectValue = (value: string) => {
      setValue(value)
      setDropDownOpen(false)
   }

   const onHandleDropdown = () => {
      setDropDownOpen(!isDropdownOpen)
   }

   return (
      <ButtonDropdown
         label={label}
         isSelectedValue={isDropdownOpen}
         value={value}
         onClick={onHandleDropdown}
      >
         <div className={styles.selectList} ref={selectRef}>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 1' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1`}
               aria-selected={'Option 1' === value}
               role="option"
               onClick={() => selectValue('Option 1')}
            >
               Option 1
            </li>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 2' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1}`}
               aria-selected={'Option 2' === value}
               role="option"
               onClick={() => selectValue('Option 2')}
            >
               Option 2
            </li>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 3' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1}`}
               aria-selected={'Option 3' === value}
               role="option"
               onClick={() => selectValue('Option 3')}
            >
               Option 3
            </li>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 4' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1}`}
               aria-selected={'Option 4' === value}
               role="option"
               onClick={() => selectValue('Option 4')}
            >
               Option 4
            </li>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 5' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1}`}
               aria-selected={'Option 5' === value}
               role="option"
               onClick={() => selectValue('Option 5')}
            >
               Option 5
            </li>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 6' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1}`}
               aria-selected={'Option 6' === value}
               role="option"
               onClick={() => selectValue('Option 6')}
            >
               Option 6
            </li>
         </div>
      </ButtonDropdown>
   )
}

export default Select
