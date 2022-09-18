import { faBoxArchive, faCreditCard, faShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import styles from "../../styles/home/Info.module.css";

export const Info = () => {
    return (
        <div className='container'>
            <div className={ styles.info }>
                <div className={ styles.info__description }>
                    <FontAwesomeIcon icon={ faCreditCard } className={ styles['description--icon']}/>
                    <h3>Elegí como pagar</h3>
                    <p>Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito</p>
                    <p>Comó pagar tus compras.</p>
                </div>
                <div className={ styles.info__description }>
                    <FontAwesomeIcon icon={ faBoxArchive } className={ styles['description--icon']}/>
                    <h3>Envío gratis desde $ 5.500</h3>
                    <p>Solo por estar registrado en Mercado Libre tenés envíos gratis en miles de productos. Es un beneficio de Mercado Puntos.</p>
                    <p>Conocé más sobre este beneficio</p>
                </div>
                <div className={ styles.info__description }>
                    <FontAwesomeIcon icon={ faShield } className={ styles['description--icon']}/>
                    <h3>Seguridad, de principio a fin</h3>
                    <p>No te gusta? Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegid.</p>
                    <p>Comó pagar tus compras.</p>
                </div>
            </div>
            <div className={ styles.help }>
                <div className={ styles.help__card }>
                    <span>Boton de arrepentimiento</span>
                    <p>Cancelar una compra</p>
                    <p>Cancelar una suscripción</p>
                    <p>Cancelar un seguro o garantía</p>
                </div>
                <div className={ styles.help__card }>
                    <span>Conocé las normas que aplican cuando compras</span>
                    <p>Ve contratos de adhesión - Ley N.° 24.240 de Defensa del Consumidor</p>
                </div>
            </div>
        </div>
    )
}
