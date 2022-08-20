import Image from 'next/image';
import React, { FC } from 'react'

interface Props {
    images: string[]
    height?: string; // unidades en REM. EJEMPLO "34rem"
    objectFit?: "contain" | "cover"
}

export const ImagesCards: FC<Props> = ({ images, height, objectFit }) => {

    return (
        <div className='flex-row my-2'>
            {
                images.map( (img, idx) =>(
                    <div key={ idx } className="relative pointer radius-default shadow-default pointer ov-hidd" style={ height ? { height, width: "100%" } : { height: "16.5rem", width: "100%" } }>
                        <Image 
                            src={ img }
                            alt={ "Imagen full" }
                            layout="fill"
                            objectFit={ objectFit ? objectFit : "cover" }
                        />
                    </div>
                ) )
            }
        </div>
        
    )
}