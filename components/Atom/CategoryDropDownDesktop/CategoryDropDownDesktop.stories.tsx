import React, { useState, ChangeEvent } from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import CategoryDropDownDesktop from './CategoryDropDownDesktop'

export default {
   title: 'Atomic Design/Atom/CategoryDropDownMobile',
   component: CategoryDropDownDesktop,
} as StoryObj<typeof CategoryDropDownDesktop>

export const CategoryDropDownDesktopTemplate: StoryFn<typeof CategoryDropDownDesktop> = (args) => {
   const [value, setValue] = useState('')
   return <CategoryDropDownDesktop {...args}></CategoryDropDownDesktop>
}

CategoryDropDownDesktopTemplate.args = {}
