import React, { FC } from 'react'

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: (querysUpdate: IQuerys) => void;
}

export const Offer: FC<Props> = ({ newQuery }) => {
    return (
        <div>
            <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Descuentos</p>
            <ol className='p-none mt-1 font-size-default'>
                <li 
                    className='subtitle-grey f-normal mt pointer'
                    onClick={ () => newQuery( { offer: "true" } ) }
                >Con ofertas disponibles<span className='pl col-grey-w f-weight'>(xxxx)</span></li>
            </ol>
        </div>
    )
}
