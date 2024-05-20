import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import City1 from './components/City1';
import City2 from './components/City2';
import City3 from './components/City3';
import City4 from './components/City4';
import City5 from './components/City5';
import City6 from './components/City6';
import City7 from './components/City7';
import City8 from './components/City8';
import City9 from './components/City9';
import City10 from './components/City10';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className='flex flex-col items-center p-5 bg-slate-900 text-white min-h-screen'>
        <Routes>
          <Route path="/" element={<h1>Welcome to the Gallery!</h1>} />
          <Route path="/city1" element={<City1 />} />
          <Route path="/city2" element={<City2 />} />
          <Route path="/city3" element={<City3 />} />
          <Route path="/city4" element={<City4 />} />
          <Route path="/city5" element={<City5 />} />
          <Route path="/city6" element={<City6 />} />
          <Route path="/city7" element={<City7 />} />
          <Route path="/city8" element={<City8 />} />
          <Route path="/city9" element={<City9 />} />
          <Route path="/city10" element={<City10 />} />

        </Routes>
        <Navigation />
      </div>
    </Router>
  );
}

export default App;
