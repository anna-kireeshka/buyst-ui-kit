import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Radio from './Radio'

export default {
   title: 'Example/Radio',
   component: Radio,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Radio>

const Template: StoryFn<typeof Radio> = (args) => <Radio {...args} />
export const Default = Template.bind({})
