import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ClockDimych, propsType } from './ClockDimych';
import {AnalogClockMine} from "./ClockMineAnalog";
import {ClockDimychAnalog, ClockDimychAnalogPropsType} from "./ClockDimychAnalog"; // Убедитесь, что путь к компоненте корректный

// Определение метаданных компонента
export  const meta: Meta = {
    title: 'ClockDimych',
    component: ClockDimych,
    // Дополнительные метаданные и настройки
    argTypes: {},
};



// Определение базовой истории (ваша компонента с различными аргументами)
const Template: Story<propsType> = (args) => <ClockDimych {...args} />;

export const ClockDimychDigital = Template.bind({});
ClockDimychDigital.args = { mode: 'digital' };

export const ClockDimychAnalogStory = Template.bind({});
ClockDimychAnalogStory.args = { mode: 'analog' };




// Можно добавить дополнительные сценарии
const analogClockMeta: Meta = {
    title: 'ClockDimych/AnalogClock', // Обратите внимание на путь и название
    component: AnalogClockMine,
    argTypes: {},
};
export default analogClockMeta

// const AnalogClockDimychTemplate: Story<ClockDimychAnalogPropsType> = (args) =><ClockDimychAnalog {...args} />
// export const AnalogClockDimych=AnalogClockDimychTemplate.bind({});
// AnalogClockDimych.args={};


