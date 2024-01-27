import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'
import ToggleSwitch from './ToggleSwitch'

export default {
   title: 'Atomic Design/Atom/ToggleSwitch',
   component: ToggleSwitch,
} as StoryObj<typeof ToggleSwitch>

const Template: StoryFn<typeof ToggleSwitch> = (args) => (
   <div style={{ width: '280px' }}>
      <ToggleSwitch {...args} />
   </div>
)

export const Default = Template.bind({})
