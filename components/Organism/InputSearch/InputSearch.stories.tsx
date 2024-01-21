import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import InputSearch from './InputSearch'

export default {
   title: 'Atomic Design/Organism/InputSearch',
   component: InputSearch,
} as StoryObj<typeof InputSearch>

export const InputSearchTemplate: StoryFn<typeof InputSearch> = (args) => {
   const [value, setValue] = useState('')
   const [openCategoryList, setOpenCategoryList] = useState(false)
   const onOpenCategoryList = () => {
      return openCategoryList ? setOpenCategoryList(false) : setOpenCategoryList(true)
   }
   return (
      <InputSearch
         {...args}
         value={value}
         onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
         onClick={onOpenCategoryList}
         openCategoryList={openCategoryList}
      />
   )
}

InputSearchTemplate.args = {
   label: '',
}

export const InputSearchTemplateMobile: StoryFn<typeof InputSearch> = (args) => {
   const [value, setValue] = useState('')
   const [openCategoryList, setOpenCategoryList] = useState(false)
   const onOpenCategoryList = () => {
      return openCategoryList ? setOpenCategoryList(false) : setOpenCategoryList(true)
   }
   return (
      <div>
         <InputSearch
            {...args}
            value={value}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
            onClick={onOpenCategoryList}
            openCategoryList={openCategoryList}
         />
      </div>
   )
}

InputSearchTemplateMobile.args = {
   label: '',
}
