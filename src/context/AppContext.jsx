import React, { createContext, useState } from 'react';

export const customContext = createContext()
const {Provider} = customContext

const AppContext = ({children}) => {
    const [auth, setAuth] = useState(false);
    const [token, setToken] = useState(null);

  return (
    <Provider value={{auth, token, setAuth, setToken}}>
        {children}
    </Provider>
    );
};

export default AppContext;
