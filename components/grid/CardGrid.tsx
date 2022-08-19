import Image from 'next/image';
import React, { FC } from 'react'
import { ISubCategory } from '../../interface/subCategory';

interface Props {
    idx: number;
    item: ISubCategory;
    quantity: 3 | 4;
}

export const CardGrid: FC<Props>= ({ idx, item, quantity }) => {

    if ( idx === 0 ) {
        return (
            <div style={{ gridColumn: `auto/span ${ quantity === 3 ? "6" : "4" }` }}>
                <div className='relative radius-default shadow-default ov-hidd' style={{ height: "24rem" }}>
                    <Image 
                        src={ item.imgUrl }
                        alt={ item.category.title }
                        objectFit="cover"
                        layout='fill'
                    />
                    <div className='flex-col pos-left-bot mt-2 background-wh p-2 radius-default'>
                        <p className='title-section capitalize subtitle-grey font-xl'>{ item.subCategory.title }</p>
                        <p className='mt-1 font-5'>Ver productos</p>
                    </div>
                </div>
            </div>
        )
    }

    if ( idx === 1 ) {
        return (
            <div style={{ gridColumn:  `auto/span ${ quantity === 3 ? "4" : "2" }` }}>
                <div className='radius-default shadow-default flex-row-center background-wh p-2'>
                    <div className='relative' style={{ height: "20rem", width: "100%" }}>
                        <Image 
                            src={ item.imgUrl }
                            alt={ item.category.title }
                            objectFit="cover"
                            layout='fill'
                        />
                    </div>
                    <div className='flex-col'>
                        <p className='title-section capitalize subtitle-grey font-l'>{ item.subCategory.title }</p>
                        <p className='mt-1 font-5'>Ver productos</p>
                    </div>
                </div>
            </div>
        )
    }

    if ( idx === 2 ) {
        return (
            <div style={{ gridColumn:  "auto/span 2"}}>
                <div className='radius-default shadow-default flex-col-center background-wh p-2'>
                    <div className='relative' style={{ height: "12.5rem", width: "100%" }}>
                        <Image 
                            src={ item.imgUrl }
                            alt={ item.category.title }
                            objectFit="cover"
                            layout='fill'
                        />
                    </div>
                    <div className='flex-col'>
                        <p className='title-section capitalize subtitle-grey font-l mt-2'>{ item.subCategory.title }</p>
                        <p className='mt-1 font-5'>Ver productos</p>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div style={{ gridColumn: `auto/span 4` }}>
            <div className='relative radius-default shadow-default ov-hidd' style={{ height: "23.5rem" }}>
                <Image 
                    src={ item.imgUrl }
                    alt={ item.category.title }
                    objectFit="cover"
                    layout='fill'
                />
                <div className='flex-col pos-left-bot m-2 background-wh p-2 radius-default'>
                    <p className='title-section capitalize subtitle-grey font-l'>{ item.subCategory.title }</p>
                    <p className='mt-1 font-5'>Ver productos</p>
                </div>
            </div>
        </div>
    )
}