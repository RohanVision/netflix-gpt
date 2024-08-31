import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-36 md:w-40 pr-4 overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
            <img
                src={IMG_CDN_URL + posterPath}
                alt="Movie Card"
                className="w-full h-auto object-cover rounded-lg transform transition-transform duration-300 hover:scale-105"
            />
        </div>

    )
}

export default MovieCard;
