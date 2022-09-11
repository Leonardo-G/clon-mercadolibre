import React, { FC } from 'react'

interface Props {
    handleChangeOpinions: ( type: string ) => void;
    opinionsShow: string;
}

export const ButtonOpinions: FC<Props> = ({ handleChangeOpinions, opinionsShow }) => {
    return (
        <>
            <button 
                className='f-auto p-1 pointer'
                onClick={ () =>  handleChangeOpinions( "normal" ) }
                style={{ 
                    backgroundColor: "#fff",
                    color: opinionsShow === "normal" ? "#3483fa" : "grey",
                    fontWeight: 600,    
                    fontSize: "1.6rem",
                    outline: "none",
                    border: "none",
                    borderBottom: opinionsShow === "normal" ? "2px solid #3483fa" : "1px solid #e1e1e1"
                }}    
            >Todas</button>
            <button 
                className='f-auto p-1 pointer'
                onClick={ () =>  handleChangeOpinions( "positive" ) }
                style={{ 
                    backgroundColor: "#fff",
                    color: opinionsShow === "positive" ? "#3483fa" : "grey",
                    fontWeight: 600,    
                    fontSize: "1.6rem",
                    outline: "none",
                    border: "none",
                    borderBottom: opinionsShow === "positive" ? "2px solid #3483fa" : "1px solid #e1e1e1"
                }}>Positivas</button>
            <button 
                className='f-auto p-1 pointer'
                onClick={ () =>  handleChangeOpinions( "negative" ) }
                style={{ 
                    backgroundColor: "#fff",
                    color: opinionsShow === "negative" ? "#3483fa" : "grey",
                    fontWeight: 600,    
                    fontSize: "1.6rem",
                    outline: "none",
                    border: "none",
                    borderBottom: opinionsShow === "negative" ? "2px solid #3483fa" : "1px solid #e1e1e1"
                }}
            >Negativas</button>
        </>
    )
}
