import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button from '../Button/Button';

export default {
    title: 'Example/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;

export const Primary: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;
Primary.args = {
    variant: 'primary'
};
export const Green: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;
    Green.args = {
    variant: 'green'
};
export const Yellow: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;
Yellow.args = {
    variant: 'yellow'
};
export const Red: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;
Red.args = {
    variant: 'red'
};

export const Disabled: ComponentStory<typeof Button> = (args) => <Button {...args}> Button </Button>;
Disabled.args = {
    disabled: true,
};

export const Default = Template.bind({});
