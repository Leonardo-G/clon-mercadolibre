import React from 'react'

import { NextPage, GetStaticProps } from 'next'

import { CardsList } from '../../components/cards/CardsList'
import { LayoutDefault } from '../../components/layout/LayoutDefault'
import { TitleCenter } from '../../components/UI/TitleCenter'
import { subCategoriesDB } from '../../database/subCategories'
import { ISubCategory } from '../../interface/subCategory'
import { ImageFull } from '../../components/imageCard/ImageFull'
import { CardGridList } from '../../components/grid/CardGridList'

interface Props {
    subCategories: ISubCategory[];
}

const ElectrodomesticosPage: NextPage <Props> = ({ subCategories }) => {
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
            </section>
            <section>
                <TitleCenter title='las mejores marcas'/>
            </section>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const getSubCategories = subCategoriesDB.filter( subCategory => subCategory.category.code === "electrodomesticos" );

    return {
        props: {
            subCategories: getSubCategories
        }
    }
}

export default ElectrodomesticosPage