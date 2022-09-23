import { useRouter } from 'next/router';
import React, { FC, useEffect, useState } from 'react'
import { fetchApi } from '../../axios/config';
import { IProduct } from '../../interface/products';
import { ProductList } from '../products/ProductList';

interface Props {
    category: string;
    id: string
}

export const ProductsRecommended: FC<Props> = ({ category, id }) => {
    
    const { asPath } = useRouter()
    const [products, setProducts] = useState([] as IProduct[]);

    const getProductsRecommended = async () => {
        const response = await fetchApi.get(`/products?category=${ category }&limit=4`);
        const results: { products: IProduct[] } = await response.data; 
        
        const productsRecommended = results.products.filter(( r )=> r._id !== id ).filter((r, idx) => idx >= 0 && idx <= 2)

        setProducts( productsRecommended )
    }
    
    useEffect(() => {

        getProductsRecommended()
            .catch( err => console.log(err) )

            //eslint-disable-next-line
    }, [ asPath ])

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
