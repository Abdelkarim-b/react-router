import './App.css';
import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Contact } from './pages/Contact';
import { Navbar } from './Navbar';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Router>
              <Routes>
               <Route path="/" element={<Home />}/>
               <Route path="/menu" element={<Menu />}/>
               <Route path="/contact" element={<Contact />}/>
               <Route path="*" element={<h1>page not found</h1>}/>
              </Routes>
        </Router>
    </div>
  );
}

export default App;