
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages';
import SignInPage from './pages/signin-page';
import SignUpPage from './pages/signup-page';
import ForgotPasswordPage from './pages/forgot-password-page';
import ProfilePage from './pages/profile-page';
import EmployerSignUpPage from './pages/employer-signup-page';
import EmployerSignInPage from './pages/employer-signin-page';
import EmployerProfilePage from './pages/employer-profile-page';
import { useContext } from 'react';
import { AuthContext } from './components/Context/AuthContext';

function App() {
  const { currentUser } = useContext(AuthContext)

  const IsUserAuthorized = ({ children }) => {
    return currentUser ? children : <Navigate to='/signin' />
  }

  const IsEmployerAuthorized = ({ children }) => {
    return currentUser ? children : <Navigate to='/employer-signin' />
  } 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/employer-signup' element={<EmployerSignUpPage />} />
        <Route path='/employer-signin' element={<EmployerSignInPage />} />

        <Route path='/profile' element={<IsUserAuthorized> <ProfilePage /> </IsUserAuthorized>} />
        <Route path='/employer-profile' element={<IsEmployerAuthorized> <EmployerProfilePage /> </IsEmployerAuthorized>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
