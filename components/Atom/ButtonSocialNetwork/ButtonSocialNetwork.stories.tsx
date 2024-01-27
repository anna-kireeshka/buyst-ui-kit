import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'

import ButtonSocialNetwork from './ButtonSocialNetwork'

export default {
   title: 'Example/ButtonSocialNetwork',
   component: ButtonSocialNetwork,
} as StoryObj<typeof ButtonSocialNetwork>

type StoryButtonSocialNetwork = StoryFn<typeof ButtonSocialNetwork>

const Template: StoryButtonSocialNetwork = (args) => (
   <ButtonSocialNetwork {...args}> Button Default </ButtonSocialNetwork>
)

export const Default = Template.bind({})
