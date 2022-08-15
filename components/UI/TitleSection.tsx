import React, { FC } from 'react'

interface Props {
    title: string;
    url?: boolean;
    urlTitle?: string;
}

export const TitleSection: FC<Props> = ({ title, url, urlTitle }) => {

    if ( !url ) {
        return (
            <div className='f-row'>
                <h2 className='title-section'>{ title }</h2>
            </div>
        )
    }

    return (
        <div className='flex-row-2'>
            <h2 className='title-section'>{ title }</h2>
            <span className='font-5 mb'>{ urlTitle }</span>
        </div>
    )
}
