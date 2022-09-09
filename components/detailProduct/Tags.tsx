import React, { FC } from 'react'

interface Props {
    tags: string[];
}

export const Tags: FC<Props> = ({ tags }) => {
    return (
        <div className='container mt-2'>
            <div className='txt-left'style={{ height: "2rem", whiteSpace: "pre", overflow: "hidden", width: "90rem" }}>
                <span style={{ fontWeight: 500, color: "#000" }}>También puede interesarte:</span>
                <span> 
                    {
                        tags.map(( t, idx) => {
                            if ( tags.length === idx + 1 ) return <span key={ idx }> { t } </span>
                             
                            return (
                                <span key={ idx }> { t } -</span>
                            )
                        })
                    }
                </span>
            </div>
            <div className='mt-2 flex-row flex-left gap-1'>
                <p>Volver al listado</p>
                <span className='col-grey-w'>|</span>
                <span className='color-blue f-weigth'>Herramientas</span>
                <span className='col-grey-w'>|</span>
                <span className='color-blue f-weigth'>Herramientas Eléctricas</span>  
                <span className='col-grey-w'>|</span>
                <span className='color-blue f-weigth'>Corte</span>
                <span className='col-grey-w'>|</span>
                <span className='color-blue f-weigth'>Amoladoras</span>
            </div>
        </div>
    )
}
