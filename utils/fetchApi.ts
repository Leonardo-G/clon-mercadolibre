import { fetchApi } from "../axios/config";
import { IProduct } from "../interface/products";

export const getProduct = async ( _id: string ): Promise<IProduct> => {
    const response = await fetchApi.get( `/products/${ _id }` );
    const producto = await response.data

    return producto
}