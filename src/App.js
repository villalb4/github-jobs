import './App.css';
import Header from './Components/Header/Header';
import Skeleton from './Components/Skeleton/Skeleton';
import Home from './Pages/Home/Home';
import useFetchJobs from './Hooks/useFetchJobs';

function App() {

  const { isLoading } = useFetchJobs()

  return (
    <div className="App">
      {/* <Skeleton /> */}
      { isLoading === true 
        ? <Skeleton /> :
        <main>
          <Header />
          <Home /> 
        </main>
      }
    </div>
  );
}

export default App;
