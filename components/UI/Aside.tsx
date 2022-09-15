import React, { FC, SetStateAction, useEffect, useRef } from 'react'
import { faBoltLightning } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router';
import { IQuerys } from '../../interface/querys';
import { formatPrice } from '../../utils/formatPrice';
import { TagsCard } from './TagsCard';

interface Props{
    params?: string[],
    querys: IQuerys;
    results: number;
    querySearch: IQuerys;
    setQuerySearch: React.Dispatch<SetStateAction<IQuerys>>
    newQuery: (querysUpdate: IQuerys) => void;
}

export const Aside:FC<Props> = ({ params, querys, results, querySearch, setQuerySearch, newQuery }) => {

    const router = useRouter();
    const isa = useRef( false );

    const handleRemoveQuery = ( query: string ) => {
        if ( query !== "untilPrice" ){
            delete querys[query as "category"]
        } else {
            delete querys["price_lte" as "shipping"]
            delete querys["price_gte" as "shipping"]
        }
        console.log(isa) 
        setQuerySearch( {
            ...querys,
        } )
    }

    useEffect(() => {
        console.log("ejecutando")
        if( isa.current === true ) {
            
            router.push({
                pathname: "/productos",
                query: {
                    ...querySearch
                }
            })
        } else {
            isa.current = true
        }
        
    }, [querySearch])

    return (
        <div style={{ flex: 1 }} className="mt-full">
            <h1 
                className='font-xl capitalize font-grey f-bold mt-3' 
                style={{ width: "80%" }}
            >{` ${ 
                    params 
                    ? params.toString().replace(/,/, " ") 
                    
                    : querys.search 
                    ? querys.search
                    
                    : querys.category || querys.subcategory
                    ? querys.category || querys.subcategory : "Productos"} `}</h1>
                
            <p className='font-grey f-weight '>{results} { results === 1 ? "resultado" : "resultados"  }</p>

            {
                querys &&
                <div className='flex r-gap c-gap-1 mt-1 wrap'>
                    {
                        Object.entries( querys! ).map( q => {
                            if (querys.price_gte && querys.price_lte && q[0] === "price_lte" ){
                                return (
                                    <TagsCard query={ "untilPrice" } value={ `${ formatPrice(Number(querys.price_gte)) } a ${ formatPrice(Number(querys.price_lte)) }` } handleRemoveQuery={ handleRemoveQuery }/>
                                )
                            }
                            if ( querys.price_gte && querys.price_lte && q[0] === "price_gte" ) return;
                            
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
                            className={`pointer ${ querys.shipping === "1" ? "background-blue" : "background-grey-bold" }`}
                            onClick={ () => newQuery( { shipping: querys.shipping !== "1" ? "1" : undefined } ) }
                            style={{ padding: "0.2rem 0.3rem", width: "4rem", borderRadius: "16px" }}>
                            <div 
                                className={`active-option-disabled pointer ${ querys.shipping === "1" ? "active-option" : "" }`}
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
                            className={`pointer ${ querys.shipping === "2" ? "background-blue" : "background-grey-bold" }`}
                            onClick={ () => setQuerySearch( { ...querys, shipping: querys.shipping !== "2" ? "2" : undefined}) }
                            style={{ padding: "0.2rem 0.3rem", width: "4rem", borderRadius: "16px" }}>
                            <div 
                                className={`active-option-disabled pointer ${ querys.shipping === "2" ? "active-option" : "" }`}
                            ></div>
                        </div>
                    </div>
                </div>
                {
                    !querys?.category &&
                    <div className='mt-3'>
                        <p className='color-grey-bold' style={{ fontSize: "1.6rem" }}>Categorías</p>                    
                        
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "herramientas" } ) }
                            >Herramientas <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "construccion" } ) }
                            >Construcción <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "deportes-y-fitness" } )} 
                            >Deportes y Fitness <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "hogar-y-muebles" } ) }
                            >Hogar y Muebles <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "electrodomesticos" } ) }
                            >Electrodomésticos <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { category: "ropa-y-accesorios" } ) }
                            >Ropa y Accesorios <span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                }
                {
                    !querys.condition &&
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Condición</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { condition: "nuevo" } ) }
                            >Nuevo<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery({ condition: "usado" }) }
                            >Usado<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery({ category: "reacondicionado" }) }
                            >Reacondicionado<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                }
                {
                    !querys.interest &&
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Pago</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery({ interest: "true" }) }
                                >Cuotas sin interés<span className='pl col-grey-w f-weight'>(1.751)</span></li>
                        </ol>
                    </div>
                }
                {
                    !querys.price_gte || !querys.price_lte ?
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Precio</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery({ price_lte: "3500" }) }
                            >Hasta $ 3.500<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { price_gte: "3500", price_lte: "7000" } ) }
                            >$ 3.500 a $ 7.000<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { price_gte: "7000" } ) }
                            >Más de $ 7.000<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                    : ""
                }
                {
                    !querys.offer &&
                    <div>
                        <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Descuentos</p>
                        <ol className='p-none mt-1 font-size-default'>
                            <li 
                                className='subtitle-grey f-normal mt pointer'
                                onClick={ () => newQuery( { offer: "true" } ) }
                            >Con ofertas disponibles<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
                        </ol>
                    </div>
                }

            </div>
        </div>
    )
}
