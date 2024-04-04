import React, {useCallback, useContext, useState} from 'react';
import { setApiToken } from './useApi';

const AuthContext = React.createContext();
AuthContext.displayName = 'AuthContext';

export function AuthContextProvider({children}) {
    const [authToken, setAuthToken] = useState(false);
    const [sessionUser, setSessionUser] = useState({});

    const handleLoginResult = useCallback(
        (loginResult) => {
            setApiToken(loginResult.token);
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
        <AuthContext.Provider value={{authToken, sessionUser, handleLoginResult, handleLogout, setSessionUser}}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}