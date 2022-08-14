import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC, useState } from 'react';

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import styles from "../../styles/components/UI/Carrousel.module.css";

const handleDragStart = (e: any) => e.preventDefault();

const items = [
    <img key={1} alt="portada" src="/assets/portada/portada-1.webp" onDragStart={handleDragStart} style={{ objectFit: "cover", width: "100%", height:"34rem"}}/>,
    <img key={2} alt="portada" src="/assets/portada/portada-2.webp" onDragStart={handleDragStart} style={{ objectFit: "cover", width: "100%", height:"34rem"}}/>,
    <img key={3} alt="portada" src="/assets/portada/portada-3.webp" onDragStart={handleDragStart} style={{ objectFit: "cover", width: "100%", height:"34rem"}}/>,
];


export const Carrousel:FC = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const slidePrev = () => {
        if ( activeIndex <= 0 ) {
            setActiveIndex( items.length - 1 );
            return;
        }
        setActiveIndex(activeIndex - 1)
    };
    const slideNext = () => {
        if ( activeIndex >= items.length - 1 ) {
            setActiveIndex( 0 );
            return;
        }
        setActiveIndex(activeIndex + 1)
    }
    const syncActiveIndex = ({ item }: { item: number }) => setActiveIndex(item);

    return (
        <div className={ styles.carrousel }>
            <AliceCarousel 
                items={ items } 
                disableButtonsControls 
                mouseTracking 
                autoPlay 
                animationDuration={1000}
                autoPlayInterval={15000}
                activeIndex={ activeIndex }
                onSlideChanged={ syncActiveIndex }
                infinite
            />
            <div className={ styles['btn-slide-left'] } onClick={ slidePrev } >
                <FontAwesomeIcon 
                    icon={ faAngleLeft }
                    className={ styles['icon-prev'] }    
                />
            </div>
            <div className={ styles['btn-slide-right'] } onClick={ slideNext }>
                <FontAwesomeIcon 
                    icon={ faAngleRight } 
                    className={ styles['icon-next'] }     
                />
            </div>
        </div>
    )
}
