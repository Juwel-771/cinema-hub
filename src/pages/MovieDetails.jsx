import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Headers from '../components/Headers';
import { useParams } from 'react-router-dom';
import { BiSolidMoviePlay } from "react-icons/bi";
import useTitle from '../components/useTitle';



const MovieDetails = ({title}) => {

    const [watchMovie, setWatchMovie] = useState(true);
    const [watchList, setWatchList] = useState(null);
    const params = useParams();
    const [movie, setMovies] = useState([]);
    const image = `https://image.tmdb.org/t/p/w400/${movie.poster_path}`;

    useEffect(()=>{
        async function fetchMovie(){
            const response = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=abef22202ef4bbd29941b8c79553fc53`);
            const json = await response.json();
            setMovies(json);
            console.log(json);
        }
        fetchMovie();
    }, []);

    

    const handleWatchMovie = e => {
        e.preventDefault();        
        setWatchMovie(!watchMovie);
        console.log(watchMovie);
    }

    const handleWatchList = e => {
        e.preventDefault();
        if(watchMovie===true){
            setWatchList("Added to Watchlist")
        }else{
            setWatchList("Add to watchlist")
        }

        console.log(watchList);
    }

    useTitle(`Movie`)

    return (
        <>
            <Headers></Headers>
                <main className='dark:bg-gray-800'>
                    <section className='flex justify-around flex-wrap py-5'>
                        <div className='max-w-sm'>
                            <img className='rounded' src={image} alt={movie.title} />
                            
                        </div>
                            
                        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
                            <div className='flex flex-row justify-between'>
                                <h1 className='text-2xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
                                <button onClick={handleWatchMovie} type="button" class="text-white bg-purple-700 font-medium rounded-full text-sm px-4 text-center mb-2 dark:bg-purple-600">
                                  {`${watchMovie ? "Add to Watchlist": "Added to Watchlist"}`}
                                </button>
                                
                                <button type="button" class="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg">
                                {/* <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                                </svg> */}
                                <span className='text-3xl'><BiSolidMoviePlay /></span>
                                <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"> {`${watchMovie ? " ": "1"}`} </div>
                                </button>

                            </div>
                            <p className='py-4'>{movie.overview}</p>
                            {
                                movie.genres ? (
                                    <p className='my-7 flex flex-wrap gap-2'>
                                        {
                                            movie.genres.map((genres)=> (
                                                <span className = "mr-2 border border-gray-200 rounded dakr:border-gray-600 p-2">{genres.name}</span>
                                            ))
                                        }
                                    </p>
                                ) : ""
                            }
                        
                            <div className="flex items-center">
                                <svg className="w-4 h-4 text-yellow-300 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                </svg>
                                <p className="ms-2 text-sm font-bold text-gray-900 dark:text-white">{movie.vote_average
                                }</p>
                                <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                                <span className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{movie.vote_count} reviews</span>
                            </div>

                            <p className='my-4'>
                                <span className='mr-2 font-bold'>Runtime: </span>
                                <span> {movie.runtime} min</span>
                            </p>

                            <p className='my-4'>
                                <span className='mr-2 font-bold'>Budget: </span>
                                <span> {movie.budget} </span>
                            </p>

                            <p className='my-4'>
                                <span className='mr-2 font-bold'>Revenue: </span>
                                <span> {movie.revenue} </span>
                            </p>

                            <p className='my-4'>
                                <span className='mr-2 font-bold'>Release Date: </span>
                                <span> {movie.release_date} </span>
                            </p>

                            <p className='my-4'>
                                <span className='mr-2 font-bold'>IMDB CODE: </span>
                                <a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="_blank"> {movie.imdb_id} </a>
                            </p>

                        </div>
                    </section>
                </main>
            <Footer></Footer>    
        </>    
    );
};

export default MovieDetails;