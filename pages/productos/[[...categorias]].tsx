import React, { useState } from 'react'
import { NextPage, GetServerSideProps } from 'next';

import { fetchApi } from '../../axios/config';
import { chartUpper } from '../../utils/chartUpper';
import { IProduct } from '../../interface/products';
import { IQuerys } from '../../interface/querys';

import { LayoutDefault } from '../../components/layout/LayoutDefault';
import { CardsList } from '../../components/cards/CardsList';
import { ImageFull } from '../../components/imageCard/ImageFull';
import { NotFound } from '../../components/products/NotFound';
import { Aside } from '../../components/UI/Aside';
import { Tag } from '../../components/search/Tag';
import { OrderBy } from '../../components/search/OrderBy';

interface Props {
    products: IProduct[];
    params?: string[];
    query: IQuerys;
    results?: number;
}

const ProductosCategoriaPage: NextPage<Props> = ({ products, params, query, results }) => {

    const [querySearch, setQuerySearch] = useState({...query});

    if ( products.length <= 0 ) {
        return (
            <LayoutDefault title='Mercado Libre' description=''>
                <NotFound />
            </LayoutDefault>
        )
    }

    const newQuery = ( querysUpdate: IQuerys ) => {
        setQuerySearch({
            ...query,
            ...querysUpdate
        })
        
    }

    return (
        <LayoutDefault 
            title= {
                query?.search ?
                    `${ chartUpper(query?.search) } | Mercado Libre`
                : query?.category ? `${ chartUpper(query?.category ) } | Mercado Libre`
                : query?.subcategory ? `${ chartUpper(query?.subcategory ) } | Mercado Libre`
                : "Productos | Mercado Libre"
            }   
            description={`Descubrí los productos más buscados que no te podés perder en productos publicado por Mejores vendedores ✓ Con Envío Gratis en 24 hs ❤ Aprovechá Compras Internacionales.`}  
        >
            <ImageFull 
                src='https://http2.mlstatic.com/D_NQ_NP_860417-MLA49703541643_042022-OO.jpg'
                objectFit='cover'
                height='9rem'
            />
            <div className='container'>
                <span className='f-bold'>Búsquedas relacionadas: </span>
                {
                    products[0].tags.map(( tag, idx ) => (
                        <Tag key={ idx } idx={ idx } tag={ tag } totalTags={ products[0].tags.length }/>
                    ))
                }
            </div>
            <div className='flex-row container mb-2'>
                <Aside 
                    params={ params }
                    querys={ query }
                    results={ results! }
                    querySearch={ querySearch }
                    setQuerySearch={ setQuerySearch }
                    newQuery={ newQuery }
                />
                <div style={{ flex: 3.5 }} className="mt-2">
                    <OrderBy newQuery={ newQuery }/>
                    <CardsList 
                        items={ products }
                        typeCard="Card_XL"
                    />
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {

    const response = await fetchApi.get("/products", {
        params: {
            ...query,
            limit: "15"
        }
    })
    const products = await response.data;

    return {
        props: {
            query,
            products: products.products,
            results: products.totalProducts
        }
    }
}

export default ProductosCategoriaPage