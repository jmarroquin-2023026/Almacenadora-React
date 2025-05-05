export const validateEmail=(email)=>{
    const regex=/\S+@\S+\.\S+/
    return regex.test(email)
}

export const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z\d]).{8,}$/;
    return regex.test(password);
};

export const validatePassConfirm=(password,passConfirm)=>{
    return password===passConfirm
}

export const validateCUI=(cui)=>{
    const regex=/^\d{13}$/
    return regex.test(cui)
}

export const validatePhone=(phone)=>{
    const regex=/^[2-7]\d{7}$/
    return regex.test(phone)
}


export const emailValidationMessage='Por favor ingrese un correo válido'
export const passwordValidationMessage='La contraseña no cumple con los requisito necesarios'
export const passConfirmValidationMessage = 'Las contraseñas no coinciden'
export const cuiValidateMessage='El número de cui ingresado no es válido'
export const phoneValidationMessag='El núméro de teléfono ingresado no es válido'