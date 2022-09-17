import React, { useState } from 'react'

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
import { IQuerys } from '../../interface/querys';
import { chartUpper } from '../../utils/chartUpper';
import Link from 'next/link';

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
                    products[0].tags.map(( t, idx ) => {
                        if ( idx + 1 === products[0].tags.length ) return (<Link key={ idx } href={{ pathname: "/productos", query: { search: t } }} ><a> { t } </a></Link>)
                        return (
                            <Link 
                                key={ idx }
                                href={{ pathname: "/productos", query: { search: t } }}    
                            >
                                <a> { t } -</a>
                            </Link> 
                        )
                    } )
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
                    <div className='flex-row-center flex-right'>
                        <p>Ordenar por</p>
                        <select className='pointer' name="option" style={{
                            border: "none",
                            background: "transparent",
                            WebkitAppearance: "none",
                            outline: "none",
                            padding: "1rem",
                        }}
                            onChange={ (e) => newQuery( e.target.value === "lower_price" 
                                        ? { sort: "price_asc" }
                                        : { sort: "relevant" }
                                    )}
                        >
                            <option 
                                value="relevant" 
                                selected
                            >Más relevantes</option>
                            <option 
                                value="lower_price"
                            >Menor precio</option>
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