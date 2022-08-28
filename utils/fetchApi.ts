import { productsDB } from "../database/products";
import { IProduct } from "../interface/products";

export const getProduct = ( _id: string ): IProduct => {
    const producto = productsDB.filter( p => p._id === _id );
    console.log(producto)
    return producto[0]
}