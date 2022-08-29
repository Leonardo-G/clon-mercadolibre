import { productsDB } from "../database/products";
import { Questions } from "../database/questions";
import { IProduct } from "../interface/products";

export const getProduct = ( _id: string ): IProduct => {
    const producto = productsDB.filter( p => p._id === _id );

    return producto[0]
}

export const getAllObjs = ( _id: string ) => {
    
    const objs = Questions.filter( p => p.idProduct === _id );;

    console.log(objs)
    return objs
}