import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { FC, useState } from 'react'
import { ButtonOpinions } from './ButtonOpinions';
import { Rating } from './Rating';
import { IOpinion } from '../../interface/opinion';
import { Opinion } from './Opinion';

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
            setOpinionsShort( opinions.filter(( o, idx ) => o.rate >= 3 ) )
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
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,.8)",
                paddingBottom: "5rem"
            }}
        >
            <div
                onClick={ handleShowModal }
                style={{
                    position: "absolute",
                    top: "5rem",
                    right: "5rem",
                    fontSize:"3rem",
                    color: "#fff",
                    cursor: "pointer"
                }}
            >
                <FontAwesomeIcon icon={ faXmark }/>
            </div>
            <div
                style={{
                    position: "absolute",
                    top: "5rem",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "80%",
                    height: "80%",
                    backgroundColor: "#fff",
                    zIndex: 999,
                    padding: "8rem 5rem",
                    overflowY: "scroll",
                }}
            >
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
            </div>
        </div>
    )
}
