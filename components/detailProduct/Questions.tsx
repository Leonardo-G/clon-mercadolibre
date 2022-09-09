import { faL } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useEffect, useState } from 'react';
import { fetchApi } from '../../axios/config';
import { IQuestion } from '../../interface/question';

interface Props {
    idProduct: string;
}

export const Questions: FC<Props> = ({ idProduct }) => {

    const [questions, setQuestions] = useState([] as IQuestion[] )

    const getQuestions = async () => {

        const response = await fetchApi.get(`/questions/${ idProduct }/get`);
        const results = await response.data;
        console.log(results)
        setQuestions( results );
    }

    useEffect(() => {
        getQuestions()
            .catch( err => console.log(err) )
    }, [])

    return (
        <section>
            
            <h2 className='font-xxl mt-3 f-normal'>Preguntas y respuestas</h2>
            <p className='mt-3 font-l f-bold'>Últimas realizadas</p>
            {
                questions.map(( q )=> (
                    <div key={ q._id } className="mt-2">
                        <p style={{ fontSize: "1.6rem" }}>{ q.question }</p>
                        <div className='mt-1 flex-row flex-left'>
                            <FontAwesomeIcon
                                className='col-grey-w f-weigth  '
                                style={{ fontSize: "1.6rem", transform: "translate(100%, -30%)", color: "#99999957" }}    
                                icon={ faL }
                            />
                            <div>
                                <span className='color-grey-2' style={{ fontSize: "1.6rem" }}>{ q.response }</span>
                            </div>
                        </div>
                    </div>
                ) )
            }
            <div className='br my-full'></div>
        </section>
        
    )
}
