import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin=()=>{
    const [isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()

    const login=async(email,password)=>{
        setIsLoading(true)
        const staff={
            userLogin:email,
            password
        }
        const response = await loginRequest(staff);
        console.log('Respuesta completa de la API:', response); 
        setIsLoading(false)

        if(response.error){
            return toast.error(
                response?.e?.response?.data ||
                'Error al Iniciar Sesión. Intenta de nuevo'
            )
        }
        const { userDetails, token } = response.data
        console.log('Token recibido:', token)
        
        localStorage.setItem('token', token)
        console.log('Token almacenado:', localStorage.getItem('token'))
        
        navigate('/productos');
        navigate('/')
    }
    return {
        login,
        isLoading
    }
}