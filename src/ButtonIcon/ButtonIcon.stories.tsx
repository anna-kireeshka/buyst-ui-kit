import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { FacebookColorIcon } from '../svg-sprite/SocialIconSet'

import ButtonIcon from './ButtonIcon'

export default {
   title: 'Example/ButtonIcon',
   component: ButtonIcon,
} as ComponentMeta<typeof ButtonIcon>

type StoryButtonSocialNetwork = ComponentStory<typeof ButtonIcon>

const Template: StoryButtonSocialNetwork = (args) => (
   <ButtonIcon {...args}>
      {' '}
      <FacebookColorIcon />{' '}
   </ButtonIcon>
)

export const Default = Template.bind({})
