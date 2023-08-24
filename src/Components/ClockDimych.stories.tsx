import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClockDimych, propsType } from './ClockDimych';
import {AnalogClock} from "./ClockDimychAnalog"; // Убедитесь, что путь к компоненте корректный

// Определение метаданных компонента
export  const meta: Meta = {
    title: 'ClockDimych',
    component: ClockDimych,
    // Дополнительные метаданные и настройки
    argTypes: {},
};



// Определение базовой истории (ваша компонента с различными аргументами)
const Template: Story<propsType> = (args) => <ClockDimych {...args} />;

export const BaseExample = Template.bind({});
BaseExample.args = {};

// Можно добавить дополнительные сценарии
const analogClockMeta: Meta = {
    title: 'ClockDimych/AnalogClock', // Обратите внимание на путь и название
    component: AnalogClock,
    argTypes: {},
};
export default analogClockMeta
const AnalogClockTemplate: Story<propsType> = (args) => <AnalogClock {...args} />;

export const AnotherExample = AnalogClockTemplate.bind({});
AnotherExample.args = {};
