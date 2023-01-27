import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from '../Button/Button';

export default {
    title: 'Example/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> Button Default </Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args}> Primary Button </Button>;
Primary.args = {
    variant: 'primary'
};
export const Success: ComponentStory<typeof Button> = (args) => <Button {...args}> Success Button </Button>;
Success.args = {
    variant: 'success'
};
export const Warning: ComponentStory<typeof Button> = (args) => <Button {...args}> Warning Button </Button>;
Warning.args = {
    variant: 'warning'
};
export const Danger: ComponentStory<typeof Button> = (args) => <Button {...args}> Danger Button </Button>;
Danger.args = {
    variant: 'danger'
};

export const Disabled: ComponentStory<typeof Button> = (args) => <Button {...args}> Disabled Button </Button>;
Disabled.args = {
    disabled: true,
};

export const Default = Template.bind({});
