import React, { ChangeEvent, FormEvent, FormEventHandler, MouseEvent, useContext, useState } from 'react'

import { NextPage } from 'next'
import { useRouter } from 'next/router'

import { LayoutAuth } from '../../components/layout/LayoutAuth'
import { AuthContext } from '../../context/Auth/AuthContext'
import Link from 'next/link'
import { isEmailValid } from '../../utils/isValidEmail'

const LoginPage: NextPage = () => {
    
    const router = useRouter();
    const { logIn } = useContext( AuthContext );
    const [inputsValues, setInputsValues] = useState({email: "", password: ""})
    const [errorForm, setErrorForm] = useState({ error: false, message: ""})
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);

    const handleUIPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            password: e.target.value
        })

        if ( e.target.value.length <= 5 ){
            
            setErrorPassword( true )
            return
        }

        setErrorPassword(false)
    }

    const handleUIEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            email: e.target.value
        })

        if ( !isEmailValid( e.target.value ) ){
            
            setErrorEmail( true )
            return
        }

        setErrorEmail(false)

    }

    const handleLogIn = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        const { hasError, message } = logIn( inputsValues.email, inputsValues.password );

        if ( hasError ) {
            setErrorForm({
                error: hasError,
                message: message
            })
            return;
        }

        router.replace("/")
    }

    return (
        <LayoutAuth title='Hola! Para seguir, ingresá a tu cuenta' description='Hola! Para seguir, ingresá a tu cuenta'>
            <div>
                <h2 className='font-xl p-3' style={{ width: "35rem" }}>Hola! Ingresá tu correo, para acceder a tu cuenta.</h2>
                <form className='px-3'>
                    <label className='flex-col'>
                        <span className='font-m'>Correo</span>
                        <input 
                            onChange={ handleUIEmail }
                            className={`input-form mt-1 ${ errorEmail && "input-error" }`}
                            type="text" 
                            value={ inputsValues.email }
                            name='email'
                        />
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Contraseña</span>
                        <input 
                            className={`input-form mt-1 ${ errorPassword && "input-error" }`}
                            type="text" 
                            name='password'
                            value={ inputsValues.password }
                            onChange={ handleUIPassword }
                        />
                    </label>
                    {
                        errorForm.error &&
                        <p className='font-error mt-2'>{ errorForm.message }</p>
                    }
                    <div className='mt-3'>
                        <button 
                            className={`btn w-full ${ (errorEmail || errorPassword) ? "btn-disable" : "btn--blue" }`} 
                            type="submit"
                            disabled={ errorEmail || errorPassword }
                            onClick={ handleLogIn }    
                        >Continuar</button>
                        <Link href="/auth/register">
                            <button className='btn btn-wh w-full mt-1 ' type="button">Crear Cuenta</button>
                        </Link>
                        
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