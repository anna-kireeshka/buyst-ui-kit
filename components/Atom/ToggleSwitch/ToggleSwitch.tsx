import React, { useState, FC } from 'react'
import styles from './ToggleSwitch.module.scss'

export interface Props {}
const ToggleSwitch: FC<Props> = () => {
   const [selected, setSelected] = useState('value 1')
   const [selectedIndex, setSelectedIndex] = useState(0)

   const handleToggle = (value: string, index: number) => {
      setSelected(value)
      setSelectedIndex(index)
   }

   const backgroundPosition = `calc(${(100 / 3) * selectedIndex}% + 4px)`
   const width = `calc(${100 / 3}% - 7px)`

   return (
      <div className={styles.toggleSwitch}>
         <div className={styles.background} style={{ left: backgroundPosition, width: width }} />
         {/*{options.map((option) => (*/}
         <button
            // key={option.value}
            className={`${styles.toggleOption} ${selected === 'value 1' ? styles.selected : ''}`}
            onClick={() => handleToggle('value 1', 0)}
         >
            Value 1
         </button>
         <button
            // key={option.value}
            className={`${styles.toggleOption} ${selected === 'value 2' ? styles.selected : ''}`}
            onClick={() => handleToggle('value 2', 1)}
         >
            Value 2
         </button>
         <button
            // key={option.value}
            className={`${styles.toggleOption} ${selected === 'value 3' ? styles.selected : ''}`}
            onClick={() => handleToggle('value 3', 2)}
         >
            Value 3
         </button>
         {/*))}*/}
      </div>
   )
}

export default ToggleSwitch
