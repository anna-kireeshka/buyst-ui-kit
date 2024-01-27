import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'
import Tag from './Tag'

export default {
   title: 'Atomic Design/Atom/Tag',
   component: Tag,
} as StoryObj<typeof Tag>

const Template: StoryFn<typeof Tag> = (args) => (
   <div style={{ width: '600px' }}>
      <Tag {...args} bgColor={'#a9e7f3'}>
         Tag
      </Tag>
      <Tag {...args} bgColor={'#d2b8f3'}>
         {' '}
         TagTagTag{' '}
      </Tag>
      <Tag {...args}> TagTag </Tag>
   </div>
)

export const Default = Template.bind({})
