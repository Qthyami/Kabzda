import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import {action } from '@storybook/addon-actions'

import Accordion, { AccordionPropsType } from '../Components/Accordion';

export default {
    title: 'Components/Accordion',
    component: Accordion,
} as Meta;

const Template: Story<AccordionPropsType> = (args) => {
    const [collapsed, setCollapsed] = useState<boolean>(args.collapsed);

    const toggleAccordion = () => {
        setCollapsed(!collapsed);
    };

    return <Accordion {...args} collapsed={collapsed} onChange={toggleAccordion} />;
};

export const Default = Template.bind({});
Default.args = {
    titleValue: 'Accordion Title',
    collapsed: false,
    items: [
        { title: "Dimon", value: 1 },
        { title: "Stepa", value: 2 },
        { title: "Pitun", value: 3 },
    ],
    onClick:action("item was clicked")
};