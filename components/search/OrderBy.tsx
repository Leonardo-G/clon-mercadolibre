import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router';

import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { IQuerys } from '../../interface/querys';

interface Props {
    newQuery: ( querysUpdate: IQuerys ) => void;
}

export const OrderBy: FC<Props> = ({ newQuery }) => {

    const [sort, setSort] = useState("relevant")

    const router = useRouter()

    useEffect(() => {
        if ( router.query.sort ) {
            setSort( router.query.sort as string)
            console.log(router.query)
        }
    }, [router.query])

    return (
        <div className='flex-row-center flex-right'>
            <p>Ordenar por</p>
            <select 
                className='pointer p-1' 
                name="option" 
                value={ sort }
                style={{
                    border: "none",
                    background: "transparent",
                    WebkitAppearance: "none",
                    outline: "none"
                }}
                onChange={ (e) => newQuery( e.target.value === "price_asc" 
                            ? { sort: "price_asc" }
                            : { sort: "relevant" }
                        )}
            >
                <option value="relevant">Más relevantes</option>
                <option value="price_asc">Menor precio</option>
            </select>
            <FontAwesomeIcon className='color-blue font-s' icon={ faAngleDown }/>
        </div>
    )
}
