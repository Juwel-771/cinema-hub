import React from 'react';

const Button = ({children}) => {
    return (
        <button className='w-64 text-xl text-white font-semibold bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br rounded-lg p-2'>
            {children}
        </button>
    );
};

export default Button;