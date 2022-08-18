import React, { FC } from 'react'
import { IProduct } from '../../interface/products';
import { ISubCategory } from '../../interface/subCategory';
import { IUser } from '../../interface/users';
import { CardM } from './CardM';
import { CardS } from './CardS';

interface Props{
    typeCard: "Card_S" | "Card_SX" | "Card_M";
    items: IProduct[] | ISubCategory[] | IUser[];
}

export const CardsList: FC<Props> = ({ typeCard, items }) => {

    if ( typeCard === "Card_S" ){
        return (
            <div className='flex-row'>
                {
                    items.map( item => (
                        <CardS key={ item._id } items={ item as ISubCategory }/>
                    ))
                }
            </div>
        )
    }

    if ( typeCard === "Card_M" ) {
        return (
            <div className='grid-full'>
                {
                    items.map( item => (
                        <CardM key={ item._id } items={ item as IUser }/>
                    ))
                }
            </div>
        )
    }

    return (
        <div>CardsList</div>
    )
}
