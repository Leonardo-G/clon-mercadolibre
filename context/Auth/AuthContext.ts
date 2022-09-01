import { createContext } from "react";
import { IErrorApi } from "../../interface/errorsApi";

export interface IAuthContext {
    user: { 
        isAutenticated: boolean, 
        username: string, 
        email: string, 
        typeUser: string, 
        imgUrl: string 
    } | null

    // METHODS
    register: ( username: string, email: string, password: string, repeat_password: string ) => Promise<{ hasError: boolean, error: string }>
    logIn:  ( email: string, password: string ) => Promise<{ hasError: boolean, error: string }>; 
    logOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)