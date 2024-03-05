import React from 'react';


export const withRainbowFrame = (colors) => (Fragment) => ({ ...props }) => {

    const reduceCB = (acc, cur) => {
        return (
            <div style={{ border: "solid 5px " + cur, padding: "5px" }}>
                {acc}
            </div>
        )
    }

    const rainbowFrame = colors.reduce(reduceCB, <Fragment {...props}/>);

    return (
        <div style={{ width: 600, textAlign: 'center', margin: 'auto' }}>
            {rainbowFrame}
        </div>
    );
};