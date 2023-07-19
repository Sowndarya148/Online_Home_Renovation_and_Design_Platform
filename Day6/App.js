import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';

 import NavigationBar from './Navbar';
import LoginPage from './LoginPage';
import RegistrationPage from './RegistrationPage';
 import HomePage from './HomePage'
import './login.css';
import './registrationpage.css';
import './styles.css';
import Footer from './footer';
import Services from './Services';
import './services.css';


import './homepage.css';


const App = () => {
  return (
      <div>
     <NavigationBar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/services" element={<Services />} />
      </Routes>
      
      
           
     
        </div>
        
              
          
  );
    

};

export default App;

