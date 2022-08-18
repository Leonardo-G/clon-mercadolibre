import React from 'react'

//Experimental en NEXT
import Image from 'next/future/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from "../../public/assets/logo.png"
import dplus from "../../public/assets/dplus.webp"

import styles from "../../styles/components/UI/Navbar.module.css";
import Link from 'next/link';

export const NavBar = () => {
    return (
        <div className='background-main'>
            <div className='container flex-col py-1'>
                <div className='flex-row'>
                    <Link href="/">
                        <a href="#">
                            <Image 
                                src={ logo }
                                alt="logo mercado libre"
                                />
                        </a>
                    </Link>
                    <div className={ styles.search }>
                        <input 
                            type="text"
                            placeholder='Buscar productos, marcas y mas...'
                        />
                        <div 
                            style={{ width: "2rem"}}
                        >
                            <FontAwesomeIcon 
                                icon={ faMagnifyingGlass }
                                className={ styles.search__icon } 
                            />
                        </div>
                    </div>
                    <Image 
                        src={ dplus }
                        alt="disney plus subscripcion"
                        height={ 40 }
                        width={ 340 }
                    />
                </div>
                <nav className='flex-row ptop-2'>
                    <div>
                        <Link href="/">
                            <a 
                                style={{ paddingLeft: "0" }}
                                className='font-3 p-1'
                            >Categorías</a>
                        </Link>
                        <a className='font-3 p-1' href="#">Ofertas</a>
                        <a className='font-3 p-1' href="#">Historial</a>
                    </div>
                    <div>
                        <div>
                            <a className='p-1' href="">Creá tu cuenta</a>
                            <a className='p-1' href="">Ingresá</a>
                            <a className='p-1' href="">Mis compras</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
