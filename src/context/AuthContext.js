import { useContext,createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase/firebase'
// import { setDoc,doc } from "firebase/firestore";
const AuthContext=createContext()

export const AuthContextProvider=({children})=>{
    const[user,setUser]= useState({})
    

    //logIN/ sign in function
    const googleSignIn=()=>{
        const provider=new GoogleAuthProvider();
        return signInWithPopup(auth,provider)
    }
    //Log  out fucntionality
    const logOut=()=>{
        return signOut(auth)
    }

    //Adding a new user
    useEffect(()=>{
        const unsub=onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log(currentUser)
        })
        return ()=>unsub()
    },[])

    return(
        <AuthContext.Provider value={{googleSignIn,logOut,user}}>
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth=()=>{
    return useContext(AuthContext)
}
