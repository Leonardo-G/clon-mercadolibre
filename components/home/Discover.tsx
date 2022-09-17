import React, { FC } from 'react'
import Image from 'next/image';

import styles from "../../styles/home/Discover.module.css";
import { IDiscover } from '../../interface/discover';

interface Props {
    discover: IDiscover[]
}

export const Discover: FC<Props> = ({ discover }) => {
    return (
        <>
            <div className='flex-row c-gap-2 my-media'>
                {
                    discover.map( d => (
                        <div key={ d.id } className={`${ styles.discover } shadow-default pointer`}>
                            <div className={ styles.discover__info }>
                                <p>{ d.subtitle }</p>
                                <h3>{ d.title }</h3>
                                <button className='btn btn--blue'>ver más</button>
                            </div>
                            <div className='relative' style={{ minHeight: "25rem", width: "50%" }}>
                                <Image 
                                    src={ d.img }
                                    layout='fill'
                                    alt="instrumentos"
                                    objectFit='contain'
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
