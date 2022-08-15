import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC } from 'react'

interface Props {
    code: number,
    detail?: string | null
}

export const DeliveryUI: FC<Props> = ({ detail, code }) => {

    if ( code === 0 ) {
        return <></>
    }

    if ( code === 1 ) {
        return (
            <p className='title-green-shipping'>{ detail }</p>
        )
    }

    return (
        <p className='title-green-shipping'>{ detail }
            <span>
                <FontAwesomeIcon icon={ faTruckFast } 
                    style={{ fontSize: "1.25rem", paddingLeft: "0.5rem" }}
                />
            </span>
        </p>
    )
}
