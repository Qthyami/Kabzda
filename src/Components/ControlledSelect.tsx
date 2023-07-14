import React, { ChangeEvent, useState } from 'react';

type ControlledSelectProps = {
    items: SelectItemsType[];
    value: string;
    onChange: (value: string) => void;
};

export type SelectItemsType = {
    title: string;
    value: string;
};

export const ControlledSelect = (props: ControlledSelectProps) => {
    const [parentValue, setParentValue] = useState<string>(props.value);

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const value = e.currentTarget.value;
        setParentValue(value);
        props.onChange(value);
    };

    return (
        <select value={parentValue} onChange={onChange}>
            {props.items.map((item) => (
                <option key={item.value} value={item.value}>
                    {item.title}
                </option>
            ))}
        </select>
    );
};
