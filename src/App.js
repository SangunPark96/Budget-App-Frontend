import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Navbar from './Components/NavBar.js';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
