import React from 'react'

import Image from 'next/image'
import { NextPage, GetStaticProps } from 'next'

import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { TitleCenter } from '../../components/UI/TitleCenter'
import { subCategoriesDB } from '../../database/subCategories'
import { ISubCategory } from '../../interface/subCategory'
import { CardsList } from '../../components/cards/CardsList'
import Link from 'next/link'
import { userDB } from '../../database/users'
import { IUser } from '../../interface/users'
import { productsDB } from '../../database/products'
import { ProductList } from '../../components/products/ProductList'
import { IProduct } from '../../interface/products';
import { fetchApi } from '../../axios/config';

interface Props {
    subCategories: ISubCategory[];
    marcas: IUser[];
    products: IProduct[];
}

const construccion: NextPage<Props> = ({ subCategories, marcas, products }) => {
    return (
        <LayoutDefault 
            title='Construcción en Mercado Libre Argentina'
            description='Encontrá lo que buscás en Construcción. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre'
        >
            <div className='relative' style={{ height: "14rem" }}>
                <Image 
                    src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1617212000369-headerdesktop.jpg"
                    alt='Construcción revisa tu hogar'
                    objectFit='cover'
                    layout='fill'
                />
            </div>
            <TitleCenter 
                title='todo lo que necesitás'
            />
            <div className='container'>
                <CardsList 
                    typeCard='Card_S'
                    items={ subCategories.filter( (item, idx) => idx >= 0 && idx <= 3 && item ) }
                />
            </div>
            <div className='container flex-row my-2'>
                <Link href={ `/`}>
                    <a className='relative radius-default ov-hidd shadow-default' style={{ height: "24rem", width: "100%" }}>
                        <Image 
                            src="https://http2.mlstatic.com/D_NQ_NP_789402-MLA45334068235_032021-B.webp"
                            alt="construccion baños"
                            objectFit='cover'
                            layout='fill'
                        />
                        <div className=' m-2 background-wh radius-deafult pos-left-bot radius-default p-2' style={{}}>
                            <h3 className='pb-1 font-2'>Baños</h3>
                            <p className='font-5'>Ver productos</p>
                        </div>
                    </a>
                </Link>
                <Link href={ `/`}>
                    <a className='relative radius-default ov-hidd shadow-default' style={{ height: "24rem", width: "100%" }}>
                        <Image 
                            src="https://http2.mlstatic.com/D_NQ_NP_914637-MLA45333661541_032021-B.webp"
                            alt="construccion baños"
                            objectFit='cover'
                            layout='fill'
                        />
                        <div className=' m-2 background-wh radius-deafult pos-left-bot radius-default p-2' style={{}}>
                            <h3 className='pb-1 font-2'>Cocinas</h3>
                            <p className='font-5'>Ver productos</p>
                        </div>
                    </a>
                </Link>
            </div>
            <div className='flex-row container'>
                <div className='relative radius-default ov-hidd shadow-default' style={{ height: "16.5rem", width: "100%" }}>
                    <Image 
                        src="https://http2.mlstatic.com/D_NQ_NP_637913-MLA45401751980_032021-OO.webp"
                        alt="hasta 18 sin interés"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
                <div className='relative radius-default ov-hidd shadow-default' style={{ height: "16.5rem", width: "100%" }}>
                    <Image 
                        src="https://http2.mlstatic.com/D_NQ_NP_638997-MLA48452951453_122021-OO.webp"
                        alt="hasta 18 sin interés"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            </div>
            <TitleCenter 
                title='más categorias'
            />
            <div className='container'>
                <CardsList 
                    typeCard='Card_S'
                    items={ subCategories.filter( (item, idx) => idx >= 4 && idx <= 7 && item ) }
                />
            </div>
            <div className='relative my-2 pointer container shadow-default' style={{ height: "16.5rem" }}>
                <Image 
                    src="https://http2.mlstatic.com/D_NQ_NP_918834-MLA43275144245_082020-OO.webp"
                    alt="Energía renovable"
                    layout='fill'
                    objectFit='cover'
                />
            </div>
            <section>
                <TitleCenter title='las mejores marcas'/>
                <div className='container'>
                    <CardsList items={ marcas } typeCard="Card_Circle" />
                </div>
            </section>
            <TitleCenter title='ofertas imperdibles' url urlTitle='Ver más' redirect='/productos?offer=true&category=construccion'/>
            <div className='container'>
                <ProductList products={ products }/>
            </div>
            <div className='container mt-2'>
                <div className='relative shadow-default radius-default mb-2' style={{ height: "16.5rem" }}>
                    <Image 
                        src="https://http2.mlstatic.com/D_NQ_NP_779467-MLA45342134582_032021-OO.webp"
                        alt="Servicios, encontrá los mejores profesionales"
                        layout='fill'
                    />
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    
    const response = await fetchApi.get("/subcategory/construccion?limit=8");
    const subCategories = await response.data;

    const response_2 = await fetchApi.get("/user/store-of-construccion?limit=8");
    const marcas = await response_2.data;

    const response_3 = await fetchApi.get("/products?category=construccion&limit=5&offer=true");
    const products = await response_3.data;

    return {
        props: {
            subCategories,
            marcas,
            products
        },
        revalidate: 86400   // 1 DIA
    }
}

export default construccion