import { IAuthState } from "./AuthProvider";

type ActionType =
    | { type: "AUTH - Login", payload: { isAutenticated: boolean, username: string, email: string, typeUser: string, imgUrl: string } }
    | { type: "AUTH - LogOut" }

export const authReducer = ( state: IAuthState, action: ActionType ): IAuthState => {
    switch ( action.type ) {
        case "AUTH - Login":
            return {
                ...state,
                user: action.payload
            }

        case "AUTH - LogOut":
            return {
                ...state,
            }

        default:
            return state
    }
}