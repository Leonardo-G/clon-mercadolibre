import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
    title: string;
    url?: boolean;
    urlTitle?: string;
}

export const TitleCenter: FC<Props> = ({ title, url, urlTitle }) => {

    if ( !url ) {
        return (
            <h2 className='title-grey-upper mt-full mb-2'>{ title }</h2>
        )
    }

    return (
        <h2 className='title-grey-upper mt-full mb-2'>
            { title }
            <Link href="/">
                <span className='font-5 px-2'>{ urlTitle }</span>
            </Link>
        </h2>
        
    )
}
