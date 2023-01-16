import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage';
import SignIn from './components/LandingPage/SignIn'
import ForgotPassword  from './components/LandingPage/ForgotPassword';
import SignUp from './components/LandingPage/SignUp'
import EmployerSignIn from './components/LandingPage/EmployerSignIn'
import EmployerSignUp from './components/LandingPage/EmployerSignUp'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/employer-sign-up' element={<EmployerSignUp />} />
        <Route path='/employer-sign-in' element={<EmployerSignIn />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
