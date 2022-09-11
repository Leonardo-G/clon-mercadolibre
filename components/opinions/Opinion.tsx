import { faThumbsDown, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { IOpinion } from '../../interface/opinion';
import { StartRating } from '../UI/StartRating';

interface Props {
    opinion: IOpinion;
}

export const Opinion:FC<Props> = ({ opinion }) => {

    

    return (
        <div className="my-3" style={{ lineHeight: 1.35 }}>
            <div>
                {
                    [1, 2, 3, 4, 5].map( s => (
                        <StartRating key={ s } idx={ s } star={ s } average={ opinion.rate } width="1.6rem"/>
                    ) )
                }
            </div>
            <p className='mt-1 font-m f-bold'>{ opinion.title }</p>
            <p className='mt-1 font-m'>{ opinion.comment }</p>
            <div className='mt-2'>
                <FontAwesomeIcon 
                    className='font-l pointer'
                    icon={ faThumbsUp }
                />
                <span className='ml-1'>{ opinion.like }</span>
                <FontAwesomeIcon 
                    className='font-l ml-2 pointer'
                    icon={ faThumbsDown }
                />
                <span className='ml-1'>{ opinion.down }</span>
            </div>
        </div>
    )
}
