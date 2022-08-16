import React, { FC } from 'react'
import Image from 'next/image'

import { IProduct } from '../../interface/products'

import styles from "../../styles/components/products/ProductCardS.module.css";
import { formatPrice, discountPercentage } from '../../utils/formatPrice';
import { DeliveryUI } from '../UI/DeliveryUI';

interface Props {
    product: IProduct
}

export const ProductCardS: FC<Props> = ({ product: { title, priceDetail, imgProduct, shipping, interests } }) => {
    return (
        <div className={ styles['product-card-s'] }>
            <a 
                href=""
            >
                <div className={ styles.img__contain }>
                    <Image 
                        src={ imgProduct[0] }
                        alt={ title }
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={ styles['product-description'] }>

                    <p className={ styles['product-description__price'] }>
                        { formatPrice(priceDetail.price) }
                            {
                                priceDetail.price > priceDetail.offerPrice! &&
                                <span
                                    style={{ paddingLeft: "1rem", verticalAlign: "0.35rem" }} 
                                    className='font-green-main'>{ discountPercentage( priceDetail.price, priceDetail.offerPrice! ) }% OFF
                                </span>
                            }       
                    </p>

                    {
                        interests.accept &&
                        <p className='font-green-main'>{ interests.until }x { formatPrice( priceDetail.price / interests.until! ) } sin interés </p> 
                    }
                    
                    <DeliveryUI 
                        code={ shipping.code }
                        detail={ shipping.detail }
                    />

                    <p className={ styles['product-description__title'] }>{ title }</p>
                </div>
            </a>
        </div>
    )
}
