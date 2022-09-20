import { IHistoryContext } from './HistoryContext';
import { IHistoryMinin } from '../../interface/products';
import { IHistoryState } from './HistoryProvider';

type ActionType = 
    | { type: "History - Completed", payload: IHistoryMinin[] | [] }
    | { type: "History - Add Product", payload: IHistoryMinin }
    | { type: "History - Remove Product", payload: { _id: string } }

export const historyReducer = ( state: IHistoryState, action: ActionType ): IHistoryState => {
    switch ( action.type ) {
        case "History - Completed":
            return {
                ...state,
                productos: action.payload
            }
        
        case "History - Add Product": 
            return {
                ...state,
                productos: [
                    ...state.productos.filter(( p, idx) => idx >= 0 && idx <= 5 ), 
                    action.payload
                ]
            }

        case "History - Remove Product":
            return {
                ...state,
                productos: [
                    ...state.productos.filter( p => p._id !== action.payload._id )
                ]
            }

        default:
            return state
    }
}