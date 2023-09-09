import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Features from './Components/Features/Features';
import AboutUs from './Components/About/AboutUs';
import Plans from './Components/Plans/Plans';
import Contact from './Components/Contact/Contact ';
import Footer from './Components/Footer/Footer';


function App() {


  return (

    
    <Router>
      <Header />

      <Routes>
        <Route path='/' element= { <Home />} />
        <Route path='/features' element= { <Features />} />
        <Route path='/about-us' element= { <AboutUs />} />
        <Route path='/plan' element= { <Plans />} />
        <Route path='/contact' element= {<Contact /> } />
       </Routes>

<Footer />
    </Router>

  );
}

export default App;
