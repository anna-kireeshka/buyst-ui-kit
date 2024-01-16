import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from './Input';

export default {
    title: 'Example/Input',
    component: Input,
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

export const Number:  ComponentStory<typeof Input> = (args) => {
    const [value, setValue] = useState(args.value)

    // const onChangeHandle = (val) => {
    //     console.log(val, 'val')
    // }
    return (
        <div style={{width: "200px"}}>
            <Input {...args} />
        </div>
        )

}
Number.args = {
    type: 'number',
    min: 1,
    max: 10,
};

export const Default = Template.bind({});