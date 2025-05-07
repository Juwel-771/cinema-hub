import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';


const MovieList = ({apiPath}) => {

    // const [movies, setMovies] = useState([]);
    const {data : movies} = useFetch(apiPath);


    // useEffect(() => {
    //     async function fetchMovies(){
    //         const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=abef22202ef4bbd29941b8c79553fc53");
    //         const data = await response.json();
    //         setMovies(data.results);
    //     }

    //     fetchMovies(); 
    // }, [])

    return (
       <>
       <Headers></Headers>
        <main className='dark:bg-slate-800'>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>
                    {
                        movies.map((movie)=> (
                            <Card key={movie.id} movie={movie}></Card>
                        ))
                    }
                </div>
            </section>
        </main>
       <Footer></Footer>
       </>
    );
};

export default MovieList;