import React, { FC } from 'react'

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: (querysUpdate: IQuerys) => void;
}

export const ByPrice: FC<Props> = ({ newQuery }) => {
    return (
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
    )
}
