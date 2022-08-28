import React from 'react'

import { NextPage, GetServerSideProps } from 'next'
import { productsDB } from '../../database/products'
import { CategoryCodeProduct, SubCategoryCodeProduct, IProduct } from '../../interface/products';

import { LayoutDefault } from '../../components/layout/LayoutDefault';
import { CardsList } from '../../components/cards/CardsList';
import { ImageFull } from '../../components/imageCard/ImageFull';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { NotFound } from '../../components/products/NotFound';
import { Aside } from '../../components/UI/Aside';

interface Props {
    productos: IProduct[];
    params?: string[],
    querys?: { search: string };
    results?: number;
}

const ProductosCategoriaPage: NextPage<Props> = ({ productos, params, querys, results }) => {

    if ( productos.length <= 0 ) {
        return (
            <LayoutDefault title='Mercado Libre' description=''>
                <NotFound />
            </LayoutDefault>
        )
    }

    return (
        <LayoutDefault 
            title= {
                params ?
                    `${ params.toString().replace(/,/, " ")} publicadas por los mejores vendedores`
                :
                    `${ querys?.search } | Mercado Libre`
            }   
            description={`Descubrí los productos más buscados que no te podés perder en ${ params ? params.toString().replace(/,/, " ") : querys?.search } publicado por Mejores vendedores ✓ Con Envío Gratis en 24 hs ❤ Aprovechá Compras Internacionales.`}  
        >
            <ImageFull 
                src='https://http2.mlstatic.com/D_NQ_NP_860417-MLA49703541643_042022-OO.jpg'
                objectFit='cover'
                height='9rem'
            />
            <div className='flex-row container'>
                <Aside 
                    params={ params }
                    querys={ querys }
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
                        items={ productos }
                        typeCard="Card_XL"
                    />
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params, query }) => {
    console.log(params, query)

    //////////ESTE CODIGO SERA MAS COMPACTO CUANDO TENGAMOS LA API/////////
    /////////////////////CORRECTO FUNCIONAMIENTO EN LA VERSIÖN QUE SE CONSULTE CON LA API///////////////////////////
    let productos: IProduct[] = [];
    let paramsCategories;
    const isExistParams = params?.categorias || null
    const isExistQuery = query?.search || null;
    
    if ( isExistParams && !isExistQuery ) {
        const { categorias: [ categoria, subCategoria ]} = params as { categorias: [ CategoryCodeProduct, SubCategoryCodeProduct ] } || ""
        paramsCategories = [ categoria, subCategoria ];
        productos = productsDB.filter( p => p.category.filter( c => c.code === categoria ) && p.subCategory.filter(s => s.code === subCategoria))

    }

    if ( !isExistParams && query ) {
        productos = productsDB.filter( p => {
            const isExist = p.title.replace(/ /g, "").indexOf(query.search as string) 
            
            if ( isExist >= 0 ){
                return p
            }
        })
    }

    if ( !isExistParams && !isExistQuery ) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }
    
    const results = Number(productos.length)

    /////////////////////CORRECTO FUNCIONAMIENTO EN LA VERSIÖN QUE SE CONSULTE CON LA API///////////////////////////
    //////////ESTE CODIGO SERA MAS COMPACTO CUANDO TENGAMOS LA API/////////
    
    return {
        props: {
            productos: JSON.parse( JSON.stringify( productos ) ),
            params: isExistParams ? paramsCategories : null,
            querys: isExistQuery ? query : null,
            results
        }
    }
}

export default ProductosCategoriaPage