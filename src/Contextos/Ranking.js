import { useEffect, useState, useContext, createContext } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../Infra/firebase';
import { format } from 'date-fns';

export const RankingContext = createContext();
RankingContext.displayName = 'Ranking';

export function RankingProvider({ children }) {
    const [ranking, setRanking] = useState([]);

    useEffect(() => {
        const scoresRef = ref(db, 'scores');
        onValue(scoresRef, (snapshot) => {
            const scoresData = snapshot.val() || {};
            const highScores = [];

            // Processar cada usuário e encontrar o score mais alto
            Object.keys(scoresData).forEach(userId => {
                const userScores = scoresData[userId];
                let maxScoreEntry = null;

                // Encontrar a entrada com o maior score
                Object.values(userScores).forEach(entry => {
                    if (!maxScoreEntry || entry.score > maxScoreEntry.score) {
                        maxScoreEntry = {
                            userId,
                            email: entry.email,
                            score: entry.score,
                            timeStamp: format(new Date(entry.timeStamp), 'dd/MM/yyyy')
                        };
                    }
                });

                // Adicionar a maior pontuação do usuário ao array de highScores
                if (maxScoreEntry) {
                    highScores.push(maxScoreEntry);
                }
            });

            // Ordenar os scores por score decrescente
            highScores.sort((a, b) => b.score - a.score);

            setRanking(highScores);
        });
    }, []);

    return (
        <RankingContext.Provider value={{ ranking }}>
            {children}
        </RankingContext.Provider>
    );
}

export function useRankingContext() {
    return useContext(RankingContext);
}
