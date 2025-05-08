import React, { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Headers from '../components/Headers';
import { useParams } from 'react-router-dom';


const MovieDetails = () => {

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

    return (
        <>
            <Headers></Headers>
                <main className='dark:bg-gray-800'>
                    <section className='flex justify-around flex-wrap py-5'>
                        <div className='max-w-sm'>
                            <img className='rounded' src={image} alt={movie.title} />
                        </div>
                        <div className='max-w-2xl text-gray-700 text-lg dark:text-white'>
                            <h1 className='text-4xl font-bold my-3 text-center lg:text-left'>{movie.title}</h1>
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
                        </div>
                    </section>
                </main>
            <Footer></Footer>    
        </>    
    );
};

export default MovieDetails;