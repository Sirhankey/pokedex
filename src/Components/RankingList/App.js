import { useContext, useEffect, useState } from 'react';
import Loading from '../Loading/App';
import { RankingContext } from '../../Contextos/Ranking';

function RankingList() {
    const { ranking } = useContext(RankingContext);
    const [loading, setLoading] = useState(true);
    const [selectedCard, setSelectedCard] = useState(null);

    useEffect(() => {
        setLoading(ranking.length === 0);
    }, [ranking]);

    const getMedal = (index) => {
        switch (index) {
            case 0: return '🥇';
            case 1: return '🥈';
            case 2: return '🥉';
            default: return '';
        }
    };

    const handleCardClick = (index) => {
        setSelectedCard(selectedCard === index ? null : index);
    };

    const cardClass = (index) => {
        let baseClasses = 'bg-white rounded-lg flex items-center justify-between cursor-pointer transition-transform duration-200 ';
        if (index === selectedCard) {
            // Escala maior ao ser selecionado, menos intenso em telas pequenas
            baseClasses += 'md:scale-110 scale-105 ';
        } else {
            // Escala leve ao hover, nenhum efeito de escala em telas pequenas
            baseClasses += 'hover:md:scale-105 ';
        }
        switch (index) {
            case 0: return baseClasses + 'border-4 border-gold shadow-xl p-4 my-2 text-lg font-bold';
            case 1: return baseClasses + 'border-4 border-silver shadow-lg p-3 my-2 text-md font-medium';
            case 2: return baseClasses + 'border-4 border-bronze shadow-md p-3 my-2 text-md font-medium';
            default: return baseClasses + 'border border-gray-200 shadow p-2 my-1 text-sm';
        }
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="max-w-4xl mx-auto">
                {ranking.length > 0 ? (
                    ranking.map(({ userId, email, score, timeStamp }, index) => (
                        <div key={userId} className={cardClass(index)} onClick={() => handleCardClick(index)}>
                            <div>
                                <span className="mr-2">{getMedal(index)}</span>
                                <span>{email?.split('@')[0]}: {score} pontos ({timeStamp})</span>
                            </div>
                            <div className="font-semibold">
                                #{index + 1}
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center p-4">Nenhum score disponível</p>
                )}
            </div>
        </div>
    );
}

export default RankingList;
