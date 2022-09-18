import Head from 'next/head'
import React, { FC, ReactNode } from 'react'
import { Footer } from '../UI/Footer';
import { NavBar } from '../UI/NavBar';

interface Props {
    title: string;
    description: string;
    children: ReactNode;
}

export const LayoutDefault: FC<Props> = ({ title, description, children }) => {
    return (
        <>
            <Head>
                <meta name="og:title" content={ title } />
                <meta name="og:description" content={ description } />
                <title>{ title }</title>
                <link rel="shortcut icon" href="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.19.5/mercadolibre/favicon.svg" type="image/x-icon" />
            </Head>

            <header>
                <NavBar />
            </header>
            <main>
                { children }
            </main>
            
            <Footer />
        </>
    )
}
