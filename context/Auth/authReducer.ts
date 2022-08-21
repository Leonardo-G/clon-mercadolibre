import { IAuthState } from "./AuthProvider";

type ActionType =
    | { type: "AUTH - Login" }
    | { type: "AUTH - LogOut" }

export const authReducer = ( state: IAuthState, action: ActionType ): IAuthState => {
    switch ( action.type ) {
        case "AUTH - Login":
            return {
                isAutenticated: true
            }

        case "AUTH - LogOut":
            return {
                isAutenticated: false
            }

        default:
            return state
    }
}