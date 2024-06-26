import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import InputSerach from './InputSerach'

export default {
   title: 'Atomic Design/Organism/Form/InputSerach',
   component: InputSerach,
} as StoryObj<typeof InputSerach>

export const InputSearchTemplate: StoryFn<typeof InputSerach> = (args) => {
   const [value, setValue] = useState('')
   const [openCategoryList, setOpenCategoryList] = useState(false)
   const onOpenCategoryList = () => {
      return openCategoryList ? setOpenCategoryList(false) : setOpenCategoryList(true)
   }
   return (
      <InputSerach
         {...args}
         value={value}
         onClick={onOpenCategoryList}
         openCategoryList={openCategoryList}
      />
   )
}

InputSearchTemplate.args = {
   label: '',
}
