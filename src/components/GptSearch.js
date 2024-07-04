import React from 'react'
import { BACKGROUND } from '../utils/constants';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestions from './GptMovieSuggestions';

const GptSearch = () => {
    return (
        <div>
          <div className="absolute -z-10">
            <img src={BACKGROUND} alt="logo" />
          </div>
          <GptSearchBar />
          <GptMovieSuggestions />
        </div>
      );
}

export default GptSearch