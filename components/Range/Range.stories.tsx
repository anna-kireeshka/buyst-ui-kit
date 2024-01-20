import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Range from './Range'

export default {
   title: 'Example/Range',
   component: Range,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Range>

const Template: StoryFn<typeof Range> = (args) => <Range {...args} />
export const Default = Template.bind({})
