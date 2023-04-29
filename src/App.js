import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Location from './Components/Location';
import About from './Components/About';
import Web from './Components/Web';
import Graphic from './Components/Graphic';
import Happ from './Components/Happ';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route  path='/web' element={<Web/>}/>
        <Route  path='/app' element={<Happ/>}/>
        <Route  path='/graphic' element={<Graphic/>}/>
        <Route  path='/about' element={<About/>}/>
        <Route  path='/contact' element={<Contact/>}/>
        <Route  path='/location' element={<Location/>}/>
      </Routes>
      <Footer/> 
      
    </BrowserRouter>
  );
}

export default App;
