// src/components/ScoreDisplay.js
import React from 'react';
import Scores from '../Scores/App';

const ScoreDisplay = ({ score, scoreClass, userHighScores }) => {
    console.log('userHighScores:', userHighScores);
    console.log('Object.keys(userHighScores).length >= 3:', Object.keys(userHighScores).length >= 3);
    return (
        <>
            <div className={`absolute top-[30px] right-[10px] p-4 z-10 text-white font-bold text-2xl rounded-full ${scoreClass}`}
                style={{
                    fontSize: '1.25rem',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 1), 0 1px 3px rgba(0, 0, 0, 0.08)'
                }}>
                <h2>{score}</h2>
            </div>
            <div className="absolute right-0 left-0 mx-auto top-[30px] flex justify-between w-full max-w-screen-lg px-4">
                <div>
                    {userHighScores && Object.keys(userHighScores).length >= 3 ? <Scores userHighScores={userHighScores} /> : null}
                </div>
                <Scores score={score} scoreClass={scoreClass} />
            </div>
        </>
    );
};

export default ScoreDisplay;
