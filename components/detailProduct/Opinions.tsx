import React, { FC, useEffect, useState } from 'react';

import { fetchApi } from '../../axios/config'
import { IOpinion } from '../../interface/opinion';
import { ContainerLineProgress } from '../lineProgress/ContainerLineProgress';
import { StartRating } from '../UI/StartRating';

interface IOpinionsDB {
    opinions: IOpinion[];
    totalOpinions: number;
    rating: {
        rate_1: number;
        rate_2: number;
        rate_3: number;
        rate_4: number;
        rate_5: number;
    }
}

interface Props {
    idProduct: string;
}

export const Opinions: FC<Props> = ({ idProduct }) => {

    const [opinions, setOpinions] = useState({} as IOpinionsDB);
    const [average, setAverage] = useState(0)
    
    const getOpinions = async () => {
        const response = await fetchApi.get( `/opinions/${ idProduct }`);
        const results = await response.data;

        const promed: number = Number((( results.rating.rate_1 * 1 + results.rating.rate_2 * 2 + results.rating.rate_3 * 3 + results.rating.rate_4 * 4 + results.rating.rate_5 * 5) / results.totalOpinions ).toPrecision(2))
        setAverage( promed )
        setOpinions( results )
    }

    useEffect(() => {
        getOpinions()
            .catch( err => console.log( err ))
    }, [])
    
    return (
        <div>
            <h2 className='font-xxl mt-3 f-normal'>Opiniones sobre el producto</h2>
            <div className='mt-3'></div>
            <div className='flex-row'>
                {
                    opinions.opinions &&
                    <>
                        <div style={{ flex: 0.5 }}>
                            <p className='center' style={{ fontSize: "6.4rem" }}>{ average }</p>  
                            {
                                [1,2,3,4,5].map( star => (
                                    <StartRating key={ star } star={ star } average={ average }/>
                                ))
                            }
                            <p className='mt-2'>Promedio entre { opinions.totalOpinions } opiniones</p>
                        </div>
                        <div className='f-auto'>
                            <ContainerLineProgress 
                                ratingArray={ Object.values( opinions.rating ).reverse() } 
                                total={  opinions.totalOpinions }
                            />
                        </div>
                    </>
                }
            </div>
        </div>
    )
}
