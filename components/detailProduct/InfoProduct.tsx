import React, { FC } from 'react'
import { InterfaceInterests, IPriceDetail } from '../../interface/products';
import { discountPercentage, formatPrice } from '../../utils/formatPrice';
import { CardRecommended } from '../UI/CardRecommended'
import { Characteristics } from './Characteristics';

interface Props {
    condition: string;
    recommended: boolean;
    title: string;
    sold: number;
    category: string[];
    offer: boolean;
    priceDetail: IPriceDetail;
    characteristics: string[];
    interests: InterfaceInterests
}

export const InfoProduct: FC<Props> = ({ interests, condition, recommended, category,characteristics, offer, priceDetail, sold, title }) => {
    return (
        <div style={{ flex: 1 }} className="mt-3">
            <p className='col-grey-w capitalize f-weight'> { condition } | { sold } vendidos</p>
            <h1 className='font-xl f-bold mt-1 capitalize'>{ title }</h1>
            {
                recommended &&
                <CardRecommended category={ category }/>
            }
            <div>
                {
                    offer && priceDetail.price > priceDetail.offerPrice! ?
                    <>
                        <p className='mt font-s col-grey-w dash'>{ formatPrice(priceDetail.price!) }</p>
                        <div>
                            <span
                                className='f-weight'
                                style={{ fontSize: "3.6rem" }}
                            >{ formatPrice( priceDetail.offerPrice! ) }
                            </span>
                            <span
                                style={{ paddingLeft: "1rem", verticalAlign: "0.35rem" }} 
                                className='font-green-main font-xm'    
                            >{ discountPercentage( priceDetail.price, priceDetail.offerPrice! ) }% OFF</span>
                        </div>
                    </>
                    :
                    <>
                        <p 
                            className='f-weight mt-2'
                            style={{ fontSize: "3.6rem" }}
                        >{ formatPrice( priceDetail.price ) }
                        </p>
                    </>
                }
                {
                    interests &&
                    interests.accept &&
                    <div>
                        <span>en </span>
                        <span className='font-xm color-green'>{ interests.until }x { offer ? formatPrice( priceDetail.offerPrice! / interests.until ) : formatPrice( priceDetail.price / interests.until )  } sin interés</span>
                    </div>
                }
                {
                    interests &&
                    interests.accept &&
                    <div className='mt'>
                        <span className='color-green f-bold'>Duplica puntos:</span>
                        <span> sumás 50 Mercado Puntos</span>
                    </div>
                }
                <div className='mt'>
                    <span className='color-blue pointer'>Ver los medios de pago</span>
                </div>
            </div>
            {
                characteristics.length > 0 && 
                <Characteristics characteristics={ characteristics }/>
            }
        </div>
    )
}
