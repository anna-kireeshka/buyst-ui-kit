import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import CategoryDropDownMobile from './CategoryDropDownMobile'

export default {
   title: 'Atomic Design/Atom/CategoryDropDownMobile',
   component: CategoryDropDownMobile,
} as StoryObj<typeof CategoryDropDownMobile>

export const CategoryDropDownMobileTemplate: StoryFn<typeof CategoryDropDownMobile> = (args) => {
   return (
      <div style={{ width: '420px', position: 'relative' }}>
         <CategoryDropDownMobile {...args}></CategoryDropDownMobile>
      </div>
   )
}

CategoryDropDownMobileTemplate.args = {}
