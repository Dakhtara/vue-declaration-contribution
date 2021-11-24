import router from "../router";
import axios from "axios";


export interface ErrorAuth {
    message: string;
}

export default class AuthProvider {

    private authToken: string;

    public async authenticate(username: string, password: string): Promise<true | ErrorAuth> {

        if (import.meta.env.VITE_USE_MOCK == 'true') {
            if (username.length > 0 && password.length > 0) {
                localStorage.authToken = 'azeropld'
                return true;
            }

            console.info(`username ${username} and password ${password} has been passed to login.`)
            return {message: "Une erreur s'est déroulé lors de la connexion"}
        } else {
            return axios.post('/api/login', {username, password}).then(res => {
                if (res.status === 200) {
                    localStorage.authToken = res.data.token
                    return true
                }
                return {message: res.data.message}
            }).catch(err => {
                console.error(err)
                return {message: err}
            })

        }
    }

    public async logOut(): Promise<void> {
        localStorage.removeItem('authToken')
        await router.push({path: '/login'})
    }
}
