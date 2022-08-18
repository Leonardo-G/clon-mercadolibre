import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { IUser } from '../../interface/users';

interface Props{
    items: IUser
}

export const CardM: FC<Props> = ({ items }) => {
    return (
        <Link href={`/user/${ items.username }`}>
            <a>
                <div className='relative radius-default ov-hidd my-5 shadow-default'>
                    <div style={{ height: "24rem", width: "28.5rem" }}>
                        <Image 
                            src={ items.imgUrl }
                            alt={ items.username }
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                </div>
            </a>
        </Link>
    )
}