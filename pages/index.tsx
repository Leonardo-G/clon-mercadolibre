import type { NextPage } from 'next'
import { LayoutDefault } from '../components/layout/LayoutDefault'
import { ProductList } from '../components/products/ProductList'
import { Carrousel } from '../components/UI/Carrousel'
import { TitleSection } from '../components/UI/TitleSection'

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
        </div>
    </LayoutDefault>
  )
}

export default Home
