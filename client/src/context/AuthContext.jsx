import { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import { authReducer } from './reducers/authReducers.jsx';
import { types } from './types/types.js';

// Inicializamos el AuthContext
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    isLogged: localStorage.getItem('isLogged') === 'true',
    token: localStorage.getItem('token') || null,
  });

  // Función de login que guarda el token y actualiza el estado
  const login = (token) => {
    dispatch({
      type: types.LOGIN,
      payload: { token },
    });
  };

  // Función de logout que limpia el estado y el localStorage
  const logout = () => {
    dispatch({
      type: types.LOGOUT,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// PropTypes para validar props
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
