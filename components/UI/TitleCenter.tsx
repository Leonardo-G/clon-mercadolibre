import Link from 'next/link';
import React, { FC } from 'react'

interface Props {
    title: string;
    url?: boolean;
    urlTitle?: string;
    redirect?: string;
}

export const TitleCenter: FC<Props> = ({ title, url, urlTitle, redirect }) => {

    if ( !url ) {
        return (
            <h2 className='title-grey-upper mt-full mb-2'>{ title }</h2>
        )
    }

    return (
        <h2 className='title-grey-upper mt-full mb-2'>
            { title }
            <Link href={ redirect ? redirect : "/"}>
                <span className='font-5 px-2 pointer'>{ urlTitle }</span>
            </Link>
        </h2>
        
    )
}
