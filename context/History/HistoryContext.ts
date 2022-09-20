import { createContext } from "react";
import { IHistoryMinin } from "../../interface/products";

export interface IHistoryContext {
    productos: IHistoryMinin[];

    //METHODS
    addProductHistory: ( _id: string, title: string, imgUrl: string ) => void;
    removeProductOfHistory: ( _id: string ) => void;
}

export const HistoryContext = createContext<IHistoryContext>({} as IHistoryContext)