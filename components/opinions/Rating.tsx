import React, { FC } from 'react'
import { ContainerLineProgress } from '../lineProgress/ContainerLineProgress'
import { StartRating } from '../UI/StartRating';

interface Props {
    totalOpinions: number;
    average: number;
    rating: {
        rate_1: number
    }
}

export const Rating: FC<Props> = ({ totalOpinions, average, rating }) => {
    return (
        <>
            {
                totalOpinions &&
                <>
                    <div style={{ flex: 0.5 }}>
                        <p className='center' style={{ fontSize: "6.4rem" }}>{ average }</p>  
                        {
                            [1,2,3,4,5].map( star => (
                                <StartRating key={ star } star={ star } average={ average }/>
                            ))
                        }
                        <p className='mt-2'>Promedio entre { totalOpinions } opiniones</p>
                    </div>
                    <div className='f-auto'>
                        <ContainerLineProgress 
                            ratingArray={ Object.values( rating ).reverse() } 
                            total={  totalOpinions }
                        />
                    </div>
                </>
            }
        </>
    )
}
