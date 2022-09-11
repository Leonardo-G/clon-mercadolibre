import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import React, { FC } from 'react';

interface Props {
    star: number;
    average?: number;
    width?: string // UNINDAD EN REM
    idx?: number
}

export const StartRating: FC<Props> = ({ star, average, width, idx }) => {

    if( average ){
        if ( star > average && star <= Number(average.toPrecision(1)) ) return (
            <FontAwesomeIcon 
                className='color-blue font-xl ml-1'
                key={ star }
                icon={ faStarHalfStroke }
                style={{
                    fontSize: width ? width : ""
                }}
            />
        )
    }

    if ( average ) {
        if ( star > average ){
            return (
                <FontAwesomeIcon 
                    className='color-blue font-xl ml-1'
                    icon={ faStarRegular }
                    style={{
                        fontSize: width ? width : ""
                    }}
                />
            )
        }
    }


    return (
        <>
            <FontAwesomeIcon
                className={`color-blue font-xl ${ idx === 1 ? "" : "ml-1" }`}
                icon={ faStar }
                style={{
                    fontSize: width ? width : ""
                }}
            />
        </>
   )
}
