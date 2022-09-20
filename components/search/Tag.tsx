import Link from 'next/link';
import React, { FC } from 'react';

interface Props {
    tag: string;
    totalTags: number
    idx: number;
}

export const Tag: FC<Props> = ({ tag, totalTags, idx }) => {

    if ( idx + 1 === totalTags ) {
        return (
            <Link href={{ pathname: "/productos", query: { search: tag } }} >
                <a> { tag } </a>
            </Link>
        )
    }

    return (
        <>
            {
                <Link href={{ pathname: "/productos", query: { search: tag } }}>
                    <a> { tag } -</a>
                </Link> 
            }
        </>
    )
}
