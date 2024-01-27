import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Select from './Select'

export default {
   title: 'Atomic Design/Organism/Form/Select',
   component: Select,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Select>

const Template: StoryFn<typeof Select> = (args) => (
   <div style={{ width: '300px' }}>
      <Select {...args} />
   </div>
)
export const Default = Template.bind({})
