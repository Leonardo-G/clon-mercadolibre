import { createContext } from "react";

export interface IAuthContext {
    isAutenticated: boolean;

    // METHODS
    logIn: () => void; 
    logOut: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext)