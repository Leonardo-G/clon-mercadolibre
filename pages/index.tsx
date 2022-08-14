import type { NextPage } from 'next'
import { LayoutDefault } from '../components/layout/LayoutDefault'
import { Carrousel } from '../components/UI/Carrousel'

const Home: NextPage = () => {
  return (
    <LayoutDefault
        description='Comprá productos con Envío Gratis en el día en Mercado Libre Argentina. Encontrá miles de marcas y productos a precios increíbles.'
        title='Mercado Libre Argentina - Envíos Gratis en el día'
    >
        <Carrousel />
    </LayoutDefault>
  )
}

export default Home
