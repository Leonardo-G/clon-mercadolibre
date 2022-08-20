import { faFutbol } from '@fortawesome/free-regular-svg-icons';
import { faCouch, faPersonDigging, faShirt, faTv, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

import styles from "../../styles/home/Categories.module.css";
import { TitleSection } from '../UI/TitleSection';

export const Categories = () => {
    return (
        <>
            <TitleSection title='Categorías'/>
            <div className={`my-full ${ styles.categories}`}>
                <Link href="/category/herramientas">
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faWrench } className={ styles.category__icon}/>
                        <p className={ styles.category__info }>herramientas</p>    
                    </a>
                </Link>
                <Link href="/category/construccion">
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faPersonDigging } className={ styles.category__icon}/>
                        <p className={ styles.category__info }>construcción</p>    
                    </a>
                </Link>
                <Link href='/category/deportes-y-fitness'>
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faFutbol } className={ styles.category__icon}/>
                        <p className={ styles.category__info }>deportes y fitness</p>    
                    </a>
                </Link>
                <Link href="/category/hogar-muebles">
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faCouch } className={ styles.category__icon}/>
                        <p className={ styles.category__info }>Hogar y Muebles</p>    
                    </a>
                </Link>
                <Link href="/category/electrodomesticos">
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faTv } className={ styles.category__icon }/>
                        <p className={ styles.category__info }>electrodomésticos</p>    
                    </a>
                </Link>
                <Link href="/category/ropa-y-accesorios">
                    <a className={ styles.category }>
                        <FontAwesomeIcon icon={ faShirt } className={ styles.category__icon }/>
                        <p className={ styles.category__info }>ropa y Accesorios</p>    
                    </a>
                </Link>
            </div>
        </>
    )
}
