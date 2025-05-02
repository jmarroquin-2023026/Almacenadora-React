import React from 'react'
import { Input } from './Input'

export const Login = () => {
    const form={
        email:{
            value:'',
            isValid:false,
            showError:false
        },
        password:{
            value:'',
            isValid:false,
            showError:false
        }
    }
  return (
    <>
    <h1>Inicia Sesion</h1>
    <div>
        <form>
            <Input
            field='email'
            label='Email'
            type='email'
            />
            <Input
            field='password'
            label='Password'
            type='passwrod'
            />
        </form>
    </div>
    </>
  )
}