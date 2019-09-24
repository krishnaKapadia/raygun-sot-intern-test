import React from 'react';
import './light.css';

export const Light = ({
    color,
    active
}) => {
    const classes = `light light--${color} ${active ? "" : 'light--inactive'}`;

    return (
        <div className={classes} />
    );
};

export const Lights = ({ children }) => (
    <div className="lights">{children}</div>
);

