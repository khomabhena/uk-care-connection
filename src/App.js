import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignIn from './components/LandingPage/SignIn'
import ForgotPassword  from './components/LandingPage/ForgotPassword';
import SignUp from './components/LandingPage/SignUp'
import EmployerSignIn from './components/LandingPage/EmployerSignIn'
import EmployerSignUp from './components/LandingPage/EmployerSignUp'
import { useContext } from 'react';
import { AuthContext } from './components/Context/AuthContext';
import ApplicantDashboard from './components/Applicant';
import EmployerDashboard from './components/Employer';

function App() {

  const { currentUser } = useContext(AuthContext)

  const IsUserAuthorized = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  }

  const IsEmployerAuthorized = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
  } 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/employer-sign-up' element={<EmployerSignUp />} />
        <Route path='/employer-sign-in' element={<EmployerSignIn />} />

        <Route path='/applicant' element={<IsUserAuthorized> <ApplicantDashboard /> </IsUserAuthorized>} />
        <Route path='/employer' element={<IsEmployerAuthorized> <EmployerDashboard /> </IsEmployerAuthorized>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
