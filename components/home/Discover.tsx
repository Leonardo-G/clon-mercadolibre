import React from 'react'
import { TitleSection } from '../UI/TitleSection';

import styles from "../../styles/home/Discover.module.css";
import Image from 'next/image';

export const Discover = () => {
    return (
        <>
            <TitleSection title="Te puede interesar"/>
            <div className='flex-row c-gap-2 my-media'>
                <div className={ styles.discover }>
                    <div className={ styles.discover__info }>
                        <p>instrumentos</p>
                        <h3>hasta 30% OFF y 12x sin interés</h3>
                        <button className='btn btn--blue'>ver más</button>
                    </div>
                    <div className='relative' style={{ minHeight: "25rem", width: "50%" }}>
                        <Image 
                            src="/assets/discover/D_NQ_811023-MLA50990706464_082022-C.webp"
                            layout='fill'
                            alt="instrumentos"
                            objectFit='contain'
                        />
                    </div>
                </div>
                <div className={ styles.discover }>
                    <div className={ styles.discover__info }>
                        <p>supermercado</p>
                        <h3>hasta 25%</h3>
                        <button className='btn btn--blue'>ver más</button>
                    </div>
                    <div className='relative' style={{ minHeight: "25rem", width: "50%" }}>
                        <Image 
                            src="/assets/discover/D_NQ_995704-MLA50990686956_082022-C.webp"
                            layout='fill'
                            alt="instrumentos"
                            objectFit='contain'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
