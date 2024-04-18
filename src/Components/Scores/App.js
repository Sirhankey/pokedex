import React, { useState } from 'react';
import { FaTrophy } from 'react-icons/fa';

const Scores = ({ userHighScores }) => {
    const [expanded, setExpanded] = useState(false);
    if (!userHighScores) return null;

    const toggleExpansion = () => {
        setExpanded(!expanded);
    };

    const getMedalColor = (index) => {
        switch (index) {
            case 0:
                return 'bg-gold';
            case 1:
                return 'bg-silver';
            case 2:
                return 'bg-bronze';
            default:
                return '';
        }
    };

    const sortedScores = Object.values(userHighScores).sort((a, b) => b.score - a.score);
    const top3Scores = sortedScores.slice(0, 3);

    console.log('Top 3 scores:', top3Scores);

    return (
        <div className="relative">
            <div
                className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center cursor-pointer "
                onClick={toggleExpansion}
            >
                <FaTrophy className="text-yellow-500 text-xl" />
            </div>
            {expanded && (
                <div
                    className="absolute top-full left-0 z-10 p-4"
                    style={{ minWidth: '120px' }}
                >
                    <ul className="flex flex-col gap-2">
                        {top3Scores.map((score, index) => (
                            <li
                                key={index}
                                className={`flex items-center justify-center shadow-md ring-1 ring-black ring-opacity-5 rounded-full w-8 h-8 ${getMedalColor(index)}`}
                            >
                                <span className="text-white text-sm font-semibold">{score.score}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Scores;
