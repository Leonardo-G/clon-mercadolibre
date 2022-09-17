import React, { FC } from 'react';
import { faArrowRotateLeft, faAward, faCircleCheck, faHandshakeSimple, faLocationDot, faRotateLeft, faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { DeliveryUI } from '../UI/DeliveryUI';
import { IProduct } from '../../interface/products';
import { formatPrice } from '../../utils/formatPrice';
import { InfoProduct } from './InfoProduct';

interface Props {
    producto: IProduct
}

export const AsideDetailProduct: FC<Props> = ({ producto: { characteristics, priceDetail, condition, title, sold, recommended, shipping, offer, category, stock } }) => {
    console.log(characteristics.length)
    return (
        <div style={{ height: "100%" }}>
                <div className='m-2 p-2' style={{ border: "1px solid rgba(0,0,0,.1)" }}>
                    {
                        characteristics.length === 0 &&
                        <InfoProduct 
                            condition={ condition } 
                            recommended={ recommended } 
                            title={ title } 
                            sold={ sold } 
                            category={ category } 
                            offer={ offer } 
                            priceDetail={ priceDetail } 
                            characteristics={ characteristics }                        
                        />
                    }
                    <div className='mt-3'>
                        <DeliveryUI code={ shipping.code } detail={ shipping.detail }/>
                        <div className='ml-2'>
                            <p className='col-grey-w mt'>Comprando desde ahora</p>
                            <p className='color-blue mt'>Ver más formas de entrega</p>
                        </div>
                    </div>
                    {
                        characteristics.length > 0 ?
                        <>
                            <div className='flex-row flex-left mt-1 gap-none'>
                                <FontAwesomeIcon 
                                    className='color-blue'
                                    style={{ fontSize: "1.5rem" }}
                                    icon={ faLocationDot }
                                />
                                <p className='ml-1 color-blue'>Enviar a Capital Federal 14xx</p>
                            </div>
                            <div className='mt-2 line-h'>
                                <div>
                                    <span>Vendido por </span>
                                    <span className='color-blue upper'>Usuario</span>
                                </div>
                                <p className='line-height'>MercadoLider | 1 venta</p>
                                <p className='color-grey-2 font-s'>Hace Factura A</p>
                            </div>
                        </>
                        :
                        <div className='mt-2'>
                            <div>
                                <FontAwesomeIcon 
                                    icon={ faArrowRotateLeft }
                                    className='title-green-shipping f-normal'
                                />
                                <span className='ml-1 title-green-shipping f-normal'>Devolución gratis</span>
                                <div className='ml-2'>
                                    <p className='col-grey-w mt'>Tenés 30 días desde que lo recibís</p>
                                    <p className='color-blue mt'>Conocer más</p>
                                </div>
                            </div>
                        </div>

                    }
                    
                    {
                        stock > 0 &&
                        <div className='mt-2'>
                            <p className='f-bold' style={{ fontSize: "1.6rem" }}>Stock disponible</p>
                            <div className='mt-2 flex-row flex-left gap-none'>
                                <p style={{fontSize: "1.6rem" }}>Cantidad</p>
                                <input 
                                    className='ml-1 center font-m'
                                    style={{ width: "5rem", border: "none", borderBottom: "1px solid #3483fa" }}
                                    type="number" 
                                    name="quantity"
                                    defaultValue={ 1 }
                                />
                                <p className='ml-1 color-grey-2'>({ stock } disponibles)</p>
                            </div>
                        </div>
                    }
                    <div className='flex-col mt-2'>
                        <button className='btn btn--blue'>Comprar ahora</button>
                        <button className='btn btn-blue-2 mt-1'>Agregar al carrito</button>
                    </div>
                    {
                        (characteristics.length !== 0) &&
                        <div className='mt-2'>
                            <div className='flex gap-1 align-center color-grey-2 f-weight line-h'>
                                <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={ faRotateLeft }/>
                                <div>
                                    <span className='color-blue'>Devolución gratis.</span>
                                    <span>Tenés 30 días desde que lo recibís</span>
                                </div>
                            </div>
                        </div>
                    }
                    <div className='mt-2'>
                        <div className='flex gap-1 align-center color-grey-2 f-weight line-h'>
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={ faCircleCheck }/>
                            <div>
                                <span className='color-blue'>Compra Protegida.</span>
                                <span>, recibí el producto que esperabas o te devolvemos tu dinero.</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='flex gap-1 align-center color-grey-2 f-weight line-h'>
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={ faTrophy }/>
                            <div>
                                <span className='color-blue'>Mercado Puntos</span>
                                <span>, Sumas 50 puntos.</span>
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='flex gap-1 align-center color-grey-2 f-weight line-h'>
                            <FontAwesomeIcon style={{ fontSize: "1.5rem" }} icon={ faAward }/>
                            <p>24 meses de garantía de fábrica.</p>
                        </div>
                    </div>
                </div>
                <div className='m-2 p-2' style={{ border: "1px solid rgba(0,0,0,.1)" }}>
                    <p className='mt-1' style={{ fontSize: "1.8rem" }}>Información sobre el vendedor</p>
                    <div className='color-grey-2 mt-2 flex-row flex-left'>
                        <FontAwesomeIcon style={{ fontSize: "1.7rem" }} icon={ faLocationDot }/>
                        <div>
                            <span className='font-m '>Ubicación</span>
                            <p className='f-weight'>xxxx, Buenos aires</p>
                        </div>
                    </div>
                    <div className='col-green mt-2 flex-row flex-left color-green'>
                        <FontAwesomeIcon style={{ fontSize: "1.7rem" }} icon={ faAward }/>
                        <div>
                            <span className='font-m color-green f-bold'>MercadoLider</span>
                            <p className='f-weight'>xxxx, Buenos aires</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}
