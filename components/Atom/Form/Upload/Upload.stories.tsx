import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import Upload from './Upload'

export default {
   title: 'Atomic Design/Organism/Form/Upload',
   component: Upload,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof Upload>

const Template: StoryFn<typeof Upload> = (args) => (
   <div style={{ width: '800px' }}>
      <Upload {...args} />
   </div>
)
export const Default = Template.bind({})
