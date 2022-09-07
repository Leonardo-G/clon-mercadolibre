import React, { FC } from 'react'

import { faBoltLightning, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
    code: number,
    detail?: string | null
    shadow?: boolean;
}

export const DeliveryUI: FC<Props> = ({ detail, code, shadow }) => {

    if ( code === 0 ) {
        return <></>
    }

    if ( code === 1 ) {
        return (
            <p className='title-green-shipping mt-1'>{ detail }</p>
        )
    }

    return (
        <div className='flex-row-center'>
            <p 
                className='title-green-shipping radius-default f-normal' 
                style={{background: `${ shadow ? "#00a650": ""}`, color: `${ shadow ? "#fff" : ""}`, padding: `${ shadow ? '0.4rem' : ''}`, width: "fit-content"}}
            >{ detail }
            </p>
            <p>
                <FontAwesomeIcon 
                    icon={ faBoltLightning } 
                    style={{ color: "#00a650", fontSize: "1.3rem", paddingLeft: "0.5rem" }}
                />
                <span className='title-green-shipping upper italic' style={{ marginLeft: "0.2rem", letterSpacing: "0.6px", fontSize: "1.2rem", fontWeight: 700 }}>
                    Full
                </span>
            </p>
        </div>
    )
}
