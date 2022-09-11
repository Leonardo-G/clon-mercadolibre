import React, { FC } from 'react';

interface Props {
    rate: number
    total: number // Número para sacar el promedio del Line Progress
    idx: number
}

export const LineProgress: FC<Props> = ({ rate, total, idx }) => {
    return (
        <div className="mb-1 f-weight">
            <span className='font-m'>{ 5 - idx } { 5 - idx === 1 ? "estrella" : "estrellas" }</span>
            <div style={{ width: "17rem", display: "inline-block", verticalAlign: "0.2rem", marginLeft: "2rem" }}>
                <div
                    style={{ 
                        backgroundColor : "rgba(0,0,0,.1)", 
                        height: ".4rem", 
                        width: "17rem",
                        borderRadius: "100px",
                        position: "relative",
                        marginLeft: 5 - idx === 1 ? "1rem" : ""
                    }}
                >
                    <div
                        style={{ 
                            position: "absolute",
                            top: 0,
                            left: 0,
                            background : "#3483fa", 
                            height: ".4rem", 
                            width: `${ ( Number(rate) / total ) * 100  }%`,
                            borderRadius: "100px",
                        }}
                    ></div>
                </div>
            </div>
            <span 
                className='ml-2 font-m'
                style={{
                    color: "rgba(0,0,0,.55)",
                    marginLeft: 5 - idx === 1 ? "3rem" : ""
                }}
            >{ rate }</span>
        </div>
    )
}
