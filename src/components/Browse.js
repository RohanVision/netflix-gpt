import Header from './Header'
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import { useSelector } from 'react-redux';
import GptSearchPage from './GptSearchPage';

const Browse = () => {
    const shoGptSearch = useSelector((store) => store.gpt.showGptSerach);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    return (
        <div>
            <Header />
            {
                shoGptSearch ? (<GptSearchPage />) :
                    (
                        <> <MainContainer />
                            <SecondaryContainer />
                        </>
                    )}

        </div>
    )
}

export default Browse
