import {
    initializeApp
} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
} from "firebase/auth";

import {
    useEffect,
    useState
} from "react";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const useAuth = () => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out");
            setUser(null);
        } catch (error) {
            console.log("Logout error:", error);
        }
    };

    return {user, handleLogout};
};

export async function login(email: string, password: string) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log("User logged in:", user);
        return userCredential;
    } catch (error) {
        throw error;
    }
}

export function logout() {
    return signOut(auth);
}
