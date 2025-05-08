import React, { useEffect, useState } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Link, useSearchParams } from 'react-router-dom';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

const Search = ({apiPath}) => {

    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const {data : movies} = useFetch(apiPath, queryTerm);

    return (
        <>
        <Headers></Headers>
            <main className='dark:bg-slate-800'>
                <section className='py-7 ml-7'>
                    <p className='text-3xl text-gray-700 dark:text-white'> {movies.length === 0 ? `No result found for "${queryTerm}"`: `Result for "${queryTerm}"`} </p>
                </section>
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

export default Search;