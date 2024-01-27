import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import ColorPicker from './ColorPicker'

export default {
   title: 'Atomic Design/Atom/Form/ColorPicker',
   component: ColorPicker,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof ColorPicker>

const Template: StoryFn<typeof ColorPicker> = (args) => <ColorPicker {...args} />
export const Default = Template.bind({})
