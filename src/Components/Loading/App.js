import React from 'react';
import pokeball from './loading.png';

function Loading() {
    return (
        <div className="flex justify-center items-center h-screen">
            <img src={pokeball} className="animate-spin h-20 w-20" alt="Loading" />
        </div>
    );
}

export default Loading;