import Image from 'next/image'
import type { NextPage, GetStaticProps } from 'next'

import { fetchApi } from '../axios/config';

import { Categories } from '../components/home/Categories'
import { Discover } from '../components/home/Discover'
import { Info } from '../components/home/Info'
import { LayoutDefault } from '../components/layout/LayoutDefault'
import { ProductList } from '../components/products/ProductList'
import { Carrousel } from '../components/UI/Carrousel'
import { Profit } from '../components/UI/Profit'
import { TitleSection } from '../components/UI/TitleSection'

import { IProduct } from '../interface/products'
import { Subscription } from '../components/home/Subscription';
import { Payment } from '../components/home/Payment';
import { discover } from '../database/discover';

interface Props {
  productsByOffer: IProduct[]
}

const Home: NextPage<Props> = ({ productsByOffer }) => {
    return (
        <LayoutDefault
            description='Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
            title='Mercado Libre Argentina - Envios gratis al día'
        >
            <Carrousel />
            <div>
                <section className='my-full container'>
                    <Payment />
                </section>
                <section className='my-full container'>
                    <TitleSection 
                        title='Ofertas'
                        url
                        urlTitle='Ver Ofertas'
                    />
                    <ProductList products={ productsByOffer }/>
                </section>
                <section className='my-full container'>
                    <Subscription />
                </section>
                <section className="my-full container">
                    <Profit />
                </section>
                <section className='my-full container'>
                    <TitleSection title="Descbrí"/>
                    <Discover 
                        discover={ discover.filter((d, idx) => idx >= 0 && idx <= 1) }
                    />
                </section>
                <section className='my-full container'>
                    <TitleSection title="Te puede interesar"/>
                    <Discover 
                        discover={ discover.filter((d, idx) => idx >= 2 && idx <= 3 ) }
                    />
                </section>
                <section className='my-full container'>
                    <Categories />
                </section>
                <section className='background-wh'>
                    <Info />
                </section>
            </div>
        </LayoutDefault>
    )
}

export const getStaticProps: GetStaticProps = async () => {

  const responseApi = await fetchApi.get( "/products/short/by-offer" )
  const productsByOffer = await responseApi.data;
  
  return {
    props: {
      productsByOffer: JSON.parse( JSON.stringify(productsByOffer) )
    }
  }
} 

export default Home
