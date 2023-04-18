import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/NavBar.js';
import Home from './Pages/Home';
import FourOFour from './Pages/FourOFour';
import Index from './Pages/Index';
import Show from './Pages/Show';
import New from './Pages/New';
import Edit from './Pages/Edit';

{/* <Route path="/transactions/:index" element={<Edit/>}/> */}

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
        <Route path="/transactions/new" element={<New/>}/> 
        <Route path="/transactions/:index/edit" element={<Edit/>}/>
        <Route path="*" element={<FourOFour/>}/>
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
