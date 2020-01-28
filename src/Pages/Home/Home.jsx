import React from 'react';
import MovieList from '../../components/MovieList/MovieList';
import SearchField from '../../components/SearchField/SearchField';
import SearchStars from '../../components/SearchStars/SearchStars.jsx';
export default function Home() {
  return (
    <div>
      <div className='container'>
        <SearchField />
        <SearchStars />
      </div>
      <MovieList />
    </div>
  );
}
