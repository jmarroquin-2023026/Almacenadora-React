import { useState } from "react"
import { registerRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useRegister = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async (name, surname, CUI, email, phone, password) => {
        setIsLoading(true)
        const staff = {
            name,
            surname,
            CUI,
            email,
            phone,
            password
        }

        const response = await registerRequest(staff)
        console.log(response);
        setIsLoading(false)
        if (response.error) {
            setError(true)
            if (response?.e?.response?.data?.errors) {
                let arrayErrors = response?.e?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.e?.response?.data?.msg ||
                response?.e?.data?.msg ||
                'Error al intentar registrar al empleado. Intente de nuevo'
            )
        }
        setError(false)
        return toast.success('Todo salio bien')
    }
    return {
        register,
        isLoading,
        error,
        setError

    }
}