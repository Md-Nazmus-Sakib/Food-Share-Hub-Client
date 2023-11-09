import axios from 'axios';
import { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';
const axiosSecure = axios.create({
    baseURL: 'https://food-share-hub-server.vercel.app',
    withCredentials: true
})

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log(error)
            if (error.response.status === 401 || error.response.status === 403) {
                logOut()

                    .then(() => {
                        navigate('/login')
                    })
                    .catch(error => {

                    })
            }
        })
    }, [])
    return axiosSecure;
}




export default useAxiosSecure;