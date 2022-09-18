import React, { FC } from 'react'

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: (querysUpdate: IQuerys) => void;
}

export const CategorySearch: FC<Props> = ({ newQuery }) => {
    return (
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
    )
}
