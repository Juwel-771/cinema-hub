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
    );
};

export default Search;