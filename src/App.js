import logo from './logo.svg';
import './App.css';
// import Logo from '../images/logo.png';
import Intro from './components/Intro';
import WhatWeNeed from './components/WhatWeNeed';
import Donation from './components/Donation';
import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3';
import Shelter1 from './components/Shelter1';
import Shelter2 from './components/Shelter2';

function App() {
  return (
    <div className="App">
      <Intro />
      <WhatWeNeed />
      <Donation />
      <Activity1 />
      <Activity2 />
      <Activity3 />
      <Shelter1 />
      <Shelter2 />
    </div>
  );
}

export default App;
