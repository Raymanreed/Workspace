import React from 'react';

const Completion = () => {
    return (
        <div className='flex mx-auto justify-center completion-container'>
            <div className="completion-text-container">
                <div className='text-display'>
                    <h2 className='text-body-full'>
                        You open your eyes in your room. The dream is over.
                    </h2>
                </div>
            </div>
        </div>
    )
};

export const GameCompleted = Completion;