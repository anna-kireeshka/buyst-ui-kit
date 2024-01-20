import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import InputSearch from './InputSearch'

export default {
   title: 'Atomic Design/Organism/InputSearch',
   component: InputSearch,
} as StoryObj<typeof InputSearch>

export const InputSearchTemplate: StoryFn<typeof InputSearch> = (args) => {
   const [value, setValue] = useState('')
   return (
      <div style={{ width: '700px' }}>
         <InputSearch
            {...args}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
         />
      </div>
   )
}

InputSearchTemplate.args = {
   label: '',
}
