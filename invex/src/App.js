import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landing-page/Landing-page';
import LoginPage from './pages/login-page/Login-page';
import Register from './pages/register-page/Register';
import About from './pages/about-page/About';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<LandingPage />} />
        <Route path='/login' element = {<LoginPage />} />
        <Route path='/signup' element = {<Register />} />
        <Route path='/about' element = {<About />} />
      </Routes>
    </div>
  );
}

export default App;
