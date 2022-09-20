import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ISubCategory } from '../../interface/subCategory'

interface Props{
    items: ISubCategory
}

export const CardS: FC<Props> = ({ items }) => {
    return (
        <Link href={`/productos?subcategory=${ items.subCategory.code }`}>
            <a>
                <div className='relative radius-default ov-hidd my-5 shadow-default'>
                    <div style={{ height: "24rem", width: "28.5rem" }}>
                        <Image 
                            src={ items.imgUrl }
                            alt={ items.subCategory.title }
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className='pos-left-bot background-wh full-w py-1'>
                        <p className='title-grey-upper font-size-default'>{ items.subCategory.title }</p>
                    </div>
                </div>
            </a>
        </Link>
    )
}
