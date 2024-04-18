import { useContext, useState, useEffect } from "react";
import { createContext } from "react";
import { uid } from "uid";
import { set, ref, onValue, get } from 'firebase/database';
import { auth, db } from "../Infra/firebase";

export const RankingContext = createContext();
RankingContext.displayName = 'Ranking';

export function RankingProvider({ children }) {
    const [ranking, setRanking] = useState({});
    const [score, setScore] = useState(0);

    useEffect(() => {
        // Obter o ranking inicial ao montar o componente
        getHighScores();
    }, []);

    async function postScore(newScore) {
        const userScores = await getUserScores();
        console.log("userScores", userScores);
        if (userScores) {
            // Se o usuário já tiver scores registrados, verificar se o novo score é maior que o anterior
            const highestScore = Math.min(...Object.values(userScores).map(entry => entry.score));
            console.log("min score", highestScore);
            if (newScore <= highestScore) {
                console.log("O novo score deve ser maior que o anterior.");
                return; // Retorna sem postar o score se não for maior que o anterior
            }
        }
        // Postar o novo score no banco de dados
        const newUid = uid();
        const timeStamp = new Date().getTime();
        console.log("Postando novo score:", newScore, newUid, timeStamp);
        await set(ref(db, `scores/${auth.currentUser.uid}/${newUid}`), {
            score: newScore,
            uid: newUid,
            timeStamp: timeStamp
        });
        // Atualizar o estado do score localmente
        setScore(newScore);
        // Atualizar o ranking após postar o novo score
        getHighScores();
    }

    async function getHighScores() {
        const scoresRef = ref(db, `scores`);
        onValue(scoresRef, (snapshot) => {
            const scoresData = snapshot.val();
            if (scoresData) {
                const highScores = {};
                Object.keys(scoresData).forEach((userId) => {
                    const userScores = scoresData[userId];
                    let maxScore = -1;
                    Object.values(userScores).forEach((scoreEntry) => {
                        if (scoreEntry.score > maxScore) {
                            maxScore = scoreEntry.score;
                        }
                    });
                    highScores[userId] = maxScore;
                });
                setRanking(highScores);
            } else {
                console.log("Nenhum dado de classificação encontrado.");
            }
        });
    }

    async function getUserScores() {

        console.log("auth.currentUser?.uid", auth.currentUser?.uid);

        const userScoresRef = ref(db, `scores/${auth.currentUser?.uid}`);

        const snapshot = await get(userScoresRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            return null;
        }
    }

    return (
        <RankingContext.Provider value={{ ranking, score, postScore, getUserScores }}>
            {children}
        </RankingContext.Provider>
    );
}

export function useRankingContext() {
    return useContext(RankingContext);
}
