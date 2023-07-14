import React from 'react';
import { Story, Meta } from '@storybook/react';
import { UncontrolledAccordion } from '../UncontrolledAccordion';
type argsType={

    titleValue: string;

}
export default {
    title: 'Components/UncontrolledAccordion',
    component: UncontrolledAccordion,
} as Meta;

const Template: Story<argsType> = (args:argsType) => <UncontrolledAccordion {...args} />;

export const Default = Template.bind({});
Default.args = {
    titleValue: 'Accordion Title',
};
