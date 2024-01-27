import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import SelectRange from './SelectRange'

export default {
   title: 'Atomic Design/Organism/Form/SelectRange',
   component: SelectRange,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof SelectRange>

const Template: StoryFn<typeof SelectRange> = (args) => (
   <div style={{ width: '300px' }}>
      <SelectRange {...args} />
   </div>
)
export const Default = Template.bind({})
