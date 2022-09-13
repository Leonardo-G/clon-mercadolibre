import React from 'react'

import { NextPage, GetServerSideProps } from 'next';
import { IProduct } from '../../interface/products';

import { LayoutDefault } from '../../components/layout/LayoutDefault';
import { CardsList } from '../../components/cards/CardsList';
import { ImageFull } from '../../components/imageCard/ImageFull';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from '../../components/products/NotFound';
import { Aside } from '../../components/UI/Aside';
import { fetchApi } from '../../axios/config';

interface Props {
    products: IProduct[];
    params?: string[],
    query?: { 
        search: string;
        category: string;
        subcategory: string;
    };
    results?: number;
}

const ProductosCategoriaPage: NextPage<Props> = ({ products, params, query, results }) => {

    if ( products.length <= 0 ) {
        return (
            <LayoutDefault title='Mercado Libre' description=''>
                <NotFound />
            </LayoutDefault>
        )
    }
    return (
        <LayoutDefault 
            title= {
                query?.search ?
                    `${ query?.search } | Mercado Libre`
                : query?.category ? `${ query?.category } | Mercado Libre`
                : query?.subcategory! && `${ query?.subcategory } | Mercado Libre`
            }   
            description={`Descubrí los productos más buscados que no te podés perder en productos publicado por Mejores vendedores ✓ Con Envío Gratis en 24 hs ❤ Aprovechá Compras Internacionales.`}  
        >
            <ImageFull 
                src='https://http2.mlstatic.com/D_NQ_NP_860417-MLA49703541643_042022-OO.jpg'
                objectFit='cover'
                height='9rem'
            />
            <div className='flex-row container'>
                <Aside 
                    params={ params }
                    querys={ query }
                    results={ results! }
                />
                <div style={{ flex: 3.5 }} className="my-full">
                    <div className='flex-row-center flex-right'>
                        <p>Ordenar por</p>
                        <select className='pointer' name="option" style={{
                            border: "none",
                            background: "transparent",
                            WebkitAppearance: "none",
                            outline: "none",
                            padding: "1rem",
                        }}>
                            <option value="relevant" selected>Más relevantes</option>
                            <option value="lower_price">Menor precio</option>
                        </select>
                        <FontAwesomeIcon className='color-blue font-s' icon={ faAngleDown }/>
                    </div>
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
    console.log(query)

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
            products
        }
    }
}

export default ProductosCategoriaPage