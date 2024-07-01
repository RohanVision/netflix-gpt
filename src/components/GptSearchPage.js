import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMG_URL } from '../utils/constants';

const GptSearchPage = () => {
    return (
        <div>
            <div className='fixed -z-10'>
                <img src={BACK_IMG_URL} alt='background' />
            </div>

            <GptSearchBar />
            <GptMovieSuggestion />
        </div>
    )
}

export default GptSearchPage;
