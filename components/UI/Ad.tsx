import Link from 'next/link';

import { ImageFull } from '../imageCard/ImageFull';

export const Ad = () => {
    return (
        <div className='container my-3 flex' style={{ height: "25rem" }}>
            <div className='f-auto'>
                <ImageFull
                    src='https://http2.mlstatic.com/D_NQ_844168-MLA51443063649_092022-OO.jpg'
                    height='25rem'
                    objectFit='cover'
                />
            </div>
            <div 
                className='flex-col flex-center pl-3'
                style={{
                    width: "100%",
                    height: "100%",
                    flex: .6,
                    color: "#ffffff",
                    background: "#8533af"
                }}
            >
                <p 
                    className='mb font-s upper color-wh'
                    style={{
                        letterSpacing: "4px"
                    }}    
                >sólo por hoy</p>
                <p 
                    className='mb-2 color-wh upper f-bold'
                    style={{ fontSize: "2.8rem", width: "60%" }}    
                >ofertas y hasta 12x sin interés</p>
                <Link href="/" passHref>
                    <a className='font-l color-wh'> Ver más </a>
                </Link>
            </div>
        </div>
    )
}
