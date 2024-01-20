import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import CategoryDropDownDesktop from './CategoryDropDownDesktop'

export default {
   title: 'Atomic Design/Atom/CategoryDropDownDesktop',
   component: CategoryDropDownDesktop,
} as StoryObj<typeof CategoryDropDownDesktop>

export const CategoryDropDownDesktopTemplate: StoryFn<typeof CategoryDropDownDesktop> = (args) => {
   const [value, setValue] = useState('')
   return (
      <div style={{ width: '1000px', position: 'relative' }}>
         <CategoryDropDownDesktop {...args}></CategoryDropDownDesktop>
      </div>
   )
}

CategoryDropDownDesktopTemplate.args = {
   subCategoriesList: [
      {
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
         ],
      },
   ],
   categoryList: [
      { id: 1, name: 'name', icon: '/icon', uri: 'string' },
      { id: 2, name: 'name', icon: '/icon', uri: 'string' },
      { id: 3, name: 'name', icon: '/icon', uri: 'string' },
   ],
}
