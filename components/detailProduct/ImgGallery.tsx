import Image from 'next/image';
import React, { FC, useEffect, useState } from 'react'
import { Modal } from './Modal';

interface Props {
    images: string[];
    title: string;
}

export const ImgGallery: FC<Props> = ({ images, title }) => {
        
    const [currentPage, setCurrentPage] = useState(images[0] as string);
    const [modalImg, setModalImg] = useState(false);

    const handleChangeImage = ( image: string ) => {
        setCurrentPage( image )
    }

    const handleShowModal = () => {
        setModalImg( !modalImg )
    }

    useEffect(() => {
        setCurrentPage( images[0] )
    }, [ images ])

    return (
        <>
            <div className='mt-2 ml-2'>
                {
                    images.map( (img, idx) => (
                        <div 
                            key={ idx } 
                            onMouseOver={ () => handleChangeImage(img) }
                            className="mb-1 pointer" 
                            style={{ 
                                padding: "0.2rem",
                                borderRadius: "0.6rem",
                                border: `${ img === currentPage ? "2px solid #3483fa" : "1px solid rgba(0,0,0,.25)"}`, 
                            }}
                        >
                            <div
                                className='relative'
                                style={{ 
                                    width: "4.4rem", 
                                    height: "4.4rem",
                                }}>
                                <Image 
                                    src={ img }
                                    alt={ title }
                                    objectFit="contain"
                                    layout='fill'
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-full f-auto cursor-zoom'>
                <div 
                    onClick={ handleShowModal }
                    style={{  position: "sticky", height: "48rem", width: "100%", padding: "1.6rem", "top": 0  }}
                >
                    <Image 
                        alt={ title }
                        src={ currentPage }
                        layout="fill"
                        objectFit='contain'
                        priority
                    />
                </div>
            </div>
            {
                modalImg &&
                <Modal 
                    handleShowModal={ handleShowModal }
                    type="zoom"
                    info={ currentPage }
                />
            }
        </>
    )
}
