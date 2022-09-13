import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { formatPrice } from '../../utils/formatPrice';

interface Props {
    query: string;
    value: string | number;
    handleRemoveQuery: ( query: string ) => void;
}

export const TagsCard: FC<Props> = ({ query, value, handleRemoveQuery }) => {

    if ( query === "search" ) {
        return <></>
    }
    
    return (
        <div className='background-wh p radius-default flex align-center'>
            <p className='capitalize'>
                { 
                    query === "price_lte" 
                    ? `Hasta ${ value }`
                    
                    : query === "price_gte"
                    ? `Desde ${ value }`

                    : query === "untilPrice"
                    ? value

                    : value
                }
            </p>
            <FontAwesomeIcon 
                icon={ faClose }
                className="ml-1 pointer"
                onClick={ () => handleRemoveQuery( query ) }
            />
        </div>
    )
}
