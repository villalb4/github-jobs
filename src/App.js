import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import { useDispatch } from 'react-redux';
import { getJobs } from './Redux/thunk/getJobs';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
