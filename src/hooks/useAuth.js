import React, {useCallback, useContext, useState} from 'react';

const AuthContext = React.createcontext();
AuthContext.displayName = 'AuthContext';

export function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(false);
    const [sessionUser, setSessionUser] = useState({});

    const handleLoginResult = useCallback(
        (loginResult) => {
            setAuthToken(loginResult.token);
            setSessionUser(loginResult.user);
        },
        [setAuthToken, setSessionUser]
    );

    const handleLogout = useCallback(
        () => {
            handleLoginResult({token: false, user: {}});
        },
        [handleLoginResult]
    );

    return (
        <AuthContext.Provider value={{authToken, sessionUser, handleLoginResult, handleLogout}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}