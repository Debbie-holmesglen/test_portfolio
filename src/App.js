// Import React modules
import React from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';



// Import pages 
import Home from './pages/Home1';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import PageNotFound from './pages/PageNotFound';



// Import components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Portfolio" element={<Portfolio />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        <Footer />
       </Router> 
    </div>

  );
}

export default App;