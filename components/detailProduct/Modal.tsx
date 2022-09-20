import Image from 'next/image';
import React, { FC } from 'react';

import { IQuestion } from '../../interface/question';

import { ModalContainer } from './ModalContainer';
import { Questions } from '../questions/Questions';

interface Props {
    type: "questions" | "zoom";
    info: IQuestion[] | string;
    handleShowModal: () => void;
}

export const Modal: FC<Props> = ({ type, info, handleShowModal }) => {

    if ( type === "questions" ) {
        return (
            <ModalContainer handleShowModal={ handleShowModal }>
                <Questions questions={ info as IQuestion[] }/>
            </ModalContainer>
        )
    }

    if ( type === "zoom" ) {
        return ( 
            <ModalContainer handleShowModal={ handleShowModal }>
                <Image 
                    src={ info as string }
                    layout="fill"    
                    alt="imagen zoom"
                />
            </ModalContainer>
        )
    }

    return (
        <div>Modal</div>
    )
}
