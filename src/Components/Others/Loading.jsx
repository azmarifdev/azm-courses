import React from 'react';

const Loading = () => {
    return (
        <div className="">
            <div className="flex justify-center items-center md:my-48">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
            </div>
        </div>
    );
};

export default Loading;
