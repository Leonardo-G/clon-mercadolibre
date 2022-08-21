import React, { useContext } from 'react'

//Experimental en NEXT
import Image from 'next/future/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from "../../public/assets/logo.png"
import dplus from "../../public/assets/dplus.webp"

import styles from "../../styles/components/UI/Navbar.module.css";
import Link from 'next/link';
import { AuthContext } from '../../context/Auth/AuthContext';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

export const NavBar = () => {

    const { isAutenticated, logOut } = useContext( AuthContext );

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
                            className="hover-a"
                        >
                            <FontAwesomeIcon 
                                icon={ faMagnifyingGlass }
                                className={`${ styles.search__icon }`}
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
                                className='font-3 p-1 hover-a'
                            >Categorías</a>
                        </Link>
                        <a className='font-3 p-1 hover-a' href="#">Ofertas</a>
                        <a className='font-3 p-1 hover-a' href="#">Historial</a>
                    </div>
                    <div>
                        <div>
                            {
                                isAutenticated 
                                ? (
                                    <>
                                        <span className='p-1 relative hover-cursor'>
                                            <div className='inline'>
                                                <FontAwesomeIcon icon={ faCircleUser }/>
                                                <span className='ml-1'>Leonardo</span>
                                            </div>
                                            <div className='pos-bottom background-wh flex-col hover-visible'>
                                                <div className='px-3 py-2 flex-row-center'>
                                                    <div className='font-xl'>
                                                        <FontAwesomeIcon icon={ faCircleUser }/>
                                                    </div>
                                                    <a className='px-2 subtitle-grey'>Leonardo</a>
                                                </div>
                                                <a className='px-3 py-1 border-t-grey-w subtitle-grey shadow-hover-wh'>Mi Perfil</a>
                                                <a 
                                                    className='px-3 py-1 border-t-grey-w subtitle-grey shadow-hover-wh'
                                                    onClick={ logOut }  
                                                >Salir</a>
                                            </div>
                                        </span>  
                                        <a className='p-1 hover-a'>Favoritos</a>  
                                    </>
                                )
                                : (
                                    <>
                                        <a className='p-1' href="">Creá tu cuenta</a>
                                        <Link href="/auth/login">
                                            <a className='p-1 hover-a'>Ingresá</a>
                                        </Link>
                                    </>
                                )
                            }
                            <a className='p-1 hover-a' href="">Mis compras</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}
