import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../Infra/firebase";
import { get, ref, set } from "firebase/database";
import { uid } from "uid";
import { onAuthStateChanged } from "firebase/auth";

export const ScoreContext = createContext();
ScoreContext.displayName = 'Score';


export function ScoreProvider({ children }) {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('Usuário logado detectado, carregando scores...');
                fetchUserScores(user.uid);
            } else {
                console.log('Nenhum usuário logado.');
                setScores([]);
            }
        });

        return () => unsubscribe();
    }, []);

    const fetchUserScores = async (userId) => {
        const scoresRef = ref(db, `scores/${userId}`);
        const snapshot = await get(scoresRef);
        if (snapshot.exists()) {
            setScores(Object.values(snapshot.val()));
        } else {
            setScores([]);
        }
    };

    const postScore = async (newScore) => {
        if (auth.currentUser) {
            const newUid = uid();
            const timeStamp = new Date().getTime();
            const email = auth.currentUser.email;

            await set(ref(db, `scores/${auth.currentUser.uid}/${newUid}`), {
                score: newScore,
                uid: newUid,
                timeStamp: timeStamp,
                email: email
            });
        }
    };

    return (
        <ScoreContext.Provider value={{ scores, postScore }}>
            {children}
        </ScoreContext.Provider>
    );
}

export function useScoreContext() {
    return useContext(ScoreContext);
}
