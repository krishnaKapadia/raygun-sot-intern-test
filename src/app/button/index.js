import React from 'react';
import './button.css';

export const Button = ({ onClick }) => (
    <button class="button" onClick={onClick}>
        Next
    </button>
);