import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Bar from './components/Bar.js'
import Home from './pages/Home.tsx'

function App() {
  return (
      <BrowserRouter>
        <Bar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;