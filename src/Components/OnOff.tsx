import React from "react";

type OnOffProps = {
    isOn: boolean;
};

export const OnOff: React.FC<OnOffProps> = ({ isOn }) => {
    const onStyle = {
        backgroundColor: isOn ? "green" : "white",
        width: "60px",
        height: "45px",
    };

    const offStyle = {
        backgroundColor: isOn ? "white" : "red",
        width: "60px",
        height: "45px",
    };

    const indicatorStyle = {
        backgroundColor: isOn ? "green" : "red",
        borderRadius: "50%",
        width: "20x",
        height: "20px",
    };

    return (
        <div>
            <button style={onStyle}>On</button>
            <button style={offStyle}>Off</button>
            <button style={indicatorStyle}></button>
        </div>
    );
};

