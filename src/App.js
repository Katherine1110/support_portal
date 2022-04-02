import { Routes, Route, Link } from 'react-router-dom';
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
import AreasOfActivity from './components/AreasOfActivity/AreasOfActivity';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      {/* <Intro />
      <WhatWeNeed />
      <Donation />
      <Activity1 />
      <Activity2 />
      <Activity3 />
      <Shelter1 />
      <Shelter2 />
      <AreasOfActivity /> */}

      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/donation" element={<Donation />} />
        <Route path="/activity" element={<Activity1 />} />
        <Route path="/shelter" element={<Shelter1 />} />
        <Route path="/areas-of-activity" element={<AreasOfActivity />} />
        {/* <Route path="*" element={<Notfoundpage />} /> */}
      </Routes>
    </>
  );
}

export default App;
