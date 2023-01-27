import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from '../Radio/Radio';

export default {
    title: 'Example/Radio',
    component: Radio,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;
export const Default = Template.bind({});
