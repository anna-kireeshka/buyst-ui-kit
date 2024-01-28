import React, { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Select from './Select'

export default {
   title: 'Atomic Design/Organism/Form/Select',
   component: Select,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Select>

const Template: StoryFn<typeof Select> = () => {
   const [value, setValue] = useState<string | number>('')
   const [selectId, setCurrentSelectId] = useState<unknown>(null)

   const selectValue = (value: string | number) => {
      setValue(value)
      setCurrentSelectId(null)
   }
   const onHandle = (id: number) => {
      setCurrentSelectId(selectId === id ? null : id)
   }
   return (
      <div
         style={{
            width: '1000px',
            backgroundColor: 'red',
            display: 'flex',
            gap: '1rem',
            padding: '1rem',
            justifyContent: 'space-between',
         }}
      >
         {[...Array(5)].map((star, index) => {
            index += 1
            return (
               <Select
                  key={index}
                  label={'select'}
                  value={value}
                  isOpen={selectId === index}
                  onHandleDropdown={() => onHandle(index)}
                  selectValue={(value) => selectValue(value)}
                  id={index}
               />
            )
         })}
      </div>
   )
}
export const Default = Template.bind({})
