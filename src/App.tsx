import React,{createContext, useReducer} from 'react'
import PublicRoutes from './components/PublicRoutes'
import { authReducer, initialState } from './context/reducers';
import './App.css'


export const AuthContext= createContext(initialState);

const App:React.FC = () => {
  const [authState,dispatchAuthState]=useReducer(authReducer,initialState);
 

  return  <AuthContext.Provider value={{authState,dispatchAuthState}} >
    <PublicRoutes  />
  </AuthContext.Provider>
}

export default App