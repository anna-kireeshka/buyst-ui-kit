import React from 'react'
import { StoryObj, StoryFn } from '@storybook/react'
import { FacebookColorIcon } from '../svg-sprite/SocialIconSet'

import ButtonIcon from './ButtonIcon'

export default {
   title: 'Example/ButtonIcon',
   component: ButtonIcon,
} as StoryObj<typeof ButtonIcon>

type StoryButtonSocialNetwork = StoryFn<typeof ButtonIcon>

const Template: StoryButtonSocialNetwork = (args) => (
   <ButtonIcon {...args}>
      {' '}
      <FacebookColorIcon />{' '}
   </ButtonIcon>
)

export const Default = Template.bind({})
