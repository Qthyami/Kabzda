import React, {useEffect, useMemo, useState} from 'react';
import { Story, Meta } from '@storybook/react';

type City = {
    title: string;
    population: number;
    value: string;
};

type SelectProps = {
    cities: City[];
    filterFunction: (city: City) => void;
};

const Select = React.memo(({ cities, filterFunction }: SelectProps) => {
    console.log("SELECT TRIGGERED")
    const filteredCities = useMemo(() => cities.filter(filterFunction), [
        cities,
        filterFunction,
    ]);

    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleChange = (value: string) => {
        setSelectedValue(value);

    };
    useEffect(() => {
        console.log('Select rendered:', selectedValue);
    }, [selectedValue]);

    return (
        <select value={selectedValue} onChange={(e) => handleChange(e.target.value)}>
            {filteredCities.map((city) => (
                <option key={city.value} value={city.value}>
                    {city.title}
                </option>
            ))}
        </select>
    );
});

export default {
    title: 'Components/Select',
    component: Select,
} as Meta;

const Template: Story = () => {
    const cities: City[] = [
        { title: 'Moscow', population: 12500000, value: 'moscow' },
        { title: 'St. Petersburg', population: 5380000, value: 'spb' },
        { title: 'Novosibirsk', population: 1613000, value: 'novosibirsk' },
        { title: 'Yekaterinburg', population: 1499000, value: 'ekaterinburg' },
        { title: 'Kazan', population: 1257000, value: 'kazan' },
        {title: 'MiChurino', population: 12000, value: 'MiChurino'},
        {title: 'Mrakobesovo', population: 12000, value: 'Mrakobesovo'}
    ];

    const filterRussia = (city: City) => city.title === 'Moscow';
    const filterPopulation = (city: City) => city.population > 1000000;
    const filterM = (city: City) => city.title.toLowerCase().indexOf('m')>-1;

    return (
        <>
            <Select cities={cities} filterFunction={filterRussia} />
            <Select cities={cities} filterFunction={filterPopulation} />
            <Select cities={cities} filterFunction={filterM} />
        </>
    );
};

export const Default = Template.bind({});
