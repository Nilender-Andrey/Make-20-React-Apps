import React from 'react';
import Header from './components/header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import RandomPlanet from './components/random-planet/Random-planet';
import PlanetPage from './components/pages/planet_page';
import PeoplePage from './components/pages/people_page';
import StarshipsPage from './components/pages/starships_page';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className='container d-flex flex-wrap'>
        <RandomPlanet />
        <Routes>
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/people/:id' element={<PeoplePage />} />
          <Route path='/people/' element={<PeoplePage />} />
          <Route path='/planets' element={<PlanetPage />} />
          <Route path='/planets/:id' element={<PlanetPage />} />
          <Route path='/starships' element={<StarshipsPage />} />
          <Route path='/starships/:id' element={<StarshipsPage />} />
          <Route
            path='*'
            element={<h1 className='text-center w-100'>Welcome to StarDB</h1>}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
