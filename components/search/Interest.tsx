import React, { FC } from 'react'

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: (querysUpdate: IQuerys) => void;
}

export const Interest: FC<Props> = ({ newQuery }) => {
    return (
        <div>
            <p className='color-grey-bold mt-2' style={{ fontSize: "1.6rem" }}>Pago</p>
            <ol className='p-none mt-1 font-size-default'>
                <li 
                    className='subtitle-grey f-normal mt pointer'
                    onClick={ () => newQuery({ interest: "true" }) }
                    >Cuotas sin interés<span className='pl col-grey-w f-weight'>(1.751)</span></li>
            </ol>
        </div>
    )
}
