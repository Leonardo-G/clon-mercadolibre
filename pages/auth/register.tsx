import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ChangeEvent, MouseEvent, useContext, useState } from 'react'
import { LayoutAuth } from '../../components/layout/LayoutAuth'
import { AuthContext } from '../../context/Auth/AuthContext';
import { isEmailValid } from '../../utils/isValidEmail';

const RegisterPage = () => {

    const router = useRouter();
    const { logIn } = useContext( AuthContext );
    const [inputsValues, setInputsValues] = useState({email: "", username: "", password: "", repeat_password: "" })
    const [errorForm, setErrorForm] = useState({ error: false, message: ""})
    const [errorPassword, setErrorPassword] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [errorUsername, setErrorUsername] = useState(false)
    const [errorRepeatPassword, seterrorRepeatPassword] = useState(false)

    const handleUIPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            password: e.target.value
        })

        if ( e.target.value.length <= 5 ){
            
            !errorPassword && setErrorPassword( true )
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
            
            !errorEmail && setErrorEmail( true )
            return
        }

        setErrorEmail(false)

    }

    const handleUIRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            repeat_password: e.target.value
        })

        if ( e.target.value.length <= 5 || e.target.value !== inputsValues.password ){
            
            !errorRepeatPassword && seterrorRepeatPassword( true )
            return
        }

        seterrorRepeatPassword( false );

    }

    const handleUIUsername = (e: ChangeEvent<HTMLInputElement>) => {
        setInputsValues({
            ...inputsValues,
            username: e.target.value
        })

        if ( e.target.value.length <= 5 ){
            
            !errorUsername && setErrorUsername( true )
            return
        }

        setErrorUsername( false );

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
                <h2 className='font-xl p-3' style={{ width: "35rem" }}>Hola! Complete los campos para crearse una cuenta</h2>
                <form className='px-3'>
                    <label className='flex-col'>
                        <span className={`font-m`} >Correo</span>
                        <input 
                            onChange={ handleUIEmail }
                            className={`input-form mt-1 ${ errorEmail && "input-error" }`}
                            type="email" 
                            value={ inputsValues.email }
                            name='email'
                        />
                    </label>
                    <label className='flex-col mt-2'>
                        <span className={`font-m`} >Nombre de usuario</span>
                        <input 
                            onChange={ handleUIUsername }
                            className={`input-form mt-1 ${ errorUsername && "input-error" }`}
                            type="text" 
                            value={ inputsValues.username }
                            name='username'
                        />
                    </label>
                    <label className='flex-col mt-2'>
                        <span className={`font-m`} >Contraseña</span>
                        <input 
                            onChange={ handleUIPassword }
                            className={`input-form mt-1 ${ errorPassword && "input-error" }`}
                            type="password" 
                            value={ inputsValues.password }
                            name='password'
                        />
                    </label>
                    <label className='flex-col mt-2'>
                        <span className='font-m'>Repetir contraseña</span>
                        <input 
                            className={`input-form mt-1 ${ errorRepeatPassword && "input-error" }`}
                            type="password" 
                            name='repeat-password'
                            value={ inputsValues.repeat_password }
                            onChange={ handleUIRepeatPassword }
                        />
                    </label>
                    {
                        errorForm.error &&
                        <p className='font-error mt-2'>{ errorForm.message }</p>
                    }
                    <div className='mt-3'>
                        <button 
                            className={`btn w-full ${ (errorEmail || errorPassword || errorUsername || errorRepeatPassword) ? "btn-disable" : "btn--blue" }`} 
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

export default RegisterPage