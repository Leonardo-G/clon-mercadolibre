import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'

interface Props{
    params?: string[],
    querys?: { search?: string, shipping?: number };
    results: number
}

export const Aside:FC<Props> = ({ params, querys, results }) => {

    const [querySearch, setQuerySearch] = useState({
        search: querys?.search,
        shipping: querys?.shipping
    })

    return (
        <div style={{ flex: 1 }} className="mt-full">
            <h1 className='font-xl capitalize font-grey f-bold mt-3' style={{ width: "80%" }}>{` ${ params ? params.toString().replace(/,/, " ") : querys?.search } `}</h1>
            <p className='font-grey f-weight '>{results} { results === 1 ? "resultado" : "resultados"  }</p>

            <div className='mt-3'>
                <div>
                    <div className='background-wh p-2 flex-row align-center'>
                        <p className='f-bold'>Envío gratis</p>
                        <div 
                            className={`pointer ${ querySearch.shipping === 1 ? "background-blue" : "background-grey-bold" }`}
                            onClick={ () => setQuerySearch( { ...querySearch, shipping: querySearch.shipping !== 1 ? 1 : undefined}) }
                            style={{ padding: "0.2rem 0.3rem", width: "4rem", borderRadius: "16px" }}>
                            <div 
                                className={`active-option-disabled pointer ${ querySearch.shipping === 1 ? "active-option" : "" }`}
                            ></div>
                        </div>
                    </div>
                    <div className='background-wh p-2 flex-row align-center mt-1'>
                        <p>
                            <FontAwesomeIcon 
                                icon={ faBoltLightning } 
                                style={{ color: "#00a650", fontSize: "1.3rem" }}
                            />
                            <span className='title-green-shipping upper italic' style={{ margin: "0 0.3rem", letterSpacing: "0.6px", fontSize: "1.3rem", fontWeight: 700 }}>
                                Full
                            </span>
                            te ahorra envíos
                        </p>
                        <div 
                            className={`pointer ${ querySearch.shipping === 2 ? "background-blue" : "background-grey-bold" }`}
                            onClick={ () => setQuerySearch( { ...querySearch, shipping: querySearch.shipping !== 2 ? 2 : undefined}) }
                            style={{ padding: "0.2rem 0.3rem", width: "4rem", borderRadius: "16px" }}>
                            <div 
                                className={`active-option-disabled pointer ${ querySearch.shipping === 2 ? "active-option" : "" }`}
                            ></div>
                        </div>
                    </div>
                </div>
                <div className='mt-3'>
                    <p className='color-grey-bold' style={{ fontSize: "1.6rem" }}>Categorías</p>                    
                    
                    <ol className='p-none mt-1 font-size-default'>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Herramientas <span className='pl col-grey-w f-weight'>(1.751)</span></li>
                    </ol>
                </div>
                <div>
                    <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Condición</p>
                    <ol className='p-none mt-1 font-size-default'>
                        <li className='subtitle-grey f-normal mt'>Nuevo<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Usado<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                    </ol>
                </div>
                <div>
                    <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Pago</p>
                    <ol className='p-none mt-1 font-size-default'>
                        <li className='subtitle-grey f-normal mt'>Cuotas sin interés<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                    </ol>
                </div>
                <div>
                    <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Precio</p>
                    <ol className='p-none mt-1 font-size-default'>
                        <li className='subtitle-grey f-normal mt'>Hasta $ 3.500<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>$ 3.500 a $ 7.000<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Más de $ 7.000<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                    </ol>
                </div>
                <div>
                    <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Descuentos</p>
                    <ol className='p-none mt-1 font-size-default'>
                        <li className='subtitle-grey f-normal mt'>Desde 5% OFF<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Desde 10% OFF<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Desde 15% OFF<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        <li className='subtitle-grey f-normal mt'>Desde 20% OFF<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                    </ol>
                </div>

            </div>
        </div>
    )
}
