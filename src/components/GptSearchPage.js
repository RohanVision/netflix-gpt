import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { BACK_IMG_URL } from '../utils/constants';

const GptSearchPage = () => {
    return (
        <>
            <div className='fixed -z-10 w-full'>
                <img className='w-full h-screen object-cover' src={BACK_IMG_URL} alt='background' />
            </div>

            <div>
                <GptSearchBar />
                <GptMovieSuggestion />
            </div>
        </>
    )
}

export default GptSearchPage;
