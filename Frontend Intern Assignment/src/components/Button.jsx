import React from 'react';
import '../CSS/Button.css'; // Import CSS file

function Button({size, children,type, ...props}){
    return (
        <button className={`button ${size}`} type={type} {...props}> {/* Add class name */}
            {children}
        </button>
    );
}

export default Button;
