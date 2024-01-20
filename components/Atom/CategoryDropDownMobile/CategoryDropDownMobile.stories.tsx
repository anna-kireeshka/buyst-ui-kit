import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import CategoryDropDownMobile from './CategoryDropDownMobile'

export default {
   title: 'Atomic Design/Atom/CategoryDropDownMobile',
   component: CategoryDropDownMobile,
} as StoryObj<typeof CategoryDropDownMobile>

export const CategoryDropDownMobileTemplate: StoryFn<typeof CategoryDropDownMobile> = (args) => {
   const [value, setValue] = useState('')
   return (
      <div style={{ width: '420px', position: 'relative' }}>
         <CategoryDropDownMobile {...args}></CategoryDropDownMobile>
      </div>
   )
}

CategoryDropDownMobileTemplate.args = {
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
}
