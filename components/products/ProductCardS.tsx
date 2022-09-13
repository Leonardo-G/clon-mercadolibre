import React, { FC } from 'react'
import Image from 'next/image'

import { IProduct } from '../../interface/products'

import styles from "../../styles/components/products/ProductCardS.module.css";
import { formatPrice, discountPercentage } from '../../utils/formatPrice';
import { DeliveryUI } from '../UI/DeliveryUI';
import Link from 'next/link';

interface Props {
    product: IProduct;
    widthItem?: string; // en REM
}

export const ProductCardS: FC<Props> = ({ widthItem, product: { _id, offer, title, priceDetail, imgProduct, shipping, interests } }) => {
    return (
        <Link href={{pathname: `/producto/${ title.toLowerCase().replace(/(\s{1,})|\//g, "-") }/${ _id }`}}>
            <a className={ styles['product-card-s'] } style={{ width: `${widthItem ? widthItem : "100%"}` }}>
                <div className={ styles.img__contain }>
                    <Image 
                        src={ imgProduct[0] }
                        alt={ title }
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div className={ styles.product }>

                    {
                        offer &&
                        
                        <p className={ styles['product-description__offerPrice'] }>{ formatPrice(priceDetail.price!) }</p>
                    }
                    <div className={ styles['product-description'] }>
                        {
                            offer ?
                                <>
                                    <p className={ styles['product-description__price'] }>
                                        { formatPrice(priceDetail.offerPrice!) }
                                            <span
                                                style={{ paddingLeft: "1rem", verticalAlign: "0.35rem" }} 
                                                className='font-green-main'>{ discountPercentage( priceDetail.price, priceDetail.offerPrice! ) }% OFF
                                            </span>
                                    </p>
                                </>
                            
                            : <p className={ styles['product-description__price'] }>{ formatPrice( priceDetail.price ) }</p>

                        }       

                        {
                            interests.accept &&
                            <p className='font-green-main'>{ interests.until }x { formatPrice( priceDetail.price / interests.until! ) } sin interés </p> 
                        }
                        <div className='mt'>
                            <DeliveryUI 
                                code={ shipping.code }
                                detail={ shipping.detail }
                            />
                        </div>
                        <p className={ styles['product-description__title'] }>{ title }</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
