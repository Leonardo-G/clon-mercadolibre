import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react'

interface Props {
    title: string;
    description: string;
    children: ReactNode;
}

export const LayoutAuth: FC<Props> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content={ title } />
                <meta name="og:description" content={ description } />
                <title>{ title }</title>
                <link rel="shortcut icon" href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/favicon.svg" type="image/x-icon" />
            </Head>
            <header style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                background: "#fff059",
                padding: "1rem"
            }}>
                <Link href="/">
                    <a className='relative' style={{ height: "3.4rem", width: "14rem", }}>
                        <Image 
                            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.18.1/mercadolibre/logo__large_plus.png"
                            layout="fill"
                            objectFit="contain"
                            alt="logo mercado libre clon"
                        />
                    </a>
                </Link>
                <div style={{ fontSize: "1.5rem" }}>
                    <FontAwesomeIcon icon={ faCircleQuestion }/>
                </div>
            </header>
            <main>
                <div style={{
                    background: "#fff059",
                    height: "18.2rem"

                }}></div>
                <div className='container'>
                    <div style={{ margin: "0 auto", display: "flex", justifyContent: "center"}}>
                        <div style={{ 
                            position: "absolute",
                            background: "#fff",
                            borderRadius: "6px",
                            boxShadow:" 0 0.0625rem 0.125rem 0 rgb(0 0 0 / 15%)",
                            padding: "2rem",
                            transform: "translateY(-20%)",
                        }}
                        >
                            { children }
                        </div>
                    </div>
                </div>
            </main> 
            <footer></footer>
        </>
    )
}
