

export interface ErrorAuth {
    message: string;
}

class AuthProvider {

    private authToken: string;

    public authenticate(username: string, password: string): true|ErrorAuth
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            console.info(`username ${username} and password ${password} has been passed to login.`)
            return {message: "Une erreur s'est déroulé lors de la connexion"}
        }

        return true
    }
}

export default AuthProvider
