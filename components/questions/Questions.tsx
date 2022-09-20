import { faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react';
import { fetchApi } from '../../axios/config';
import { IQuestion } from '../../interface/question';
import { formatDate } from '../../utils/formatDate';

interface Props {
    questions: IQuestion[]
}

export const Questions: FC<Props> = ({ questions }) => {

    return (
        <>
            <p className='mt-3 font-l f-bold'>Últimas realizadas</p>
            {
                questions.map(( q )=> (
                    <div key={ q._id } className="mt-2">
                        <p style={{ fontSize: "1.6rem" }}>{ q.question }</p>
                        <div className='mt-1 flex-row flex-left hover-cursor cursor-default'>
                            <FontAwesomeIcon
                                className='col-grey-w f-weigth  '
                                style={{ fontSize: "1.6rem", transform: "translate(100%, -30%)", color: "#99999957" }}    
                                icon={ faL }
                            />
                            <p className='f-weight' style={{ fontSize: "1.6rem", color: "rgba(0,0,0,.55)", wordBreak: "break-word", lineHeight: 1.6 }}>
                                { q.response }
                                <span className='ml-1 f-weight color-grey-2'>{ formatDate(q.created) }</span>
                                
                                <span className='color-blue ml-1 hover-visible pointer'>Denunciar</span>
                            </p>
                        </div>
                    </div>
                ) )
            }
       </>
        
    )
}
