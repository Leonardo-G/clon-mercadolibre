import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import { ButtonOpinions } from './ButtonOpinions';
import { Rating } from './Rating';
import { IOpinion } from '../../interface/opinion';
import { Opinion } from './Opinion';
import { ModalContainer } from '../detailProduct/ModalContainer';

interface Props {
    handleShowModal: () => void;
    average: number;
    rating: {
        rate_1: number
    },
    totalOpinions: number;
    opinionsTotal: IOpinion[]
}

export const Modal: FC<Props> = ({ handleShowModal, average, totalOpinions, rating, opinionsTotal }) => {

    const [opinionsShow, setOpinionsShow] = useState("normal");
    const [opinions, setOpinions] = useState(opinionsTotal as IOpinion[])
    const [opinionsShort, setOpinionsShort] = useState(opinionsTotal  as IOpinion[])

    const handleChangeOpinions = ( type: string) => {
        if ( type === "normal" ) {
            setOpinionsShort( opinions )
            setOpinionsShow("normal")
            return;
        }

        if ( type === "positive" ) {
            setOpinionsShort( opinions.filter(( o, idx ) => o.rate >= 4 ) )
            setOpinionsShow("positive")
            return;
        }

        if ( type === "negative" ) {
            setOpinionsShort( opinions.filter(( o, idx ) => o.rate < 3 ) )
            setOpinionsShow("negative")
            return;
        }
    }

    return (
        <ModalContainer handleShowModal={ handleShowModal }>
            <>
                <div className='flex-row'>
                    <Rating
                        average={ average }
                        rating={ rating }
                        totalOpinions={ totalOpinions }
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
                            opinionsShort.map( opinion => (
                                <Opinion key={ opinion._id } opinion={ opinion }/>
                            ))
                        }
                        
                    </div>
                </div>
            </>
        </ModalContainer>
        
    )
}
