import React, { FC, useEffect, useState } from 'react';

import { fetchApi } from '../../axios/config'
import { IOpinion } from '../../interface/opinion';
import { ButtonOpinions } from './ButtonOpinions';
import { Modal } from './Modal';
import { Opinion } from './Opinion';
import { Rating } from './Rating';

interface IOpinionsDB {
    opinions: IOpinion[];
    totalOpinions: number;
    rating: {
        rate_1: number;
        rate_2: number;
        rate_3: number;
        rate_4: number;
        rate_5: number;
    }
}

interface Props {
    idProduct: string;
}

export const Opinions: FC<Props> = ({ idProduct }) => {

    const [opinions, setOpinions] = useState({} as IOpinionsDB);
    const [average, setAverage] = useState(0);
    
    const [opinionsShort, setOpinionsShort] = useState([] as IOpinion[])
    const [opinionsShow, setOpinionsShow] = useState("normal")
    const [modalShow, setModalShow] = useState(false);

    const getOpinions = async () => {
        const response = await fetchApi.get( `/opinions/${ idProduct }`);
        const results = await response.data;
        console.log(results);
        const promed: number = Number((( results.rating.rate_1 * 1 + results.rating.rate_2 * 2 + results.rating.rate_3 * 3 + results.rating.rate_4 * 4 + results.rating.rate_5 * 5) / results.totalOpinions ).toPrecision(2))
        setAverage( promed )
        setOpinions( results );
        setOpinionsShort( results.opinions.filter(( o: IOpinion, idx: number ) => idx >= 0 && idx <= 2 ) )
        
    }

    useEffect(() => {
        getOpinions()
            .catch( err => console.log( err ))
    }, [])
    
    const handleShowModal = () => {
        setModalShow( !modalShow )
    }

    const handleChangeOpinions = ( type: string ) => {
        if ( type === "normal" ) {
            setOpinionsShort( opinions.opinions.filter(( o, idx ) => idx >= 0 && idx <= 2 ) )
            setOpinionsShow("normal")
            return;
        }

        if ( type === "positive" ) {
            setOpinionsShort( opinions.opinions.filter(( o, idx ) => o.rate >= 4 ).filter((o, idx) => idx >= 0 && idx <= 2) )
            setOpinionsShow("positive")
            return;
        }

        if ( type === "negative" ) {
            setOpinionsShort( opinions.opinions.filter(( o, idx ) => o.rate < 3 ).filter((o, idx) => idx >= 0 && idx <= 2))
            setOpinionsShow("negative")
            return;
        }
    }

    
    return (
        <>
            {
                opinions.opinions && opinions.opinions.length === 0 
                ? <></>
                :
                    <div>
                        <h2 className='font-xxl mt-3 f-normal'>Opiniones sobre el producto</h2>
                        <div className='mt-3'></div>
                        <div className='flex-row'>
                            <Rating 
                                average={ average }
                                rating={ opinions.rating }
                                totalOpinions={ opinions.totalOpinions }
                            />
                        </div>
                        <div>
                            <div className="flex mt-3">
                                <ButtonOpinions 
                                    handleChangeOpinions={ handleChangeOpinions }
                                    opinionsShow={ opinionsShow }
                                />
                            </div>
                            <div>
                                {
                                    opinionsShort &&
                                    opinionsShort.map( opinion => (
                                        <Opinion key={ opinion._id } opinion={ opinion }/>
                                    ))
                                }
                                {
                                    opinionsShort.length === 0 &&
                                    opinionsShow === "negative" &&

                                    <div className='center my-full'>
                                        <p>Nada por acá!</p>
                                        <p 
                                            className='mt-2'
                                        >Este producto aún no tiene opiniones negativas.</p>
                                    </div>

                                }
                            </div>
                        </div>
                        
                        <p 
                            onClick={ handleShowModal }
                            className='mt-2 color-blue pointer'
                        >Ver todas las opiniones</p>
                        {
                            modalShow &&
                            <Modal 
                                handleShowModal={ handleShowModal }
                                average={ average }
                                opinionsTotal={ opinions.opinions }
                                rating={ opinions.rating }
                                totalOpinions={ opinions.totalOpinions }
                            />
                        }
                    </div>
            }
        </>
    )
}
