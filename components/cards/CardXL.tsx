import React, { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { faHandshakeSimple, faHeart as faHearSolid } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IProduct } from '../../interface/products'

import { discountPercentage, formatPrice } from '../../utils/formatPrice';
import { DeliveryUI } from '../UI/DeliveryUI';

interface Props {
    item: IProduct
}

export const CardXL: FC<Props> = ({ item: { _id, imgProduct, title, priceDetail, offer, shipping, recommended, interests, condition }}) => {
 
    const [isFavorite, setIsFavorite] = useState(false);

    const handleClickFavorite = () => {
        setIsFavorite( !isFavorite )
    }

    return (
        <div className='flex py-2 background-wh pr-full border-bt-grey-w relative hover-card-xl'>
            <Link href={{pathname: `/producto/${ title.replace(/(\s{1,})|\//g, "-") }/${ _id }`}} passHref>
                <a className='px-2' style={{ height: "16rem", width: "20rem" }}>
                    <div 
                        className='relative' 
                        style={{ height: "100%", width: "100%" }}
                    >
                        <Image 
                            layout='fill'
                            src={ imgProduct[0] }
                            alt={ title }
                            objectFit="contain"
                        />
                    </div>
                </a>
            </Link>
            <Link href={{pathname: `/producto/${ title.replace(/(\s{1,})|\//g, "-") }/${ _id }`}} passHref>
                <a className="f-auto">
                    {
                        recommended &&

                        <div className='radius-default mb-1' style={{ padding: "0.3rem 0.6rem 0.3rem 0.6rem", background: "#333333", width: "fit-content", color: "#fff" }}>
                            <FontAwesomeIcon icon={ faHandshakeSimple }/>
                            <span style={{ fontSize: "1.2rem", color: "#fff", paddingLeft: "0.5rem" }}>RECOMENDADO</span>
                        </div>
                    }
                    <h2 className='font-l font-grey f-weight capitalize mb-1'>{ title }</h2>
                    <div>
                        <div>
                            {
                                offer && priceDetail.price > priceDetail.offerPrice! &&

                                <p className='mt-1 font-s col-grey-w dash'>{ formatPrice(priceDetail.price!) }</p>
                            }
                            <p 
                                className='font-xl'
                            >
                                { 
                                    offer 
                                    ? formatPrice(priceDetail.offerPrice!) 
                                    : formatPrice(priceDetail.price) 
                                }
                                
                                {
                                    offer && priceDetail.price > priceDetail.offerPrice! &&
                                    <span
                                        style={{ verticalAlign: "0.35rem" }} 
                                        className='font-green-main pl-1'
                                    >{ discountPercentage( priceDetail.price, priceDetail.offerPrice! ) }% OFF </span>
                                }
                                
                            </p>
                        </div>
                        {
                            interests.accept &&
                            <p className='color-green font-xs mt'>Hasta { interests.until } sin interés</p>
                        }
                        <div className='mt-2'>
                            <DeliveryUI 
                                code={ shipping.code }
                                detail={ shipping.detail }
                                shadow
                            />
                        </div>
                        {
                            condition === "reacondicionado" &&
                            <p className='color-grey-3 mt-1'>Reacondicionado</p>
                        }
                    </div>
                </a>
            </Link>
            <div 
                onClick={ handleClickFavorite }
                className={`absolute pointer ${ isFavorite ? "pos-favorite-on" : "pos-favorite" }`} 
                style={{
                    top: "2rem",
                    right: "2rem",
                    fontSize: "2rem",
                    color: "#3483fa",
            }}>
                <FontAwesomeIcon icon={ !isFavorite ? faHeart : faHearSolid }/>
            </div>
        </div>
    )
}