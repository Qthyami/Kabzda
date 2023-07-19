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

const ControlledSelect = React.memo((props: ControlledSelectProps) => {
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
}, (prevProps, nextProps) => {
    // Функция сравнения для определения, нужно ли перерисовывать компонент
    return (
        prevProps.value === nextProps.value &&
        prevProps.items === nextProps.items
    );
});

export default ControlledSelect;
