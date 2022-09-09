import React, { FC } from 'react';

interface Props {
    characteristics: string[]
}

export const Characteristics: FC<Props> = ({ characteristics }) => {
    return (
        <div className='mt-3'>
            <p className='f-bold-black'>Lo que tenés que saber de este producto</p>
            <ul 
                className='mt-2'
                style={{ padding: 0, marginLeft: "1.6rem", listStyle: "disc" }}
            >
                {
                    characteristics?.map(( c, idx ) => (
                        <li key={ idx } className="mt-1 font-xs">{ c }</li>
                    ) )
                }
            </ul>
            <p className='color-blue mt-2 block'>Ver características</p>
        </div>
    )
}
