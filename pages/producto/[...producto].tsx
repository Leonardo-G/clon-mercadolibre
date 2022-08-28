import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage, GetServerSideProps } from 'next';
import Image from 'next/image';
import { LayoutDefault } from '../../components/layout/LayoutDefault';

import { IProduct } from '../../interface/products';
import { getProduct } from '../../utils/fetchApi';
import { formatPrice } from '../../utils/formatPrice';

interface Props {
    producto: IProduct
}

const DetailProductPage: NextPage<Props> = ({ producto: { title, imgProduct, condition, sold, recommended, category, priceDetail, offer, characteristics, characteristicsDetail } }) => {
    return (
        <LayoutDefault 
            title={ title } 
            description={`Envíos gratis en el día ✓ Comprá online de manera segura con Compra Protegida © ${ title }`}
        >
            <div className='container mt-2'>
                <p className='txt-left'style={{ height: "2rem", whiteSpace: "pre", overflow: "hidden", width: "90rem" }}>
                    <span style={{ fontWeight: 500, color: "#000" }}>También puede interesarte:</span>
                    <span> amoladora - moladora - amoladora inalámbrica - amoladora de 7 pulgadas - amoladora precio - amoladora recta</span>
                </p>
                <div className='mt-2 flex-row flex-left gap-1'>
                    <p>Volver al listado</p>
                    <span className='col-grey-w'>|</span>
                    <span className='color-blue f-weigth'>Herramientas</span>
                    <span className='col-grey-w'>|</span>
                    <span className='color-blue f-weigth'>Herramientas Eléctricas</span>  
                    <span className='col-grey-w'>|</span>
                    <span className='color-blue f-weigth'>Corte</span>
                    <span className='col-grey-w'>|</span>
                    <span className='color-blue f-weigth'>Amoladoras</span>
                </div>
            </div>
            <div className='container mt-2 background-wh radius-default'>
                <div className='flex-row'>
                    <div style={{ flex: 1 }}>

                        <div className='flex-row' style={{ flex: 1 }}>
                            <div className='mt-2 ml-2'>
                                {
                                    imgProduct.map( (img, idx) => (
                                        <div className="mb-1" key={ idx } 
                                            style={{ 
                                                padding: "0.2rem",
                                                borderRadius: "0.6rem",
                                                border: "1px solid rgba(0,0,0,.25)", 
                                            }}
                                        >
                                            <div
                                                style={{ 
                                                    position: "relative", 
                                                    width: "4.4rem", 
                                                    height: "4.4rem",
                                                }}>
                                                <Image 
                                                    src={ img }
                                                    alt={ title }
                                                    objectFit="contain"
                                                    layout='fill'
                                                />
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='mt-full'>
                                <div style={{ position: "relative", height: "48rem", width: "38rem", padding: "1.6rem" }}>
                                    <Image 
                                        alt={ title }
                                        src={ imgProduct[0] }
                                        layout="fill"
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                            <div style={{ flex: 1 }} className="mt-3">
                                <p className='col-grey-w capitalize f-weight'> { condition } | { sold } vendidos</p>
                                <h1 className='font-xl f-bold mt-1 capitalize'>{ title }</h1>
                                {
                                    recommended &&
                                    <>
                                        <div className='radius-default my-1' style={{ padding: "0.3rem 0.6rem 0.3rem 0.6rem", background: "#333333", width: "fit-content", color: "#fff", display:"inline-block" }}>
                                            <FontAwesomeIcon icon={ faHandshakeSimple }/>
                                            <span style={{ fontSize: "1.2rem", color: "#fff", paddingLeft: "0.5rem" }}>RECOMENDADO</span>
                                        </div>
                                        <span className='ml-1 font-s'>en { category[0].title }</span>
                                    </>
                                }

                                <div>
                                    {
                                        offer && priceDetail.price > priceDetail.offerPrice! &&
                                        <>
                                            <p className='mt font-s col-grey-w dash'>{ formatPrice(priceDetail.price!) }</p>
                                            <p 
                                                className='f-weight'
                                                style={{ fontSize: "3.6rem" }}
                                            >{ formatPrice( priceDetail.offerPrice! ) }
                                            </p>
                                        </>
                                    }
                                    <span className='color-blue pointer'>Ver los medios de pago</span>
                                </div>
                                <div className='mt-3'>
                                    <p className='f-bold-black'>Lo que tenés que saber de este producto</p>
                                    <ul 
                                        className='mt-2'
                                        style={{ padding: 0, marginLeft: "1.6rem", listStyle: "disc" }}
                                    >
                                        {
                                            characteristics?.map(( c, idx ) => (
                                                <li key={ idx } className="mt-1 font-xs">{ c }</li>
                                            ) )
                                        }
                                    </ul>

                                    <p className='color-blue mt-2 block'>Ver características</p>
                                </div>
                            </div>
                        </div>
                        <div className='my-3 ml-3 br mt-full'></div>
                        <div className='pl-3'>
                            <p className='font-xxl mb-2'>Características</p>
                            <div className='flex-row' style={{ rowGap: "4rem", columnGap: "4rem", flexWrap: "wrap" }}>
                                {
                                    characteristicsDetail?.map(( cd, idx ) => (
                                        <div key={ idx } className="my-2 f-auto">
                                            <p className='font-m f-bold mb-2'>{ cd.code }</p>
                                            <div className='radius-default' style={{ border: "1px solid #ededed"}}>
                                                {
                                                    cd.info.map((c, id) => {
                                                        if( id % 2 === 0 ){
                                                            return (
                                                                <div className='flex-row p-2 flex-left' key={ id } style={{ background: "rgba(0,0,0,.08)" }}>
                                                                    <p className='font-s f-auto f-bold'>{ c.title }</p>       
                                                                    <p className='font-s f-auto f-bold'>{ c.description }</p>       
                                                                </div>
                                                            )
                                                        }

                                                        return (
                                                            <div className='flex-row p-2 flex-left' key={ id }>
                                                                <p className="font-s f-auto f-bold">{ c.title }</p>       
                                                                <p className="font-s f-auto f-bold">{ c.description }</p>       
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    ) )
                                }
                            </div>
                        </div>
                    </div>
                    <div 
                        style={{ flex: 0.4 }}
                    >
                    </div>
                </div>
            </div>
        </LayoutDefault>
    )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    //En la url vamos a tener el titulo del producto y luego su ID, para 
    const { producto: [ title, _id ] } = params as { producto: string[] } 

    const producto = getProduct( _id )
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