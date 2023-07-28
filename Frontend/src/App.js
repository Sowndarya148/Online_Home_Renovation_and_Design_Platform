
import './App.css';
import Navbar from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import Services from './components/Servicepage';
import FeedForm from './components/Feedback';




function App() {
  return (
    <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login/>} />
       <Route path="/register" element={<Register/>} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/services" element={<Services />} />
       <Route path="/Feedback" element={<FeedForm />} />
       </Routes>

      
    </div>
  );
}

export default App;
