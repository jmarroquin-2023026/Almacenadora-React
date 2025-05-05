import axios from "axios";
import toast from "react-hot-toast";

const apiClient=axios.create(
    {
        baseURL:'http://localhost:2636/',
        timeout:2000
    }
)

export const registerRequest = async (staff) => {
    try {
        return await apiClient.post('/addEmployee', JSON.stringify(staff), {
            headers: {
                Authorization: `Bearer ${token}`
              }
        });
    } catch (e) {
        return {
            error: true,
            e,
        };
    }
};

export const loginRequest=async(staff)=>{
    try{
        return await apiClient.post('/login',staff,{
            headers: {
                'Content-Type': 'application/json',
              },
        })
    }catch(e){
        return{
            error:true,
            message: e.response?.data?.message || 'Credenciales invalidas'
        }
    }
}