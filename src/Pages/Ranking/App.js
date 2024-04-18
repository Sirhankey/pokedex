import React from 'react';
import { RankingProvider } from '../../Contextos/Ranking';
import RankingList from '../../Components/RankingList/App';

function RankingPage() {
    return (
        <RankingProvider>  
            <div className="min-h-screen bg-gray-100 flex flex-col items-center">
                <h1 className="text-4xl font-bold mt-10 mb-5">Ranking Global</h1>
                <RankingList />
            </div>
        </RankingProvider>
    );
}

export default RankingPage;
