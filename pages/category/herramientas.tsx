import React from 'react'

import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

import { CardsList } from '../../components/cards/CardsList'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { ISubCategory } from '../../interface/subCategory'
import { TitleCenter } from '../../components/UI/TitleCenter';
import { ProductList } from '../../components/products/ProductList'
import { IUser } from '../../interface/users'
import { fetchApi } from '../../axios/config'
import { IProduct } from '../../interface/products'
import Link from 'next/link'

interface Props {
  //Todas las subcategorias de Herramientas
  subCategories: ISubCategory[]
  //Marcas de herramientas
  marcas: IUser[];
  products: IProduct[]
}

const CategoriesPage: NextPage<Props> = ({ subCategories, marcas, products }) => {

  return (
    <LayoutDefault 
        title='Herramientas en Mercado Libre'
        description='Encontrá lo que buscás en Herramientas y Construcción. Todo lo que necesitas lo conseguís en un solo lugar, en Mercado Libre'    
    >
        <div style={{ position: "relative", height: "14rem" }}>
            <Image 
                src="https://http2.mlstatic.com/storage/splinter-admin/o:f_webp,q_auto:best/1617222992695-headerdesktop.jpg"
                alt="Portada herramientas"
                layout='fill'
                objectFit='cover'
            />
        </div>
        <TitleCenter title='los mejores productos'/>
        <div className='container'>
            <CardsList 
                typeCard='Card_S'
                items={ subCategories.filter( (item, idx) => idx >= 0 && idx <= 3 && item ) }
            />
        </div>
        <div className='container py-2'>
            <div className='flex-row c-gap-2'>
                <Link href="/productos?category=herramientas&interest=true&until=6">
                    <a className='relative radius-default ov-hidd' style={{ height: "16.5rem", width:"100%", flex: 1 }}>
                        <Image 
                        src="https://http2.mlstatic.com/D_NQ_NP_846766-MLA50400201462_062022-OO.webp"
                        alt="Herramientas información"
                        objectFit='cover'
                        layout='fill'
                        />
                    </a>
                </Link>
                <Link href="/productos?category=herramientas&interest=true&until=12">
                    <a className='relative radius-default ov-hidd' style={{ height: "16.5rem", width:"100%", flex: 1 }}>
                        <Image 
                        src="https://http2.mlstatic.com/D_NQ_NP_817200-MLA48452827216_122021-OO.webp"
                        alt="Herramientas información"
                        objectFit='cover'
                        layout='fill'
                        />
                    </a>
                </Link>
            </div>
        </div>
        <TitleCenter title='tus herramientas preferidas'/>
        <div className='container'>
            <CardsList 
                typeCard='Card_S'
                items={ subCategories.filter( (item, idx) => idx >= 4 && idx <= 7 && item ) }
            />
        </div>
        <TitleCenter title='ofertas imperdibles' url urlTitle='Ver más' redirect='/productos?offer=true&category=herramientas'/>
        <div className='container'>
            <ProductList products={ products }/>
        </div>
        <TitleCenter title='tus marcas favoritos'/>
        <div className='container'>
            <CardsList items={ marcas } typeCard="Card_M" />
        </div>
        <div className='container'>
            <Link href="/productos?shipping=2&category=herramientas" passHref>
                <div className='relative my-2 pointer shadow-default' style={{ height: "16.5rem" }}>
                    <Image 
                        alt='full, entrega más rápido'
                        src="https://http2.mlstatic.com/D_NQ_NP_704337-MLA45346335455_032021-OO.webp"
                        objectFit='cover'
                        layout='fill'
                    />
                </div>
            </Link>
        </div>
    </LayoutDefault>
  )
}

export const getStaticProps: GetStaticProps = async () => {

    const response = await fetchApi.get("/subcategory/", {
        data: {
            category: "herramientas"
        }
    });
    const subCategories = await response.data;

    const response_2 = await fetchApi.get("/user/store/herramientas?limit=8");
    const marcas = await response_2.data;

    const response_3 = await fetchApi.get("/products?category=herramientas&limit=5&offer=true");
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

export default CategoriesPage