import React from 'react';

const Button = ({ children }) => {
    return (
        <div>

            <button className="mt-9  font-semibold leading-none text-white text-xl py-3 px-8 bg-green-600 rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">{children}</button>

        </div>
    );
};

export default Button;