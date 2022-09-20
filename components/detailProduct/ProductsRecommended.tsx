import React, { FC, useEffect, useState } from 'react'
import { fetchApi } from '../../axios/config';
import { IProduct } from '../../interface/products';
import { ProductList } from '../products/ProductList';

interface Props {
    subCategory: string;
    id: string
}

export const ProductsRecommended: FC<Props> = ({ subCategory, id }) => {
    
    const [products, setProducts] = useState([] as IProduct[]);

    const getProductsRecommended = async () => {
        const response = await fetchApi(`/products/short/by-${ subCategory }?limit=4`);
        const results: IProduct[] = await response.data; 

        const productsRecommended = results.filter(( r )=> r._id ).filter((r, idx) => idx >= 0 && idx <= 2)

        setProducts( productsRecommended )
    }
    
    useEffect(() => {

        getProductsRecommended()
            .catch( err => console.log(err) )
    }, [])

    return (
        <div className='pl-3'>
            <h3 className='font-xl f-bold mb-2'>Quienes compraron este producto tambien compraron</h3>
            {
                products.length > 0 &&
                
                <ProductList products={ products } /> 
            }
        </div>
    )
}
