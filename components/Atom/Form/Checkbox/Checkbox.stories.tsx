import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Checkbox from './Checkbox'

export default {
   title: 'Atomic Design/Atom/Form/Checkbox',
   component: Checkbox,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Checkbox>

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />
export const Default = Template.bind({})
