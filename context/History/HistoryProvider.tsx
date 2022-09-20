import React, { FC, useEffect, useReducer } from 'react';
import { IHistoryMinin } from '../../interface/products';

import { HistoryContext } from './HistoryContext';
import { historyReducer } from './historyReducer';

interface Props {
    children: React.ReactElement
}

export interface  IHistoryState {
    productos: IHistoryMinin[] | [];
}

const INITIAL_STATE: IHistoryState = {
    productos: []
}

export const HistoryProvider: FC<Props> = ({ children }) => {

    const [state, dispatch] = useReducer( historyReducer, INITIAL_STATE );

    useEffect(() => {
        if ( localStorage.getItem("history") ) {
            
            dispatch({
                type: "History - Completed",
                payload: JSON.parse(localStorage.getItem("history")!)
            })
            console.log("ya estamos 2")
        } else {
            localStorage.setItem("history", JSON.stringify([]));

            dispatch({
                type: "History - Completed",
                payload: []
            })
        }
    }, [])
    
    const addProductHistory = (_id: string, title: string, imgUrl: string) => {
        
        if ( JSON.parse(localStorage.getItem("history") || "[]").some( ( p: IHistoryMinin ) => p._id === _id) ) return;
        if ( state.productos.length >= 7 ) {
            console.log(state.productos.length)

            localStorage.setItem( "history", JSON.stringify([
                ...state.productos.filter(( p, idx) => idx >= 0 && idx <= 5 ),
                { _id, title, imgUrl }
            ]))
        } else {

            localStorage.setItem( "history", JSON.stringify([
                ...state.productos,
                { _id, title, imgUrl }
            ]))
        }

        dispatch({
            type: "History - Add Product",
            payload: {
                _id,
                title,
                imgUrl
            }
        })
    }

    const removeProductOfHistory = ( _id: string ) => {
        const removeProduct = state.productos.filter( p => p._id !== _id );
        
        localStorage.setItem("history", JSON.stringify(removeProduct));

        dispatch({
            type: "History - Remove Product",
            payload: { _id }
        })

    }


    return (
        <HistoryContext.Provider value={{
            ...state,

            //METHODS
            addProductHistory,
            removeProductOfHistory
        }}>
            { children }
        </HistoryContext.Provider>
    )
}
