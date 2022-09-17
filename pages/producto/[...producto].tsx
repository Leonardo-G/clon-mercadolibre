
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
import { useEffect, useState } from 'react';
import { IQuestion } from '../../interface/question';
import { fetchApi } from '../../axios/config';
import { Modal } from '../../components/detailProduct/Modal';

interface Props {
    producto: IProduct;
}

const DetailProductPage: NextPage<Props> = ({ producto }) => {

    const { _id, title, imgProduct, condition, sold, recommended, category, priceDetail, offer, characteristics, characteristicsDetail, description, shipping, stock, tags, subCategory } = producto
    const [questions, setQuestions] = useState([] as IQuestion[]);
    const [openModalQuestion, setOpenModalQuestion] = useState(false);

    const getApi = async () => {
        const response = await fetchApi.get(`/questions/${ _id }/get`);
        const results = await response.data;
        
        setQuestions( results );
    }

    useEffect(() => {
        getApi()
            .catch( err => console.log(err))
    }, [])

    const handleShowModalQuestion = () => {
        setOpenModalQuestion( !openModalQuestion )
    }

    return (
        <LayoutDefault 
            title={ title } 
            description={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${ title }`}
        >
            <Tags tags={ tags }/>
            <div className='container mt-2 background-wh radius-default'>
                <div className='flex-row'>
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
                            <section>
                                
                                
                                <h2 className='font-xxl mt-3 f-normal'>Preguntas y respuestas</h2>
                                <p className='mt-full font-l f-bold'>Qué querés saber?</p>
                                <div className='mt-3'>
                                    <span className='pointer radius-default color-blue p-1 f-bold' style={{ background: "rgba(65,137,230,.15)" }}>Costo y tiempo de envío</span>
                                    <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Devoluciones gratis</span>
                                    <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Medios de pago y promociones</span>
                                    <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Garantía</span>
                                </div>
                                <h3 className='mt-full f-bold font-l'>Preguntale al vendedor</h3>
                                <div className='mt-2 flex c-gap-2'>
                                    <input 
                                        type="text" 
                                        name="question" 
                                        placeholder='Escribí tu pregunta'
                                        style={{
                                            height: "4.8rem",
                                            fontSize: "1.6rem",
                                            paddingLeft: "1rem",
                                            borderRadius: "6px",
                                            flex: 1,
                                            outline: "none",
                                            border: "none",
                                            boxShadow: "0 0 0 1px rgb(0 0 0 / 25%)"
                                        }}
                                    />
                                    <button 
                                        className='btn btn--blue'
                                        style={{ flex: 0.2 }}    
                                    >Preguntar</button>
                                </div>
                                {
                                    questions.length === 0 ?
                                    <p className='mt-3'>Nadie hizo preguntas todavía. Hacé la primera!</p>

                                    : 
                                        <>
                                            <Questions questions={ questions.filter((q, idx) => idx >= 0 && idx <= 6 ) }/>
                                            <p 
                                                className='mt-3 color-blue pointer'
                                                onClick={ handleShowModalQuestion }    
                                            >Ver todas las preguntas</p>
                                        </>
                                }

                                <div className='br my-full'></div>
                                
                                {
                                    openModalQuestion &&

                                    <Modal 
                                        array={ questions.reverse() as IQuestion[] }
                                        type="questions"
                                        handleShowModal={ handleShowModalQuestion }
                                    />
                                }
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