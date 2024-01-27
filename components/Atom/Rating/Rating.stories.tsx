import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'
import Rating from './Rating'

export default {
   title: 'Atomic Design/Atom/Rating',
   component: Rating,
} as StoryObj<typeof Rating>

const Template: StoryFn<typeof Rating> = (args) => (
   <div style={{ width: '280px' }}>
      <Rating {...args} />
   </div>
)

export const Default = Template.bind({})
