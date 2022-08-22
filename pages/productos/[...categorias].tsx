import React from 'react'

import { NextPage, GetServerSideProps } from 'next'
import { productsDB } from '../../database/products'
import { ICategoryObj, CategoryCodeProduct, SubCategoryCodeProduct, IProduct } from '../../interface/products';
import { ISubCategory } from '../../interface/subCategory'
import { LayoutDefault } from '../../components/layout/LayoutDefault';
import { CardsList } from '../../components/cards/CardsList';
import { ImageFull } from '../../components/imageCard/ImageFull';

interface Props {
    productos: IProduct[];
    categoria: string,
    subCategoria: string
}

const ProductosCategoriaPage: NextPage<Props> = ({ productos, categoria, subCategoria }) => {
    return (
        <LayoutDefault 
            title={`${ categoria } ${ subCategoria } publicadas por los mejores vendedores`}
            description={`Descubrí los productos más buscados que no te podés perder en ${ categoria } ${ subCategoria } publicado por Mejores vendedores ✓ Con Envío Gratis en 24 hs ❤ Aprovechá Compras Internacionales.`}  
        >
            <ImageFull 
                src='https://http2.mlstatic.com/D_NQ_NP_860417-MLA49703541643_042022-OO.jpg'
                objectFit='cover'
                height='9rem'
            />
            <div className='flex-row container'>
                <div style={{ flex: 1 }}></div>
                <div style={{ flex: 3.5 }}>
                    
                    <CardsList 
                        items={ productos }
                        typeCard="Card_XL"
                    />
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { categorias: [ categoria, subCategoria ]} = params as { categorias: [ CategoryCodeProduct, SubCategoryCodeProduct ] }
    
    const productos = productsDB.filter( p => p.category.filter( c => c.code === categoria ) && p.subCategory.filter(s => s.code === subCategoria))
    console.log(categoria, subCategoria)

    if ( !productos ) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            productos: JSON.parse( JSON.stringify( productos ) ),
            categoria,
            subCategoria
        }
    }
}

export default ProductosCategoriaPage