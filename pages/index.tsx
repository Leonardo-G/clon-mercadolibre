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
import styles from "../styles/pages/home.module.css";

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
                <TitleSection 
                    title='Ofertas'
                    url
                    urlTitle='Ver Ofertas'
                />
                <ProductList products={ productsByOffer }/>
            </section>
            <section className='my-full container'>
                <div className={ styles.subscription }>
                    <div className={ styles.subscription__head }>
                        <h3>Subscribete al nivel 6</h3>
                        <div className={ styles['head--price'] }>
                          <span>$ 1200</span>
                          <p>$499 <span>/mes</span></p>
                        </div>
                    </div>
                    <div className={ styles.subscription__description }>
                        <p>Conseguí los mejores beneficios en Mercado Libre y Mercado Pago</p>
                    </div>
                    <div className={ styles.subscription__options }>
                        <div className={ styles['options--product'] }>
                            <div className='img-contain' style={{ width: "7.2rem", height: "7.2rem"}}>
                                <Image 
                                  src="/assets/home/dplus.svg"
                                  alt='Disney plus'
                                  layout='fill'
                                  objectFit="contain"
                                />
                            </div>
                            <p>Disney+ sin cargo</p>
                          </div>
                        <div className={ styles['options--product'] }>
                            <div className='img-contain' style={{ width: "7.2rem", height: "7.2rem"}}>
                                <Image 
                                  src="/assets/home/starplus.svg"
                                  alt='Star plus'
                                  layout='fill'
                                  objectFit="contain"
                                />
                            </div>
                            <p>Star+ sin cargo</p>
                        </div>
                        <div className={ styles['options--product'] }>
                            <div className='img-contain' style={{ width: "14rem", height: "14rem"}}>
                                <Image 
                                  src="/assets/home/truckgiftv4@2x.png"
                                  alt='Shipping Free'
                                  layout='fill'
                                  objectFit="contain"
                                />
                            </div>
                            <p>Envíos gratis y rápidos desde $ 5.500 y 45% OFF en envíos de menos de $ 5.500</p>
                        </div>
                    </div>
                    <div className={ styles.subscription__button }>
                        <button className='btn btn--blue'>Suscribite</button>
                    </div>
                </div>
            </section>
          <section className="my-full container">
            <Profit />
          </section>
          <section className='my-full container'>
            <Discover />
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
