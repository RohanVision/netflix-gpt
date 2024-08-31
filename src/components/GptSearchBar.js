import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openAi from '../utils/openAi'
import { API_OPTION } from '../utils/constants'
import { addGptMovieResult } from '../utils/gptSlice'

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    // search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTION);

        const json = await data.json();
        return json.results;
    }

    const handleGptSearchClick = async () => {
        console.log(searchText.current.value);

        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me name of 5 movies, comma seperated like the example result given ahead. Example: Golmaal, Sholay, Don, Andaaz apna apna, Dhadkan";

        // Get the result from API
        const gptResults = await openAi.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery }],
            model: 'gpt-3.5-turbo',
        });
        console.log(gptResults.choices[0]?.message?.content);
        const gptMovies = gptResults.choices[0]?.message?.content.split(",");

        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        // [promsise, promsise, promsise, promsise, promsise,] - we will get 5 promise into array because we use map

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));

    }
    return (
        <div className="pt-[60%] md:pt-[15%] flex justify-center md:flex-row">
            <form
                className="w-full px-4 py-6 md:w-1/2 bg-black rounded-lg shadow-lg grid grid-cols-12 gap-2 items-center"
                onSubmit={(e) => e.preventDefault()}
            >
                <input
                    ref={searchText}
                    type="text"
                    className="p-4 col-span-9 rounded-lg outline-none border border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-500 transition duration-300 bg-gray-900 text-white"
                    placeholder={lang[langKey].gptPlaceHolder}
                />
                <button
                    className="py-3 px-4 col-span-3 bg-red-700 text-white rounded-lg hover:bg-red-600 transition duration-300 shadow-md"
                    onClick={handleGptSearchClick}
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>

    )
}

export default GptSearchBar;


