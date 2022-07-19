import { createContext, useContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){


    function signUp(email, password){
        return createUserWithEmailAndPassword(email,password)
    }
    return(
        <userAuthContext.Provider value={}>
            {children}
        </userAuthContext.Provider>
    )
}

export function useUserAuth(){
    return useContext(userAuthContext);
}