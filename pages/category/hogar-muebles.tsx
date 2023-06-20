import React from 'react';
import { NextPage, GetStaticProps } from 'next';

import { fetchApi } from '../../axios/config';
import { ISubCategory } from '../../interface/subCategory';
import { IUser } from '../../interface/users';

import { CardsList } from '../../components/cards/CardsList'
import { ImageFull } from '../../components/imageCard/ImageFull'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { TitleCenter } from '../../components/UI/TitleCenter'
import { CardGridList } from '../../components/grid/CardGridList';
import { ImagesCards } from '../../components/imageCard/ImagesCards';

interface Props {
    subCategories: ISubCategory[];
    marcas: IUser[]
}

const HogarMueblesPage: NextPage<Props> = ({ subCategories, marcas }) => {
    return (
        <LayoutDefault title='Hogar, Muebles y Jardín en Mercado Libre'description='Encontrá lo que buscás en Hogar, Muebles y Jardín. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre.'>
            <ImageFull objectFit='cover' src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1606754220641-headerdesktop.jpg'/>
            <section className='container'>
                <TitleCenter title='tus categorías preferidas'/>
                <CardsList 
                    items={ subCategories.filter(( s, idx ) => idx >= 0 && idx <= 3) }
                    typeCard="Card_S"
                />
                <div className='mt-2'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_NP_803901-MLA42035151479_062020-OO.webp'
                        objectFit='cover'
                    />
                </div>
                <CardGridList 
                    items={ subCategories.filter(( s, idx ) => idx >= 4 && idx <= 6) }
                    quantity={ 3 }
                />
                <div className='mt-2'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_NP_855059-MLA41297488645_032020-OO.webp'
                        objectFit='cover'
                    />
                </div>
                <TitleCenter title='más categorías'/>
                <CardsList 
                    items={ subCategories.filter(( s, idx ) => idx >= 7 && idx <= 10) }
                    typeCard="Card_S"
                />
                <div className='mt-2'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_NP_878973-MLA48133612309_112021-OO.webp'
                        objectFit='cover'
                        url='/productos?category=hogar-muebles&until=12'
                    />
                </div>
            </section>

            <section className='container'>
                <TitleCenter title='tus marcas favoritas'/>
                <CardsList 
                    items={ marcas as IUser[] }
                    typeCard="Card_Circle"    
                />
                <div className='mt-full'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_NP_918943-MLA48452661508_122021-OO.webp'
                        objectFit='cover'
                        url='/productos?category=hogar-muebles&until=12'
                    />
                </div>
                <ImagesCards 
                    images={["https://http2.mlstatic.com/D_NQ_NP_961820-MLA41299067122_032020-OO.webp","https://http2.mlstatic.com/D_NQ_NP_705670-MLA41299139048_032020-OO.webp"]}
                />
            </section>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const response = await fetchApi.get("/subcategory/", {
        data: {
            category: "hogar-muebles"
        }
    });
    const subCategories = await response.data;

    const response_2 = await fetchApi.get("/user/store/hogar-muebles?limit=18");
    const marcas = await response_2.data;
    
    const response_3 = await fetchApi.get("/products?category=hogar-muebles&limit=5&offer=true");
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

export default HogarMueblesPage