import React, { FC } from 'react'
import { faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    category: string[];
}

export const CardRecommended: FC<Props> = ({ category }) => {
    return ( 
        <>
            <div className='radius-default my-1' style={{ padding: "0.3rem 0.6rem 0.3rem 0.6rem", background: "#333333", width: "fit-content", color: "#fff", display:"inline-block" }}>
                <FontAwesomeIcon icon={ faHandshakeSimple }/>
                <span style={{ fontSize: "1.2rem", color: "#fff", paddingLeft: "0.5rem" }}>RECOMENDADO</span>
            </div>
            <span className='ml-1 font-s'>en { category[0] }</span>
        </>
    )
}
