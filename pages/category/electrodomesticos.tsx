import React from 'react'

import { NextPage, GetStaticProps } from 'next'

import { fetchApi } from '../../axios/config'
import { IProduct } from '../../interface/products'
import { IUser } from '../../interface/users'

import { CardsList } from '../../components/cards/CardsList'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { TitleCenter } from '../../components/UI/TitleCenter'
import { ISubCategory } from '../../interface/subCategory'
import { ImageFull } from '../../components/imageCard/ImageFull'
import { CardGridList } from '../../components/grid/CardGridList'
import { ImagesCards } from '../../components/imageCard/ImagesCards'
import { ProductList } from '../../components/products/ProductList'

interface Props {
    subCategories: ISubCategory[];
    marcas: IUser[];
    products: IProduct[]
}

const ElectrodomesticosPage: NextPage <Props> = ({ subCategories, marcas, products }) => {
    return (
        <LayoutDefault title='Electrodomésticos y Aires Ac. en Mercado Libre' description='Encontrá lo que buscás en Electrodomésticos y Aires Ac.. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre.'>
            <ImageFull 
                src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1606747673535-electroheader-desktop.jpg'
                objectFit='cover'
            />
            
            <section className='container'>
                <TitleCenter title='aclimatá tu hogar'/>
                <CardsList 
                    items={ subCategories.filter( (s, idx) => idx >= 0 && idx <= 2) as ISubCategory[] }
                    typeCard="Card_S"
                />
            </section>
            <section className='container'>
                <TitleCenter title='electromésticos'/>
                <CardGridList 
                    items={ subCategories.filter( (s, idx) => idx >= 3 && idx <= 5) }
                    quantity={ 3 }
                />
                <div className='mt-2'>
                    <CardGridList 
                        items={ subCategories.filter( (s, idx) => idx >= 6 && idx <= 9 ) }
                        quantity={ 4 }
                    />
                </div>
                <div>
                    <ImagesCards 
                        images={["https://http2.mlstatic.com/D_NQ_NP_899026-MLA51055750216_082022-OO.webp", "https://http2.mlstatic.com/D_NQ_NP_747760-MLA43147941497_082020-OO.webp"]}

                    />
                </div>
            </section>
            <section className='container'>
                <TitleCenter title='las mejores marcas'/>
                <CardsList 
                    items={ marcas as IUser[] }
                    typeCard= "Card_Circle"
                />
            </section>
            <section className='container'>
                <TitleCenter title='ofertas imperdibles' url urlTitle='Ver más' redirect='/productos?category=electrodomesticos&offer=true'/>
                <ProductList products={ products }/>
                <ImagesCards images={["https://http2.mlstatic.com/D_NQ_NP_852022-MLA43058241954_082020-OO.webp", "https://http2.mlstatic.com/D_NQ_NP_725215-MLA43059003673_082020-OO.webp"]}/>
            </section>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const response = await fetchApi.get("/subcategory/electrodomesticos?limit=12");
    const subCategories = await response.data;

    const response_2 = await fetchApi.get("/user/store-of-electrodomesticos?limit=12");
    const marcas = await response_2.data;

    const response_3 = await fetchApi.get("/products?category=electrodomesticos&limit=5&offer=true");
    const products = await response_3.data;

    return {
        props: {
            subCategories,
            marcas,
            products: products.products
        },
        revalidate: 86400   // 1 DIA
    }
}

export default ElectrodomesticosPage