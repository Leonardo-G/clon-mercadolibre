import React, { FC } from 'react';
import { LineProgress } from './LineProgress';

interface Props {
    ratingArray: number[];
    total: number // Número para sacar el promedio del Line Progress
}

export const ContainerLineProgress: FC<Props> = ({ ratingArray, total }) => {
    return (
        <>
        {
            ratingArray.map( (rate, idx) => {
                return (
                    <LineProgress key={ idx } rate={ rate } total={ total } idx={ idx }/>
                )
            })
        }
        </>
    )
}
