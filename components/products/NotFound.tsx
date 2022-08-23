import { faMagnifyingGlassMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

export const NotFound: FC = () => {
    return (
        <div className='container mt-full'>
            <div className='background-wh radius-default px-full m-full py-full flex-row space-center'>
                <div className='pr-full' style={{ flex: 0.1, fontSize: "6rem" }}>
                    <FontAwesomeIcon icon={ faMagnifyingGlassMinus }/>
                </div>
                <div className='flex-1'>
                    <h1 className='font-xl'>No hay publicaciones que coincidan con tu búsqueda.</h1>
                    <ul className='p-none ml-2 font-m f-weight line-h mt-1'>
                        <li>
                            <b>Revisá la ortografía </b>
                            de la palabra
                        </li>
                        <li>
                            Utilizá
                            <b> palabras más genéricas </b>
                            o menos palabras.
                        </li>
                        <li>
                            Navega por las categorías
                            para encontrar un producto similar
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
