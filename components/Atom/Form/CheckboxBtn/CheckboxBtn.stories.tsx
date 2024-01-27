import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import CheckboxBtn from '././CheckboxBtn'

export default {
   title: 'Atomic Design/Atom/Form/CheckboxBtn',
   component: CheckboxBtn,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as StoryObj<typeof CheckboxBtn>

const Template: StoryFn<typeof CheckboxBtn> = (args) => (
   <div style={{ width: '300px', display: 'flex', gap: '1rem' }}>
      <CheckboxBtn {...args} label={'checbox1'} id={'1'} />
      <CheckboxBtn {...args} label={'checbox2'} id={'2'} />
      <CheckboxBtn {...args} label={'checbox3'} id={'3'} />
   </div>
)
export const Default = Template.bind({})
