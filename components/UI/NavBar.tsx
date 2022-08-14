import React from 'react'

//Experimental en NEXT
import Image from 'next/future/image'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import logo from "../../public/assets/logo.png"
import dplus from "../../public/assets/dplus.webp"

import styles from "../../styles/components/UI/Navbar.module.css";

export const NavBar = () => {
    return (
        <div className='background-main'>
            <div className='container flex-col py-1'>
                <div className='flex-row'>
                    <a href="#">
                        <Image 
                            src={ logo }
                            alt="logo mercado libre"
                            />
                    </a>
                    <div
                        className={ styles.search }
                    >
                        <input 
                            type="text"
                            placeholder='Buscar productos, marcas y mas...'
                        />
                        <FontAwesomeIcon 
                            style={{ fontSize: "20px" }}
                            icon={ faMagnifyingGlass }
                            className={ styles.search__icon } 
                        />
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
                        <a 
                            style={{ paddingLeft: "0" }}
                            className='font-3 p-1'
                        >Categorías</a>
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
            {/* div(class="navegacion")
                div(class="contenedor")
                    div(class="navegacion__superior")
                        a(href="/")
                            img(src=`${enlace}/img/logo.png`, alt="Logo Mercado Libre")
                        form(class="busqueda")
                            input(type="text", placeholder="Buscar productos, marcas y más")
                            i(class="fa-solid fa-magnifying-glass iconInput")
                        div 
                            img(src=`${enlace}/img/D_NQ_877425-MLA47306668299_082021-OO.webp` class="imgHeight" alt="subscripcion disney")
                    nav(class="navegacion__inferior")
                        div(class="inferior--menu")
                            a(href="#categorias") Categorías
                            a(href="/newpost") Vender
                        div(class="inferior--cuenta")
                        
                            if (user)
                                div(class="cuenta")
                                    img(class="cuenta__img" src=`${user.imgUrl}`)
                                    a(href="$") #{user.username}
                                    i(class="fa-solid fa-angle-down")
                                    div(class="cuenta__nav") 
                                        div(class="nav--user") 
                                            img(class="cuenta__img" src=`${user.imgUrl}`)
                                            p Hola #{user.username}
                                        div(class="nav--options")
                                            a(href="/myorder") Compras
                                            a(href="/profile") Mi Perfil
                                            a(href="/auth/sign-off") Salir
                                            
                            else    
                                div(class="cuenta cuenta--login")
                                    a(href="/auth/sign-in") Creá tu cuenta 
                                    a(href="/auth/login") Ingresá

                            a(href="/cart/save")
                                i(class="fa-solid fa-cart-shopping iconShop") */}
        </div>
    )
}
