import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import   Input from '../Input/Input';

export default {
    title: 'Example/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text:  ComponentStory<typeof Input> = (args) => <Input {...args} />
Text.args = {
    type: 'text'
};

export const Password:  ComponentStory<typeof Input> = (args) => <Input {...args} />
Password.args = {
    type: 'password'
};

