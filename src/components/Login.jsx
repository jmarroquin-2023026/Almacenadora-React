import React, { useState } from 'react'
import { useLogin } from '../shared/hooks/useLogin'
import { emailValidationMessage, passwordValidationMessage, validateEmail, validatePassword } from '../shared/validators/validator'
import { Input } from './Input'

export const Login = ({ switchAuthHandler }) => {
  const { login } = useLogin()
  const [formData, setFormData] = useState(
    {
      email: {
        value: '',
        isValid: false,
        showError: false
      },
      password: {
        value: '',
        isValid: false,
        showError: false
      }
    }
  )

  const isSubmitButtonDisable = !formData.email.isValid ||
    !formData.password.isValid

  const onValueChange = (value, field) => {
    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          value
        }
      }
    ))
  }

  const handleValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break;
      case 'password':
        isValid = validatePassword(value)
        break;
      default:
        break
    }
    setFormData((prevData) => (
      {
        ...prevData,
        [field]: {
          ...prevData[field],
          isValid,
          showError: !isValid


        }
      }
    ))
  }

  const handleLogin = (e) => {
    e.preventDefault()
    console.log('Intentando iniciar sesión...')
    login(
      formData.email.value,
      formData.password.value
    )
  }

  return (
    <div className="flex items-center justify-center " style={{ backgroundColor: '#1a202c' }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md dark:bg-gray-800">
        <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Inicio de Sesión</h1>
        <form className="max-w-sm mx-auto" onSubmit={handleLogin} >
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <Input
              field='email'
              type="email"
              value={formData.email.value}
              onChangeHandler={onValueChange}
              onBlurHandler={handleValidationOnBlur}
              showErrorMessage={formData.email.showError}
              validationMessage={emailValidationMessage}
              id="email"
              placeholder="name@flowbite.com"
              required />
          </div>
          <div className="mb-5">
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <Input
              field='password'
              type="password"
              value={formData.password.value}
              onChangeHandler={onValueChange}
              onBlurHandler={handleValidationOnBlur}
              showErrorMessage={formData.password.showError}
              id="password"
              required />
          </div>
          <div className="flex items-start mb-5">

          </div>
          <button type="submit" className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ingresar</button>
        </form>
      </div>
    </div>
  )
}