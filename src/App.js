import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Placevisit from './Placevisit';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
     <BrowserRouter>
      <div className="App ">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route  path="/places" element={<Placevisit/>}/>
        </Routes>
      </div>
     </BrowserRouter>
     
    
  );
}

export default App;
