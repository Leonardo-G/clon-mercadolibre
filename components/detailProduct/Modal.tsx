import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import { IQuestion } from '../../interface/question';
import { Questions } from './Questions';

interface Props {
    type: "questions";
    array: IQuestion[];
    handleShowModal: () => void;
}

export const Modal: FC<Props> = ({ type, array, handleShowModal }) => {

    if ( type === "questions" ) {
        return (

            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "rgba(0,0,0,.8)",
                    paddingBottom: "5rem",
                    zIndex: 999
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
                        top: "6rem",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "min(80rem, 80%)",
                        height: "80%",
                        backgroundColor: "#fff",
                        zIndex: 999,
                        padding: "2rem 5rem",
                        overflowY: "scroll",
                    }}
                >
                    <Questions questions={ array }/>
                    
                </div>
            </div>
        )
    }

    return (
        <div>Modal</div>
    )
}
