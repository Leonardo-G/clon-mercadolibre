import React from 'react'

import { NextPage } from 'next'

import { LayoutAuth } from '../../components/layout/LayoutAuth'

const LoginPage: NextPage = () => {
    return (
        <LayoutAuth title='Hola! Para seguir, ingresá a tu cuenta' description='Hola! Para seguir, ingresá a tu cuenta'>
            <div>
                <h2 className='font-xl p-3' style={{ width: "35rem" }}>Hola! Ingresá tu correo, para acceder a tu cuenta.</h2>
                <form className='px-3'>
                    <label className='flex-col'>
                        <span className='font-m'>Correo</span>
                        <input className='input-form mt-1' type="text"/>
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Contraseña</span>
                        <input className='input-form mt-1' type="text"/>
                    </label>
                    <div className='mt-3'>
                        <button className='btn btn--blue w-full' type="submit">Continuar</button>
                        <button className='btn btn-wh w-full mt-1 ' type="button">Crear Cuenta</button>
                    </div>
                </form>
                <div className='mt-3 center'>
                    <p className='font-5 f-bold'>Necesito ayuda para ingresar</p>
                </div>
            </div>
        </LayoutAuth>
    )
}

export default LoginPage