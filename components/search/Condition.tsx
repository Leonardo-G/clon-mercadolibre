import React, { FC } from 'react';

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: (querysUpdate: IQuerys) => void;
}

export const Condition: FC<Props> = ({ newQuery }) => {
    
    return (
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
    )
}
