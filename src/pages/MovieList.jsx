import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const MovieList = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const response = await fetch();
            const data = await response.json();
            setMovies(data.results);
        }
    }, [])

    return (
       <>
       <Headers></Headers>
        <main className='dark:bg-slate-800'>
            <section className='max-w-7xl mx-auto py-7'>
                <div className='flex justify-start flex-wrap'>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </div>
            </section>
        </main>
       <Footer></Footer>
       </>
    );
};

export default MovieList;