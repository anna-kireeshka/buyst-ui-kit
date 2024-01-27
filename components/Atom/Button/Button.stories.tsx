import React from 'react'
import { StoryFn, StoryObj } from '@storybook/react'

import Button from './Button'

export default {
   title: 'Atomic Design/Atom/Button',
   component: Button,
} as StoryObj<typeof Button>

type StoryButton = StoryFn<typeof Button>

const Template: StoryButton = (args) => <Button {...args}> Button Default </Button>

export const Green: StoryButton = (args) => (
   <div style={{ width: '500px', height: '500px', backgroundColor: '#eee' }}>
      <Button {...args}> registration </Button>
   </div>
)
Green.args = {
   theme: 'green',
}
export const Red: StoryButton = (args) => <Button {...args}> login </Button>
Red.args = {
   theme: 'red',
}
export const Orange: StoryButton = (args) => <Button {...args}> Orange Button </Button>
Orange.args = {
   theme: 'orange',
}
export const Primary: StoryButton = (args) => <Button {...args}> Primary Button </Button>
Primary.args = {
   theme: 'primary',
}
export const Gray: StoryButton = (args) => <Button {...args}> Gray Button </Button>
Gray.args = {
   theme: 'gray',
}

export const Disabled: StoryButton = (args) => <Button {...args}> Disabled Button </Button>
Disabled.args = {
   disabled: true,
}

export const Default = Template.bind({})
