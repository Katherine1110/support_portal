import { Routes, Route } from 'react-router-dom';
import './App.css';
import Intro from './components/Intro';
import WhatWeNeed from './components/WhatWeNeed';
import Donation from './components/Donation';
import Activity1 from './components/Activity1';
import Shelter1 from './components/Shelter1';
import AreasOfActivity from './components/AreasOfActivity/AreasOfActivity';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/what_we_need" element={<WhatWeNeed />}>
          <Route
            path="/what_we_need"
            element={
              <Donation
                title1="Звичайно, ми маємо де все це придбати."
                title2="А ви можете зробити пожертву на рахунок:"
              />
            }
          />
        </Route>
        <Route path="/activity" element={<Activity1 />} />
        <Route path="/shelter" element={<Shelter1 />} />
        <Route path="/donation" element={<Donation title="Реквізити:" />} />
        <Route path="/areas-of-activity" element={<AreasOfActivity />} />
      </Routes>
    </>
  );
}

export default App;
