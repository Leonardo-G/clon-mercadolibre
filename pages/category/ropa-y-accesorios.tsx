import React from 'react'

import { NextPage, GetStaticProps } from 'next'

import { ImageFull } from '../../components/imageCard/ImageFull'
import { ImagesCards } from '../../components/imageCard/ImagesCards'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { TitleCenter } from '../../components/UI/TitleCenter'
import { subCategoriesDB } from '../../database/subCategories'
import { userDB } from '../../database/users'
import { IUser } from '../../interface/users';
import { ProductList } from '../../components/products/ProductList'
import { productsDB } from '../../database/products';
import { CardsList } from '../../components/cards/CardsList';
import { fetchApi } from '../../axios/config'

interface Props {
    subCategories: string[];
    marcas: IUser[]
}

const RopaAccesoriosPage: NextPage<Props> = ({ subCategories, marcas }) => {
    
    return (
        <LayoutDefault title='Ropa y Accesorios en Mercado Libre' description='Encontrá lo que buscás en Ropa y Accesorios. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre.'>
            <ImageFull 
                src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1660662618805-home-sliderdesktopjdmzapatillas.jpg'
                height='34rem'
                objectFit='cover'
            />
            <section className='container'>
                <TitleCenter 
                    title='anticipo primavera/verano'
                />

                <ImagesCards 
                    images={ subCategories.filter(( s, idx) => idx >= 0 && idx <= 1) }
                    height="24rem"
                />
                <ImagesCards 
                    images={ subCategories.filter(( s, idx) => idx >= 2 && idx <= 4) }
                    height="24rem"
                />
            </section>
            <section className='container'>
                <TitleCenter title='completa tu look'/>
                <ImagesCards 
                    images={ subCategories.filter(( s, idx) => idx >= 5 && idx <= 7) }
                    height="24rem"
                />
            </section>
            <section className='container'>
                <TitleCenter title='tus marcas preferidas'/>
                <ImageFull 
                    src='https://http2.mlstatic.com/D_NQ_NP_833297-MLA51148299943_082022-OO.webp'
                />
                <ImagesCards 
                    images={["https://http2.mlstatic.com/D_NQ_NP706120-MLA51153853177_082022-B.webp", "https://http2.mlstatic.com/D_NQ_NP823791-MLA51166694925_082022-B.webp"]}
                />
                <ImagesCards 
                    images={["https://http2.mlstatic.com/D_NQ_NP702476-MLA51164835342_082022-B.webp", "https://http2.mlstatic.com/D_NQ_NP604601-MLA51167164120_082022-B.webp"]}
                />
            </section>
            <section className='container'>
                <TitleCenter title='adelantate a la nueva temporada' url urlTitle='Ver más'/>
                <ProductList 
                    products={ productsDB }
                />
            </section>
            <section className='container'>
                <TitleCenter title='aprovechá los últimos días de liquidación'/>
                <ImagesCards 
                    images={["https://http2.mlstatic.com/D_NQ_NP731134-MLA50971681724_082022-B.webp", "https://http2.mlstatic.com/D_NQ_NP902718-MLA50971681749_082022-B.webp", "https://http2.mlstatic.com/D_NQ_NP963381-MLA50971671837_082022-B.webp"]}
                    height="24rem"
                />
                <ImageFull src='https://http2.mlstatic.com/D_NQ_NP_612994-MLA50968057911_082022-OO.webp'/>
                <ImageFull src='https://http2.mlstatic.com/D_NQ_NP_764518-MLA51164496348_082022-OO.webp'/>
                <ImageFull src='https://http2.mlstatic.com/D_NQ_NP_626103-MLA51057808274_082022-OO.webp'/>
            </section>
            <section className='container mb-2'>
                <TitleCenter title='tiendas oficiales'/>
                <CardsList 
                    items={ marcas as IUser[]}
                    typeCard="Card_Circle"
                />
            </section>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const response = await fetchApi.get("/subcategory/ropa-y-accesorios");
    const subCategories = await response.data;
    const response_2 = await fetchApi.get("/user/store-of-ropa-y-accesorios");
    const marcas = await response_2.data;

    return {
        props: {
            subCategories: subCategories.map( s => s.imgUrl),
            marcas
        }
    }
}


export default RopaAccesoriosPage