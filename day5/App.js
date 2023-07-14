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
import card from './card';

import CardList from './cardlist';
import './card.css'
const App = () => {
  return (
      <div>
     <NavigationBar/>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
      <Footer/>      
     
        </div>
        
              
          
  );
    

};

export default App;

