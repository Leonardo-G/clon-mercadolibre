import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useContext } from 'react';

import { IHistoryMinin } from '../../interface/products';

import styles from "../../styles/components/cards/CardUltraS.module.css";
import { HistoryContext } from '../../context/History/HistoryContext';

interface Props {
    item: IHistoryMinin
}

export const CardUltraS: FC<Props> = ({ item }) => {

    const { removeProductOfHistory } = useContext( HistoryContext )

    return (
        <div className={ styles['producto-history'] } >
            <Link href={{pathname: `/producto/${ item.title.replace(/(\s{1,})|\//g, "-") }/${ item._id }`}} passHref>
                <a>
                    <div className='background-wh relative' style={{ height: "15rem", width: "100%" }}>
                        <Image 
                            src={ item.imgUrl }
                            alt={ item.title }
                            layout="fill"
                            objectFit='contain'
                        />
                    </div>
                    <div className={ styles['producto-history__title'] }>
                        <p>{ item.title }</p>
                    </div>
                </a>
            </Link>
            <div 
                className={ styles['producto-history__mark'] }
                onClick={ () => removeProductOfHistory(item._id) }
            >
                <FontAwesomeIcon icon={ faXmark }
                    className={ styles['icon--mark'] }
                />
            </div>
        </div>
    )
}
