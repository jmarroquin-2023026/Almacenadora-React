    import { useState } from "react"
    import { useRegister } from "../shared/hooks/useRegister"
    import { cuiValidateMessage, emailValidationMessage, passConfirmValidationMessage, passwordValidationMessage, phoneValidationMessag, validateCUI, validateEmail, validatePassConfirm, validatePassword, validatePhone } from "../shared/validators/validator"
    import { Input } from "./Input"

    export const Register=({switchAuthHandler})=>{
        const form={
            name:{
                value:'',
                isValid:false,
                showError:false
            },
            surname:{
                value:'',
                isValid:false,
                showError:false
            },
            CUI:{
                value:'',
                isValid:false,
                showError:false
            },
            email:{
                value:'',
                isValid:false,
                showError:false
            },
            phone:{
                value:'',
                isValid:false,
                showError:false
            },
            password:{
                value:'',
                isValid:false,
                showError:false
            },
            passConfirm:{
                value:'',
                isValid:false,
                showError:false
            }
        }

        const [formData,setFormData]=useState(form)
        const {register}=useRegister()

        const isSubmitButtonDisable=!formData.CUI.isValid||
                                    !formData.email.isValid||
                                    !formData.phone.isValid||
                                    !formData.password.isValid||
                                    !formData.passConfirm.isValid


        const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
        register(
            formData.name.value,
            formData.surname.value,
            formData.CUI.value,
            formData.email.value,
            formData.phone.value,
            formData.password.value
        );
    }

        const handleValidationOnBlur=(value,field)=>{
            let isValid=false
            switch(field){
                case 'CUI':
                    isValid=validateCUI(value)
                    break;
                case 'email':
                    isValid=validateEmail(value)
                    break;
                case 'phone':
                    isValid=validatePhone(value)
                    break;
                case 'password':
                    isValid = validatePassword(value)
                break
                case 'passConfirm':
                    isValid = validatePassConfirm(formData.password.value, value)
                    break
                
                default:
                        break;
            }
            setFormData((prevData)=>(
                {
                ...prevData,
                [field]:{
                    ...prevData[field],
                    isValid,
                            showError: !isValid
        
                    
                }
                }
            ))
            
        }

    const handleValueChange = (value, field)=>{
        setFormData((prevData)=> (
            {
                ...prevData,
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }
        
    return (
        <div className="flex items-center justify-center " style={{ backgroundColor: '#1a202c' }}>
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md dark:bg-gray-800">
                <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Registrate</h1>
                <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                        field="name"
                        label="Name"
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                    />
                    <Input
                        field="surname"
                        label="Surname"
                        type="text"
                        placeholder="Enter your surname"
                        value={formData.surname.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                    />
                    <Input
                        field="CUI"
                        label="Cui"
                        type="text"
                        placeholder="Enter your CUI number"
                        value={formData.CUI.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formData.CUI.showError}
                        validationMessage={cuiValidateMessage}
                    />
                    <Input
                        field="email"
                        label="Email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formData.email.showError}
                        validationMessage={emailValidationMessage}
                    />
                        <Input
                            field="password"
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            value={formData.password.value}
                            onChangeHandler={handleValueChange}
                            onBlurHandler={handleValidationOnBlur}
                            showErrorMessage={formData.password.showError}
                            validationMessage={passwordValidationMessage}
                        />
                    <Input
                        field="phone"
                        label="Phone"
                        type="text"
                        placeholder="Enter your phone number"
                        value={formData.phone.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formData.phone.showError}
                        validationMessage={phoneValidationMessag}
                    />
                    <Input
                        field="passConfirm"
                        label="Confirm Password"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.passConfirm.value} 
                        onChangeHandler={handleValueChange}
                        onBlurHandler={handleValidationOnBlur}
                        showErrorMessage={formData.passConfirm.showError}
                        validationMessage={passConfirmValidationMessage}
                    />
                    <div className="flex items-start mb-5">
                        <div className="flex items-center h-5">
                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                        </div>
                        <label htmlFor="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a></label>
                    </div>
                    <button disabled={isSubmitButtonDisable} type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );

    }