import React from 'react'
import { BACKGROUND } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
    return (
      <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={BACKGROUND} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
      );
}

export default GptSearch