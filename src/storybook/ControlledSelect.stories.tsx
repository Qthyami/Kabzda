import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import ControlledSelect, { SelectItemsType } from '../Components/ControlledSelect';

export default {
    title: 'Components/ControlledSelect',
    component: ControlledSelect,
} as Meta;

type TemplateProps = {
    items: SelectItemsType[];
    value: string;
};

const Template: Story<TemplateProps> = (args) => {
    const [selectedValue, setSelectedValue] = useState<string>(args.value);

    const handleChange = (value: string) => {
        setSelectedValue(value);
    };

    return (
        <ControlledSelect {...args} value={selectedValue} onChange={handleChange} />
    );
};

export const Default = Template.bind({});
Default.args = {
    items: [
        { title: 'Minsk', value: '1' },
        { title: 'Baranovichi', value: '2' },
        { title: 'Berezniki', value: '3' },
        { title: 'Khoiniki', value: '4' },
    ] as SelectItemsType[],
    value: '2',
};
