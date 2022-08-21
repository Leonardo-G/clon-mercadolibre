import React, { FC, ReactNode, useEffect, useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';

import Cookies from "js-cookie";
import { useRouter } from 'next/router';

export interface IAuthState {
    isAutenticated: boolean;
}

const INITIAL_STATE: IAuthState = {
    isAutenticated: false,
}

interface Props {
    children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const router = useRouter()

    useEffect(() => {
        if ( Cookies.get("isAutenticated") ) {
            dispatch({
                type: "AUTH - Login"
            })
        }
    }, [])
    
    const logIn = (email: string, password: string): { hasError: boolean, message: string } => {
        
        //Luego se válida con el backend
        
        dispatch({
            type: "AUTH - Login"
        })

        Cookies.set("isAutenticated", JSON.stringify(true));

        return {
            hasError: false,
            message: "OK"
        }
        
    }
    const logOut = () => {
        Cookies.remove("isAutenticated");

        router.reload()
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            // METHODS
            logIn,
            logOut
        }}>
            { children }
        </AuthContext.Provider>
    )
}
