// import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Skeleton from './Components/Skeleton/Skeleton';
import Home from './Pages/Home/Home';
import { useGetJobsQuery } from './Store/api/jobs';

function App() {

  const { data, isLoading } = useGetJobsQuery()
  // console.log(data)

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
