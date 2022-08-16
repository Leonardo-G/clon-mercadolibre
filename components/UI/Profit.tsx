import React, { FC } from 'react'

import Image from 'next/image'

import { TitleSection } from './TitleSection'

import styles from "../../styles/components/UI/Profit.module.css";

export const Profit: FC = () => {
    return (
        <>
            <TitleSection
               title="Beneficios de Mercado Puntos"
               url
               urlTitle="Ver todos los beneficios"
            />
            <div className="flex-row c-gap-2 my-media">
                <div className={`relative ${styles.profit__card}`}>
                    <Image 
                        src="/assets/profit/disney-nivel6-mla-mco-mlm@2x.png"
                        alt="beneficios disney plus"
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className={`relative ${ styles['card--description'] }`}>
                        <div>
                            <Image 
                                src="/assets/profit/comboplus-square.jpg"
                                alt="Disney plus sin cargo"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div>
                            <h3>Sin cargo con el nivel 6</h3>
                            <p>Disney+ y Star+</p>
                        </div>
                    </div>
                </div>
              
                <div className={`relative ${styles.profit__card}`}>
                    <Image 
                        src="/assets/profit/hbo-max-mla-mlc-mco-v2@2x.jpg"
                        alt="beneficios disney plus"
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className={`relative ${ styles['card--description'] }`}>
                        <div>
                            <Image 
                                src="/assets/profit/logoSquare@2x.png"
                                alt="Disney plus sin cargo"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div>
                            <h3>Sin cargo con el nivel 6</h3>
                            <p>Disney+ y Star+</p>
                        </div>
                    </div>
                </div>
              
                <div className={`relative ${styles.profit__card}`}>
                    <Image 
                        src="/assets/profit/paramount-mla-mlc@2x.jpg"
                        alt="beneficios disney plus"
                        layout='fill'
                        objectFit='cover'
                    />
                    <div className={`relative ${ styles['card--description'] }`}>
                        <div>
                            <Image 
                                src="/assets/profit/paramount-logo-vdp-56-x-56-filled@2x.png"
                                alt="Disney plus sin cargo"
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                        <div>
                            <h3>Sin cargo con el nivel 6</h3>
                            <p>Disney+ y Star+</p>
                        </div>
                    </div>
                </div>
              
            </div>
        </>
    )
}
