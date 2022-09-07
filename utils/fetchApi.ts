import { fetchApi } from "../axios/config";
import { productsDB } from "../database/products";
import { Questions } from "../database/questions";
import { IProduct } from "../interface/products";

export const getProduct = async ( _id: string ): Promise<IProduct> => {
    const response = await fetchApi.get( `/products/${ _id }` );
    const producto = await response.data

    return producto
}

export const getAllObjs = ( _id: string ) => {
    
    const objs = Questions.filter( p => p.idProduct === _id );;

    console.log(objs)
    return objs
}