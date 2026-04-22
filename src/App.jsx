import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/auth/SignInPage';
import SignUpPage from './pages/auth/SignUpPage';
import PlantListPage from 'pages/PlantListPage';
import * as userService from "services/user";
import SessionContext from 'context/SessionContext';
import { jwtDecode } from 'jwt-decode';

const App = () => {
  const [sessionToken, setSessionToken] = useState(() => userService.getSessionTokenStorage());

  return (
    <SessionContext.Provider value={{
      username: sessionToken ? jwtDecode(sessionToken).username : null,
      signIn: (token) => {
        setSessionToken(token);
        userService.setSessionTokenStorage(token);
      },
      signOut: () => {
        setSessionToken(null);
        userService.removeSessionTokenStorage();
      }
    }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="plants" element={<PlantListPage/>} />
        </Routes>
      </BrowserRouter>
    </SessionContext.Provider>
  )
}

export default App
