import { NextPage, GetServerSideProps } from 'next';

import { LayoutDefault } from '../../components/layout/LayoutDefault';
import { getProduct } from '../../utils/fetchApi';
import { IProduct } from '../../interface/products';

import { ImgGallery } from '../../components/detailProduct/ImgGallery';
import { CharacteristicsDetail } from '../../components/detailProduct/CharacteristicsDetail';
import { AsideDetailProduct } from '../../components/detailProduct/AsideDetailProduct';
import { Tags } from '../../components/detailProduct/Tags';
import { InfoProduct } from '../../components/detailProduct/InfoProduct';
import { ProductsRecommended } from '../../components/detailProduct/ProductsRecommended';

import { Opinions } from '../../components/opinions/OpinionsContainer';
import { Ad } from '../../components/UI/Ad';
import { QuestionContainer } from '../../components/questions/QuestionContainer';
import { useContext, useEffect } from 'react';
import { HistoryContext } from '../../context/History/HistoryContext';

interface Props {
    producto: IProduct;
}

const DetailProductPage: NextPage<Props> = ({ producto }) => {

    const { _id, title, imgProduct, condition, sold, recommended, category, priceDetail, offer, characteristics, characteristicsDetail, description, shipping, stock, tags, subCategory, interests } = producto
    const { addProductHistory } = useContext( HistoryContext )
    
    useEffect(() => {
        addProductHistory( _id, title, imgProduct[0] )
    }, [])

    return (
        <LayoutDefault 
            title={ title } 
            description={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${ title }`}
        >
            <Tags tags={ tags }/>
            <div className='container mt-2 background-wh radius-default'>
                <div className='flex-row'>
                    <div style={{ flex: 1 }}>

                        <div className='flex-row' style={{ flex: 1, minHeight: "70rem" }}>
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
                                    characteristics={ characteristics }                                
                                    interests={ interests }
                                />
                            }
                        </div>
                        <div className='my-3 ml-3 br mt-full'></div>
                        <ProductsRecommended category={ category[0] } id={ _id }/>
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
                            <section>
                               <QuestionContainer id={ _id }/>
                            </section>

                            <Opinions idProduct={ _id }/>

                        </div>
                    </div>
                    <div 
                        style={{ 
                            flex: characteristics.length > 0 ? 0.4 : 0.5
                        }}
                        className="pb-2"
                    >
                        <AsideDetailProduct producto={ producto }/>
                        
                    </div>
                </div>
            </div>
            <Ad />
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