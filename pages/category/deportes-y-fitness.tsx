import React from 'react'

import { GetStaticProps, NextPage } from "next";

import { fetchApi } from '../../axios/config';
import { IProduct } from '../../interface/products';
import { IUser } from '../../interface/users';

import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { ImageFull } from '../../components/imageCard/ImageFull';
import { TitleCenter } from '../../components/UI/TitleCenter';
import { CardsList } from '../../components/cards/CardsList';
import { ISubCategory } from '../../interface/subCategory';
import { ProductList } from '../../components/products/ProductList';
import { ImagesCards } from '../../components/imageCard/ImagesCards';

interface Props {
    subCategories: ISubCategory[];
    marcas: IUser[];
    products: IProduct[];
}

const Deportes_Y_FitnnesPage: NextPage<Props> = ({ subCategories, marcas, products }) => {
    return (
        <LayoutDefault title='Deportes y fitness en Mercado Libre' description='Encontrá lo que buscás en Deportes y Fitness. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre.'>
            <ImageFull 
                src='https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1649084416577-home-sliderdesktopadidasmundial.jpg'
                objectFit='cover'
                height='34rem'
            />
            <TitleCenter title='ponete en forma'/>
            <section className='container'>
                <CardsList 
                    items={ subCategories }
                    typeCard= "Card_S"
                    width='39rem'
                />
                <div className='my-2'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_NP_756722-MLA49566230502_042022-OO.webp'
                        height='16.5rem'
                        objectFit='cover'
                        styles
                        url='/productos?search=futbol'
                    />
                </div>
            </section>
            <section className='container'>
                <TitleCenter title='los más vendidos'/>
                <ProductList products={ products }/>
                <ImageFull 
                    src='https://http2.mlstatic.com/D_NQ_NP_626602-MLA45686065486_042021-OO.webp'
                    styles
                    objectFit='cover'
                    url='/productos?search=zapatillas'
                />
            </section>
            <section className='container'>
                <TitleCenter title='tiendas oficiales'/>
                <CardsList 
                    items={ marcas as IUser[]}
                    typeCard="Card_Circle"
                />
            </section>
            <section className='container'>
                <TitleCenter title='descubrí más'/>
                <ImagesCards 
                    images={["https://http2.mlstatic.com/D_NQ_NP_889228-MLA48428117115_122021-OO.webp", "https://http2.mlstatic.com/D_NQ_NP_780214-MLA44653108256_012021-OO.webp"]}
                />
            </section>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const response = await fetchApi.get("/subcategory/deportes-y-fitness?limit=10");
    const subCategories = await response.data;
    
    const response_2 = await fetchApi.get("/user/store-of-deportes-y-fitness?limit=8");
    const marcas = await response_2.data;
    
    const response_3 = await fetchApi.get("/products?category=deportes-y-fitness&limit=5&offer=true");
    const products = await response_3.data;

    return {
        props: {
            subCategories: subCategories,
            marcas,
            products: products.products
        },
        revalidate: 86400   // 1 DIA
    }
}

export default Deportes_Y_FitnnesPage