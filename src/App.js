import './App.css';
import Nav from './mycompo/Nav';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import Home from './mycompo/Home';
import Contact from './mycompo/Contact';
import Suggestion from './mycompo/Suggestion';
import About from './mycompo/About'
import Footer from './mycompo/Footer'
import Frontend from './mycompo/Frontend';
import Backend from './mycompo/Backend';
import Graphics from './mycompo/Graphics';

function App() {
  return (
    <div className=" container-fluid">
      <Router>
       <div className='container-fluid'>
        <Nav />
         
       </div> 
    
        <Routes>
       
          <Route  path='/' element={<Home />}/>
          <Route path='/about' element={ <About />}/>
          <Route path='/contact' element={ <Contact />}/>
          <Route path='/sug' element={ <Suggestion />}/>
          <Route path='/frontend' element={ <Frontend /> }/>
          <Route path='/backend' element={ <Backend />}/>
          <Route path='/graphics' element={ <Graphics />}/>
      
       </Routes>
      
       </Router>
       <hr  style={{color:"white"}}/>
    <div>
        <Footer />
       </div>
       <Outlet />
    </div>
  );
}

export default App;
