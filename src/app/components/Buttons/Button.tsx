import React, { ReactNode } from 'react';

interface ButtonProps {
    onClick?: () => void;
    disabled?: boolean;
    children: ReactNode; // Using ReactNode to accept any valid React node as children
    fill?: string;
    padding?: string;
    width?: string;
    height?: string;
}

const Button = ({ children, fill, padding, width, height, onClick, disabled }: ButtonProps) => {
    const buttonStyle = {
        width: width ? width : 'auto',
        height: height ? height : 'auto',
        backgroundColor: fill ? fill : 'rgb(49, 104, 255)',
        color: fill ? 'rgb(49, 104, 255)': 'white ',
        padding: padding ? padding : '10px',
        borderRadius: '5px',
        fontSize: '14px',
        border: '2px solid rgb(49, 104, 255)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: disabled ? 0.5 : 1,
        

      
    };

    return (
        <button style={buttonStyle} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
