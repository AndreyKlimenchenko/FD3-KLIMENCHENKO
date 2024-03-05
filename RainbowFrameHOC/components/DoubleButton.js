import React from 'react';


const DoubleButton = ({ caption1, caption2, cbPressed, children }) => {
    return (
        <div>
            <input
                type='button'
                value={caption1}
                onClick={() => cbPressed(caption1)}
            />
            <span>{children}</span>
            <input
                type='button'
                value={caption2}
                onClick={() => cbPressed(caption2)}
            />
        </div>
    )
}

export default DoubleButton;