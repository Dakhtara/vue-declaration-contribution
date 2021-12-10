import axios, {AxiosResponse} from 'axios';
import authGuard from "./AuthGuard";
import {useRouter} from "vue-router";
import AuthProvider from "./AuthProvider";

class AxiosInterceptorService
{
    public init(): void  {
        axios.interceptors.request.use((config) => {
            if (authGuard.isAuthenticated()) {
                // @ts-ignore
                config.headers.authorization = `Bearer ${localStorage.authToken}`
            }

            return config;
        })

        axios.interceptors.response.use((response: AxiosResponse) => {
            return response
        }, error => {
            if (error.response.status === 401) {
                //place your reentry code
                let authProvider = new AuthProvider()
                authProvider.logOut()
            }
            return error;
        })
    }
}
let AxiosInterceptor
export default AxiosInterceptor = new AxiosInterceptorService()
