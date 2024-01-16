import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import ButtonSocialNetwork from './ButtonSocialNetwork'

export default {
   title: 'Example/ButtonSocialNetwork',
   component: ButtonSocialNetwork,
} as ComponentMeta<typeof ButtonSocialNetwork>

type StoryButtonSocialNetwork = ComponentStory<typeof ButtonSocialNetwork>

const Template: StoryButtonSocialNetwork = (args) => (
   <ButtonSocialNetwork {...args}> Button Default </ButtonSocialNetwork>
)

export const Default = Template.bind({})
