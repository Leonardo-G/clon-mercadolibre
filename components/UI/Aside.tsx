import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface Props{
    params?: string[],
    querys?: { search: string };
    results: number
}

export const Aside:FC<Props> = ({ params, querys, results }) => {
    return (
        <div style={{ flex: 1 }} className="mt-full">
            <h1 className='font-xl capitalize font-grey f-bold mt-3'>{` ${ params ? params.toString().replace(/,/, " ") : querys?.search } `}</h1>
            <p className='font-grey f-weight '>{results} { results === 1 ? "resultado" : "resultados"  }</p>
        </div>
    )
}
