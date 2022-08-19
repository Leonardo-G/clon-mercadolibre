import Image from 'next/image';
import React, { FC } from 'react'

interface Props {
    src: string
    height?: string; // unidades en REM. EJEMPLO "34rem"
    alt?: string;
    objectFit?: "contain" | "cover"
    styles?: boolean
}

export const ImageFull: FC<Props> = ({ src, height, alt, objectFit, styles }) => {
    return (
        <div className={`relative pointer ${ styles ? "radius-default shadow-default pointer ov-hidd" : "" }`} style={ height ? { height } : { height: "16.5rem" } }>
            <Image 
                src={ src }
                alt={ alt ? alt : "Imagen full" }
                layout="fill"
                objectFit={ objectFit ? objectFit : "contain" }
            />
        </div>
    )
}
