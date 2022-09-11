
import { NextPage, GetServerSideProps } from 'next';
import { LayoutDefault } from '../../components/layout/LayoutDefault';

import { IProduct } from '../../interface/products';
import { getAllObjs, getProduct } from '../../utils/fetchApi';
import { ImgGallery } from '../../components/detailProduct/ImgGallery';
import { CharacteristicsDetail } from '../../components/detailProduct/CharacteristicsDetail';
import { AsideDetailProduct } from '../../components/detailProduct/AsideDetailProduct';
import { Tags } from '../../components/detailProduct/Tags';
import { InfoProduct } from '../../components/detailProduct/InfoProduct';
import { ProductsRecommended } from '../../components/detailProduct/ProductsRecommended';
import { Questions } from '../../components/detailProduct/Questions';
import { Opinions } from '../../components/opinions/OpinionsContainer';
import { ImageFull } from '../../components/imageCard/ImageFull';
import Link from 'next/link';

interface Props {
    producto: IProduct;
}

const DetailProductPage: NextPage<Props> = ({ producto }) => {

    const { _id, title, imgProduct, condition, sold, recommended, category, priceDetail, offer, characteristics, characteristicsDetail, description, shipping, stock, tags, subCategory } = producto
    
    return (
        <LayoutDefault 
            title={ title } 
            description={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${ title }`}
        >
            <Tags tags={ tags }/>
            <div className='container mt-2 background-wh radius-default'>
                <div className='flex-row relative'>
                    <div style={{ flex: 1 }}>

                        <div className='flex-row' style={{ flex: 1 }}>
                            <ImgGallery images={ imgProduct } title={ title }/>
                            {
                                characteristics?.length > 0 &&
                                
                                <InfoProduct 
                                    condition={condition}
                                    recommended={recommended} 
                                    title={ title } 
                                    sold={ sold } 
                                    category={ category } 
                                    offer={ offer } 
                                    priceDetail={ priceDetail } 
                                    characteristics={ characteristics }                                />
                            }
                        </div>
                        <div className='my-3 ml-3 br mt-full'></div>
                        <ProductsRecommended subCategory={ subCategory[0] }/>
                        <div className='pl-3 py-2'>
                            <CharacteristicsDetail characteristicsDetail={ characteristicsDetail }/>
                            <div className='br mt-full'></div>
                            <section>
                                <h2 className='font-xxl mt-3 f-normal'>Descripción</h2>
                                <div>
                                    <p className='mt-3 color-grey-3' style={{ whiteSpace: "pre-wrap", fontSize: "2rem", lineHeight: 1.45 }}>{ description }</p>
                                </div>
                            </section>
                            <div className='br mt-full'></div>

                            <Questions idProduct={ _id }/>

                            <Opinions idProduct={ _id }/>

                        </div>
                    </div>
                    <div 
                        style={{ 
                            flex: characteristics.length > 0 ? 0.4 : 0.5,
                            position: "sticky",
                            top: 0
                        }}
                        className="pb-2"
                    >
                        <AsideDetailProduct producto={ producto }/>
                        
                    </div>
                </div>
            </div>
            <div className='container my-3 flex' style={{ height: "25rem" }}>
                <div className='f-auto'>
                    <ImageFull 
                        src='https://http2.mlstatic.com/D_NQ_844168-MLA51443063649_092022-OO.jpg'
                        height='25rem'
                        objectFit='cover'
                    />
                </div>
                <div 
                    className='flex-col flex-center pl-3'
                    style={{
                        width: "100%",
                        height: "100%",
                        flex: .6,
                        color: "#ffffff",
                        background: "#8533af"
                    }}
                >
                    <p 
                        className='mb font-s upper color-wh'
                        style={{
                            letterSpacing: "4px"
                        }}    
                    >sólo por hoy</p>
                    <p 
                        className='mb-2 color-wh upper f-bold'
                        style={{ fontSize: "2.8rem", width: "60%" }}    
                    >ofertas y hasta 12x sin interés</p>
                    <Link href="/" passHref>
                        <a className='font-l color-wh'> Ver más </a>
                    </Link>
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    //En la url vamos a tener el titulo del producto y luego su ID, para 
    const { producto: [ title, _id ] } = params as { producto: string[] }

    const producto = await getProduct( _id );

    if ( !producto ) {
        return {
            redirect: {
                destination: "/",
                permanent: false
            }
        }
    }

    return {
        props: {
            producto: JSON.parse( JSON.stringify( producto ) )
        }
    }
}

export default DetailProductPage