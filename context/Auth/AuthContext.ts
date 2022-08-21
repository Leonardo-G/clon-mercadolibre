import { createContext } from "react";

export interface IAuthContext {
    isAutenticated: boolean;

    // METHODS
    logIn:  ( email: string, password: string ) => { hasError: boolean, message: string }; 
    logOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)