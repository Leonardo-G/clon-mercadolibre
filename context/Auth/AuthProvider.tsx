import React, { FC, ReactNode, useEffect, useReducer } from 'react'
import { useRouter } from 'next/router';

import Cookies from "js-cookie";

import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';


export interface IAuthState {
    user: { 
        isAutenticated: boolean, 
        username: string, 
        email: string, 
        typeUser: string, 
        imgUrl: string 
    } | null
}

const INITIAL_STATE: IAuthState = {
    user: null,
}

interface Props {
    children: ReactNode;
}

export const AuthProvider: FC<Props> = ({ children }) => {
    
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);
    const router = useRouter()

    useEffect(() => {
        if ( Cookies.get("user-t") ) {
            const user = Cookies.get("infoUser");
            
            dispatch({
                type: "AUTH - Login",
                payload: JSON.parse( user as any )
            })
        }
    }, [])

    const register = async ( username: string, email: string, password: string, repeat_password: string ): Promise<{ hasError: boolean, error: string }> => {

        if ( password !== repeat_password ) {
            return {
                hasError: true,
                error: "Las contraseñas tienen que coincidir"
            }
        }

        try {
            const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/user/sign-in`, {
                method: "POST",
                body: JSON.stringify({ username, email, password }),
                headers: {
                    "Content-Type": "application/json"  
                }
            })
            const result = await response.json();
    
            if ( response.status >= 400 && response.status < 500  ){
                throw result
            }
    
            if ( response.status  >= 500 && response.status < 600){
                throw "Error en el servidor, intentelo de nuevo más tarde."
            }
    
            const user = {
                isAutenticated: true,
                username: result.username,
                email: result.email,
                typeUser: result.typeUser,
                imgUrl: result.imgUrl
            }

            dispatch({
                type: "AUTH - Login",
                payload: {
                    ...user
                }
            })
    
            Cookies.set("user-t", result.token)
            Cookies.set("infoUser", JSON.stringify( user ))

            return {
                hasError: false,
                error: "OK"
            }

        } catch (error: any) {
            console.log(error)
            return {
                hasError: true,
                error: error.msg as string
            }
        }
    }
    
    const logIn = async (email: string, password: string): Promise<{ hasError: boolean, error: string }> => {
        
        try {
            const response = await fetch(`${ process.env.NEXT_PUBLIC_API_URL }/user/login`, {
                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-Type": "application/json"  
                }
            })
            const result = await response.json();

            if ( response.status >= 400 && response.status < 500  ){
                throw result
            }

            if ( response.status  >= 500 && response.status < 600){
                throw "Error en el servidor, intentelo de nuevo más tarde."
            }

            const user = {
                isAutenticated: true,
                username: result.username,
                email: result.email,
                typeUser: result.typeUser,
                imgUrl: result.imgUrl
            }

            dispatch({
                type: "AUTH - Login",
                payload: {
                    ...user
                }
            })
    
            Cookies.set("user-t", result.token)
            Cookies.set("infoUser", JSON.stringify( user ))
    
            return {
                hasError: false,
                error: "OK"
            }

        } catch (error: any) {
            console.log(error)
            return {
                hasError: true,
                error: error.msg as  string
            }
        }
    }

    const logOut = () => {
        Cookies.remove("user-t");
        Cookies.remove("infoUser");

        router.reload()
    }

    return (
        <AuthContext.Provider value={{
            ...state,

            // METHODS
            logIn,
            logOut,
            register
        }}>
            { children }
        </AuthContext.Provider>
    )
}
