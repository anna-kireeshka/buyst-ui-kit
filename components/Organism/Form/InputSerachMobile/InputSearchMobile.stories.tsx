import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import InputSearchMobile from './InputSearchMobile'

export default {
   title: 'Atomic Design/Organism/Form/InputSearchMobile',
   component: InputSearchMobile,
} as StoryObj<typeof InputSearchMobile>

export const InputSearchTemplate: StoryFn<typeof InputSearchMobile> = (args) => {
   const [value, setValue] = useState('')
   const [openCategoryList, setOpenCategoryList] = useState(false)
   const onOpenCategoryList = () => {
      return openCategoryList ? setOpenCategoryList(false) : setOpenCategoryList(true)
   }
   return (
      <InputSearchMobile
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
