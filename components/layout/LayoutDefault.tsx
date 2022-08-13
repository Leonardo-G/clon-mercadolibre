import Head from 'next/head'
import React, { FC, ReactNode } from 'react'

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
            </Head>

            <header>
                <nav>

                </nav>
            </header>
            <main>
                { children }
            </main>
            <footer>

            </footer>
        </>
    )
}
