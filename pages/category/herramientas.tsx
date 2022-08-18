import React from 'react'

import { NextPage, GetStaticProps } from 'next'
import Image from 'next/image'

import { CardsList } from '../../components/cards/CardsList'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { subCategoriesDB } from '../../database/subCategories'
import { ISubCategory } from '../../interface/subCategory'
import { TitleCenter } from '../../components/UI/TitleCenter';
import { ProductList } from '../../components/products/ProductList'
import { userDB } from '../../database/users';
import { IUser } from '../../interface/users'

interface Props {
  //Todas las subcategorias de Herramientas
  herramientas: ISubCategory[]
  //Marcas de herramientas
  marcas: IUser[]
}

const CategoriesPage: NextPage<Props> = ({ herramientas, marcas }) => {

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
                items={ herramientas.filter( (item, idx) => idx >= 0 && idx <= 3 && item ) }
            />
        </div>
        <div className='container py-2'>
            <div className='flex-row c-gap-2'>
                <div className='relative radius-default ov-hidd' style={{ height: "16.5rem", width:"100%", flex: 1 }}>
                    <Image 
                      src="https://http2.mlstatic.com/D_NQ_NP_846766-MLA50400201462_062022-OO.webp"
                      alt="Herramientas información"
                      objectFit='cover'
                      layout='fill'
                    />
                </div>
                <div className='relative radius-default ov-hidd' style={{ height: "16.5rem", width:"100%", flex: 1 }}>
                    <Image 
                      src="https://http2.mlstatic.com/D_NQ_NP_846766-MLA50400201462_062022-OO.webp"
                      alt="Herramientas información"
                      objectFit='cover'
                      layout='fill'
                    />
                </div>
            </div>
        </div>
        <TitleCenter title='tus herramientas preferidas'/>
        <div className='container'>
            <CardsList 
                typeCard='Card_S'
                items={ herramientas.filter( (item, idx) => idx >= 4 && idx <= 7 && item ) }
            />
        </div>
        <TitleCenter title='ofertas imperdibles' url urlTitle='Ver más'/>
        <div className='container'>
            <ProductList />
        </div>
        <TitleCenter title='tus marcas favoritos'/>
        <div className='container'>
            <CardsList items={ marcas } typeCard="Card_M" />
        </div>
        <div className='container'>
            <div className='relative my-2 pointer shadow-default' style={{ height: "16.5rem" }}>
                <Image 
                    alt='full, entrega más rápido'
                    src="https://http2.mlstatic.com/D_NQ_NP_704337-MLA45346335455_032021-OO.webp"
                    objectFit='cover'
                    layout='fill'
                />
            </div>
        </div>
    </LayoutDefault>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const herramientas = subCategoriesDB.filter( ( subCategory: ISubCategory )  => subCategory.category.code === "herramientas" );
  const marcas = userDB.filter( marca => marca.type === "company-brand" && marca.category?.find( m => m === "herramientas"))

  return {
    props: {
        herramientas,
        marcas
    }
  }
}

export default CategoriesPage