import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IUser } from '../../interface/users';

interface Props{
    items: IUser;
    height?: string; // Pasar el numero en STRING y en REM (unidad de medida)
}

export const CardM: FC<Props> = ({ items, height }) => {
    return (
        <Link href={`/productos?search=${ items.username }`}>
            <div className='relative radius-default ov-hidd my-5 shadow-default pointer'>
                <div style={{ height: height ? height : "24rem", width: "28.5rem" }}>
                    <Image 
                        src={ items.imgUrl }
                        alt={ items.username }
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>
        </Link>
    )
}