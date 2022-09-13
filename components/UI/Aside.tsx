import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import React, { FC, useRef, useState } from 'react'
import { IQuerys } from '../../interface/querys';
import { formatPrice } from '../../utils/formatPrice';
import { TagsCard } from './TagsCard';

interface Props{
    params?: string[],
    querys: IQuerys;
    results: number
}

export const Aside:FC<Props> = ({ params, querys, results }) => {

    const [querySearch, setQuerySearch] = useState(querys);
    const router = useRouter();
    
    const handleRemoveQuery = ( query: string ) => {
        if( querys ) delete querys[query as "category"]
        setQuerySearch(querys)

        router.push({
            pathname: "/productos",
            query: {
                ...querys
            }
        })
    }

    const newQuery = ( query: string, value: string, query_2?: string, value_2?: string ) => {
        const q = {
            ...querySearch,
            [query]: value
        }
        if ( query_2 ) q[query_2] = value_2;

        setQuerySearch(q)

        router.push({
            pathname: "/productos",
            query: {
                ...q
            }
        })
    }

    return (
        <div style={{ flex: 1 }} className="mt-full">
            <h1 className='font-xl capitalize font-grey f-bold mt-3' style={{ width: "80%" }}>{` ${ params ? params.toString().replace(/,/, " ") : querys?.search } `}</h1>
            <p className='font-grey f-weight '>{results} { results === 1 ? "resultado" : "resultados"  }</p>

            {
                querys &&
                <div className='flex r-gap c-gap-1 mt-1 wrap'>
                    {
                        Object.entries( querys! ).map( q => {
                            if (querySearch.price_gte && querySearch.price_lte && q[0] === "price_lte" ){
                                return (
                                    <TagsCard query={ "untilPrice" } value={ `${ formatPrice(Number(querySearch.price_gte)) } a ${ formatPrice(Number(querySearch.price_lte)) }` } handleRemoveQuery={ handleRemoveQuery }/>
                                )
                            }
                            if ( querySearch.price_gte && querySearch.price_lte && q[0] === "price_gte" ) return;
                            
                            return (
                                <TagsCard key={ q[0] } query={ q[0] } value={ q[1] } handleRemoveQuery={ handleRemoveQuery }/>
                            )
                        })
                    }
                </div>
            }
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
                {
                    !querySearch?.category &&
                    <div className='mt-3'>
                        <p className='color-grey-bold' style={{ fontSize: "1.6rem" }}>Categorías</p>                    
                        
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "herramientas" ) }
                            >Herramientas <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "construccion" ) }
                            >Construcción <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "deportes-y-fitness" ) }
                            >Deportes y Fitness <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "hogar-y-muebles" ) }
                            >Hogar y Muebles <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "electrodomesticos" ) }
                            >Electrodomésticos <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "category", "ropa-y-accesorios" ) }
                            >Ropa y Accesorios <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                }
                {
                    !querySearch.condition &&
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Condición</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "condition", "nuevo" ) }
                            >Nuevo<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "condition", "usado" ) }
                            >Usado<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                }
                {
                    !querySearch.interest &&
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Pago</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( "interest", "true" ) }
                                >Cuotas sin interés<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        </ol>
                    </div>
                }
                <div>
                    <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Precio</p>
                    <ol className='p-none mt-1 font-size-default'>
                        <li 
                            className='subtitle-grey f-normal mt pointer'
                            onClick={ () => newQuery( "price_lte", "3500" ) }
                        >Hasta $ 3.500<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        <li 
                            className='subtitle-grey f-normal mt pointer'
                            onClick={ () => newQuery( "price_gte", "3500", "price_lte", "7000" ) }
                        >$ 3.500 a $ 7.000<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        <li 
                            className='subtitle-grey f-normal mt pointer'
                            onClick={ () => newQuery( "price_gte", "7000" ) }
                        >Más de $ 7.000<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
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
