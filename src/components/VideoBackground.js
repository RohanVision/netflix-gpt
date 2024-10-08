import { useSelector } from 'react-redux'
import useMovieTrailer from '../hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector(store => store.movies?.trailerVideo)
    useMovieTrailer(movieId);

    return (
        <div className="bg-black/90 p-4 sm:p-6 rounded-xl shadow-xl overflow-hidden max-w-full mx-auto">
            <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${trailerVideo?.key}?&autoplay=1&mute=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
        </div>

    )
}

export default VideoBackground;


