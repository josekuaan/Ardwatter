import React, {useEffect} from 'react';
import Aos from 'aos'
import 'aos/dist/aos.css';
import StickyFunc from './src'
import ReadMore from './readmore'
import Home from './pages/Home';
import './App.css';

function App() {

  useEffect(()=>{
    Aos.init({
      duration:2000,
      offset:300,
      // throttleDelay: 99
    })
  })
 
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
