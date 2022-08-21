import { createContext } from "react";

export interface IAuthContext {
    isAutenticated: boolean;

    // METHODS
    register: ( username: string, email: string, password: string, repeat_password: string ) => { hasError: boolean, message: string }
    logIn:  ( email: string, password: string ) => { hasError: boolean, message: string }; 
    logOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)