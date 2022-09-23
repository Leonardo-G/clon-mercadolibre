import React, { FC } from 'react'

import { ISubCategory } from '../../interface/subCategory';

import { CardGrid } from './CardGrid';

interface Props {
    quantity: 3 | 4;
    items: ISubCategory[];
}

export const CardGridList: FC<Props> = ({ items, quantity }) => {
    return (
        <div className='grid-full-1'>
            {
                items.map( (item, idx) => (
                    <CardGrid key={ item._id } idx={ idx } item={ item } quantity={ quantity }/>
                ) )
            }
        </div>
    )
}
