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
      <div style={{ display: 'flex', width: '700px', position: 'relative' }}>
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

InputSearchTemplate.args = {
   label: '',
   categoryList: [
      {
         id: 1,
         name: 'name',
         icon: '/icon',
         uri: 'string',
         secondLevelCategories: [
            {
               id: 2,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 23,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 24,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 25,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
            {
               id: 3,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 33,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 34,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 35,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
      {
         id: 5,
         name: 'name2',
         icon: '/icon',
         uri: 'string',
         secondLevelCategories: [
            {
               id: 254,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 253,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 254,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 255,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
   ],
   subCategoriesList: [
      {
         secondLevelCategories: [
            {
               id: 254,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 253,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 254,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 255,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
   ],
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
   categoryList: [
      {
         id: 1,
         name: 'name',
         icon: '/icon',
         uri: 'string',
         secondLevelCategories: [
            {
               id: 2,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 23,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 24,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 25,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
            {
               id: 3,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 33,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 34,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 35,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
      {
         id: 5,
         name: 'name2',
         icon: '/icon',
         uri: 'string',
         secondLevelCategories: [
            {
               id: 254,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 253,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 254,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 255,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
   ],
   subCategoriesList: [
      {
         secondLevelCategories: [
            {
               id: 254,
               name: 'string',
               uri: 'string',
               thirdLevelCategories: [
                  {
                     id: 253,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 254,
                     name: 'string',
                     uri: 'string',
                  },
                  {
                     id: 255,
                     name: 'string',
                     uri: 'string',
                  },
               ],
            },
         ],
      },
   ],
}
