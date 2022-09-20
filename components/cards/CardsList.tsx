import React, { FC } from 'react'
import { IProduct, IHistoryMinin } from '../../interface/products';
import { ISubCategory } from '../../interface/subCategory';
import { IUser } from '../../interface/users';
import { CardGrid } from '../grid/CardGrid';
import { CardCricle } from './CardCricle';
import { CardM } from './CardM';
import { CardS } from './CardS';
import { CardUltraS } from './CardUltraS';
import { CardXL } from './CardXL';

interface Props{
    typeCard: "Card_S" | "Card_SX" | "Card_M" | "Card_Circle" | "Card_XL" | "Card_UltraS";
    items   : IProduct[] | ISubCategory[] | IUser[] | IHistoryMinin[];
    height? : string; //Unidades en rem
    width?  : string;  //Unidades en rem
}

export const CardsList: FC<Props> = ({ typeCard, items, width }) => {

    if ( typeCard === "Card_S" ){
        return (
            <div className='flex-row' style={{ display: "grid", gridTemplateColumns: `repeat( auto-fit, minmax(${ width ? width : "10rem" }, 1fr))`}}>
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

    if ( typeCard === "Card_Circle" ) {
        return (
            <div className='grid-full-2'>
                {
                    items.map( item => (
                        <CardCricle key={ item._id } item={ item as IUser }/>
                    ))
                }
            </div>
        )
    }

    if ( typeCard === "Card_XL" ) {
        return (
            <div className='flex-col mt-2'>
                {
                    items.map( item => (
                        <CardXL key={ item._id } item={ item as IProduct }/>
                    ))
                }
            </div>
        )
    }

    if ( typeCard === "Card_UltraS" ) {
        return (
            <div className='mt-2 c-gap-2 r-gap-2 flex'>
                {
                    items.map( item => (
                        <CardUltraS key={ item._id } item={ item as IHistoryMinin }/> 
                    ))
                }
            </div>
        )
    }

    return (
        <div>Error</div>
    )
}
