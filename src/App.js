import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Details from './Pages/Details/Details';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="job/:jobId"  element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
