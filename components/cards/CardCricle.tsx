import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link';

import { IUser } from '../../interface/users'

interface Props {
    item: IUser;
    height?: string; // En REM
    width?: string; // En REM
}

export const CardCricle: FC<Props> = ({ item, height, width }) => {

    return (
        <Link href={ `/productos?search=${ item.username }` }>
            <a className='flex-col-center'>
                <div className='relative ov-hidd shadow-default circle p-1 background-wh' style={{ height: height ? height : "10rem", width: width ? width : "10rem" }}>
                    <Image 
                        src={ item.imgUrl }
                        alt={ item.username }
                        layout="fill"
                        objectFit="contain"
                    />
                </div>
                <div>
                    <p className='mt-1 font-s grey-normal upper center'>{ item.username }</p>
                </div>
            </a>
        </Link>
    )
}
