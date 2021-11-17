class AuthGuardClass {
    private static instance: AuthGuardClass;


    private constructor() {
    }

    public isAuthenticated(): boolean {
        return localStorage.authToken !== undefined && localStorage.authToken !== null || (('authToken' in localStorage))
    }

    public static getInstance(): AuthGuardClass {
        if (!AuthGuardClass.instance) {
            AuthGuardClass.instance = new AuthGuardClass()
        }

        return AuthGuardClass.instance
    }
}
let AuthGuard

export default AuthGuard = AuthGuardClass.getInstance()
