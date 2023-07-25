import React from "react";
import { Story, Meta } from '@storybook/react';
import { LikeUseCallback } from '../LikeUseCallback';

export default {
    title: 'Components/LikeUseCallback',
    component: LikeUseCallback,
} as Meta;

const Template: Story = () => <LikeUseCallback />;

export const Default = Template.bind({});
