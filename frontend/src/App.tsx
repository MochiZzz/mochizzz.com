import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Bar from './components/Bar.js'
import Home from './pages/Home.tsx'
import Portfolio from './pages/Portfolio.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'

function App() {
  return (
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;