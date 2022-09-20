import React, { FC, useEffect, useState } from 'react'
import { fetchApi } from '../../axios/config';
import { IQuestion } from '../../interface/question';
import { Modal } from '../detailProduct/Modal';
import { Questions } from './Questions';

interface Props {
    id: string // ID del producto
}

export const QuestionContainer: FC<Props> = ({ id }) => {

    const [questions, setQuestions] = useState([] as IQuestion[]);
    const [openModalQuestion, setOpenModalQuestion] = useState(false);

    const getApi = async () => {
        const response = await fetchApi.get(`/questions/${ id }/get`);
        const results = await response.data;
        
        setQuestions( results );
    }

    useEffect(() => {
        getApi()
            .catch( err => console.log(err))
    }, [])

    const handleShowModalQuestion = () => {
        setOpenModalQuestion( !openModalQuestion )
    }

    return (
        <>
            <h2 className='font-xxl mt-3 f-normal'>Preguntas y respuestas</h2>
            <p className='mt-full font-l f-bold'>Qué querés saber?</p>
            <div className='mt-3'>
                <span className='pointer radius-default color-blue p-1 f-bold' style={{ background: "rgba(65,137,230,.15)" }}>Costo y tiempo de envío</span>
                <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Devoluciones gratis</span>
                <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Medios de pago y promociones</span>
                <span className='pointer radius-default color-blue p-1 f-bold ml-1' style={{ background: "rgba(65,137,230,.15)" }}>Garantía</span>
            </div>
            <h3 className='mt-full f-bold font-l'>Preguntale al vendedor</h3>
            <div className='mt-2 flex c-gap-2'>
                <input 
                    type="text" 
                    name="question" 
                    placeholder='Escribí tu pregunta'
                    style={{
                        height: "4.8rem",
                        fontSize: "1.6rem",
                        paddingLeft: "1rem",
                        borderRadius: "6px",
                        flex: 1,
                        outline: "none",
                        border: "none",
                        boxShadow: "0 0 0 1px rgb(0 0 0 / 25%)"
                    }}
                />
                <button 
                    className='btn btn--blue'
                    style={{ flex: 0.2 }}    
                >Preguntar</button>
            </div>
            {
                questions.length === 0 ?
                <p className='mt-3'>Nadie hizo preguntas todavía. Hacé la primera!</p>

                : 
                    <>
                        <Questions questions={ questions.filter((q, idx) => idx >= 0 && idx <= 6 ) }/>
                        <p 
                            className='mt-3 color-blue pointer'
                            onClick={ handleShowModalQuestion }    
                        >Ver todas las preguntas</p>
                    </>
            }

            <div className='br my-full'></div>
                                    
            {
                openModalQuestion &&

                <Modal
                    info={ questions.reverse() as IQuestion[] }
                    type="questions"
                    handleShowModal={ handleShowModalQuestion }
                />
            }
        </>
    )
}
