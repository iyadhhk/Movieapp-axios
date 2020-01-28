import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import { Route } from 'react-router-dom';
import MovieDetails from './Pages/MovieDetails/MovieDetails';

function App() {
  return (
    <div className='app'>
      <Route exact path='/' component={Home} />
      <Route exact path='/:movie_id' component={MovieDetails} />
    </div>
  );
}

export default App;
