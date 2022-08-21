import { useRouter } from 'next/router';
import React, { MouseEvent, useContext } from 'react'
import { LayoutAuth } from '../../components/layout/LayoutAuth'
import { AuthContext } from '../../context/Auth/AuthContext';

const RegisterPage = () => {

    const router = useRouter();
    const { logIn } = useContext( AuthContext );

    const handleRegister = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        
        logIn();
        router.replace("/");
    }

    return (
        <LayoutAuth title='Hola! Para seguir, ingresá a tu cuenta' description='Hola! Para seguir, ingresá a tu cuenta'>
            <div>
                <h2 className='font-xl p-3' style={{ width: "35rem" }}>Hola! Ingresá tu correo, para acceder a tu cuenta.</h2>
                <form className='px-3'>
                    <label className='flex-col'>
                        <span className='font-m'>Correo</span>
                        <input className='input-form mt-1' type="email"/>
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Nombre de usuario</span>
                        <input className='input-form mt-1' type="text"/>
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Contraseña</span>
                        <input className='input-form mt-1' type="password"/>
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Repetir Contraseña</span>
                        <input className='input-form mt-1' type="password"/>
                    </label>
                    <div className='mt-3'>
                        <button 
                            className='btn btn--blue w-full' 
                            type="submit"
                            onClick={ handleRegister }    
                        >Registrarse</button>
                        <button className='btn btn-wh w-full mt-1 ' type="button">Ya tengo cuenta</button>
                    </div>
                </form>
                <div className='mt-3 center'>
                    <p className='font-5 f-bold'>Necesito ayuda para ingresar</p>
                </div>
            </div>
        </LayoutAuth>
    )
}

export default RegisterPage