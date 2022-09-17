import React, { FC } from 'react'
import { IPriceDetail } from '../../interface/products';
import { formatPrice } from '../../utils/formatPrice';
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
}

export const InfoProduct: FC<Props> = ({ condition, recommended, category,characteristics, offer, priceDetail, sold, title }) => {
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
                        <p 
                            className='f-weight'
                            style={{ fontSize: "3.6rem" }}
                        >{ formatPrice( priceDetail.offerPrice! ) }
                        </p>
                    </>
                    :
                    <>
                        <p 
                            className='f-weight'
                            style={{ fontSize: "3.6rem" }}
                        >{ formatPrice( priceDetail.price ) }
                        </p>
                    </>
                }
                <span className='color-blue pointer'>Ver los medios de pago</span>
            </div>
            {
                characteristics.length > 0 && 
                <Characteristics characteristics={ characteristics }/>
            }
        </div>
    )
}
