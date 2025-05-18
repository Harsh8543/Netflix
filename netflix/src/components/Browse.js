// import React from 'react'
// import Header from './Header'

// function Browse() {
//   return (
//     <div>
//         <Header/>
//     </div>
//   )
// }

// export default Browse







import React, { useEffect } from 'react';
import Header from './Header';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainContainer from './MainContainer';
import MovieContainer from './MovieContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import SearchMovie from './SearchMovie';

const Browse = () => {
    const { user } = useSelector(store => store.app);
    const { toggle } = useSelector(store => store.movie);
    const navigate = useNavigate();

    // Call custom hooks directly at the top level
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    // Redirect to home page if there is no user
    useEffect(() => {
        if (!user) {
            navigate("/");
        }
    }, []);

    return (
        <div>
            <Header />
            <div>
                {
                    toggle ? <SearchMovie /> : (
                        <>
                            <MainContainer />
                            <MovieContainer />
                        </>
                    )
                }
            </div>
        </div>
    );
}

export default Browse;
