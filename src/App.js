import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/NavBar.js';
import Home from './Pages/Home';
import FourOFour from './Pages/FourOFour';
import Index from './Pages/Index';
import Show from './Pages/Show';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/transactions" element={<Index/>}/>
        <Route path="/transactions/:index" element={<Show/>}/>
        <Route path="*" element={<FourOFour/>}/>
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
