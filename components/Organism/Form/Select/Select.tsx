import React, { FC, useState, useRef, useEffect } from 'react'
import styles from './Select.module.scss'
import ButtonDropdown from '../../../Atom/ButtonDropdown/ButtonDropdown'
export interface Props {
   label: string
   listLength?: number
   value: string | number
   isOpen: boolean
   onHandleDropdown: (id?: number | null | string) => void
   selectValue: (value: string | number) => void
   id: number | string
}
const Select: FC<Props> = ({
   label = '',
   listLength = 5,
   value = '',
   isOpen = false,
   selectValue,
   onHandleDropdown,
}) => {
   const selectRef = useRef<HTMLDivElement>(null)
   const [keybordSelectValue, setKeybordSelectValue] = useState<string | number>('')
   let [activeIndex, setActiveIndex] = useState<number>(0)

   const keyUp: number = 38
   const keyDown: number = 40

   useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
         keyDownCallback(e)
      }
      isOpen && document.addEventListener('keydown', handleKeyDown)

      return () => document.removeEventListener('keydown', handleKeyDown)
   }, [isOpen, activeIndex])

   const keyDownCallback = (e: KeyboardEvent): void => {
      if (e.keyCode === keyUp && activeIndex > 0) {
         setActiveIndex((activeIndex) => activeIndex - 1)
      } else if (e.keyCode === keyDown) {
         if (listLength === activeIndex) {
            setActiveIndex(0)
         } else {
            setActiveIndex((activeIndex) => activeIndex + 1)
         }
      } else if (e.key === 'Enter') {
         selectValue(keybordSelectValue)
      }
      scrollToItem()
   }
   const scrollToItem = () => {
      const items = selectRef?.current?.children
      let itemHeight: number = 0
      items &&
         Array.from(items).map((el, index) => {
            const option: string = el.textContent || ''
            value = option
            if (index === activeIndex) {
               setKeybordSelectValue(option)
               itemHeight = el.clientHeight
            }
         })
      selectRef.current && (selectRef.current.scrollTop = itemHeight * activeIndex)
   }

   return (
      <ButtonDropdown label={label} isOpen={isOpen} value={value} onClick={onHandleDropdown}>
         <div className={styles.selectList} ref={selectRef}>
            <li
               className={`${styles.selectListItem} ${
                  value === 'Option 1' && styles.selectListItemActive
               }`}
               id={`${label}_element_option1`}
               aria-selected={'Option 1' === value}
               role="option"
               onClick={() => selectValue('Option 2')}
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
            {/*<li*/}
            {/*   className={`${styles.selectListItem} ${*/}
            {/*      value === 'Option 5' && styles.selectListItemActive*/}
            {/*   }`}*/}
            {/*   id={`${label}_element_option1}`}*/}
            {/*   aria-selected={'Option 5' === value}*/}
            {/*   role="option"*/}
            {/*   onClick={() => selectValue('Option 5')}*/}
            {/*   onKeyDown={() => selectKeyboardValue('Option 1')}*/}
            {/*>*/}
            {/*   Option 5*/}
            {/*</li>*/}
            {/*<li*/}
            {/*   className={`${styles.selectListItem} ${*/}
            {/*      value === 'Option 6' && styles.selectListItemActive*/}
            {/*   }`}*/}
            {/*   id={`${label}_element_option1}`}*/}
            {/*   aria-selected={'Option 6' === value}*/}
            {/*   role="option"*/}
            {/*   onClick={() => selectValue('Option 6')}*/}
            {/*   onKeyDown={() => selectKeyboardValue('Option 1')}*/}
            {/*>*/}
            {/*   Option 6*/}
            {/*</li>*/}
         </div>
      </ButtonDropdown>
   )
}

export default Select
