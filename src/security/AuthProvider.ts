

class AuthProvider {

    private authToken: string;

    public authenticate(username: string, password: string): boolean
    {
        if (import.meta.env.VITE_USE_MOCK == 'true') {
            console.info(`username ${username} and password ${password} has been passed to login.`)
            return true
        }

        return false
    }
}
