import type { NextPage } from 'next'
import Image from 'next/image'
import { LayoutDefault } from '../components/layout/LayoutDefault'
import { ProductList } from '../components/products/ProductList'
import { Carrousel } from '../components/UI/Carrousel'
import { TitleSection } from '../components/UI/TitleSection'

import styles from "../styles/pages/home.module.css";

const Home: NextPage = () => {
  return (
    <LayoutDefault
        description='Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
        title='Mercado Libre Argentina - Envios gratis al día'
    >
        <Carrousel />
        <div className='container'>
          <section className='section'>
              <TitleSection 
                title='Ofertas'
                url
                urlTitle='Ver Ofertas'
              />
              <ProductList />
          </section>
          <section className='section'>
              <div className={ styles.subscription }>
                <div className={ styles.subscription__head }>
                    <h3>Subscribete al nivel 6</h3>
                    <div className={ styles['head--price'] }>
                      <span>$ 499</span>
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
        </div>
    </LayoutDefault>
  )
}

export default Home
