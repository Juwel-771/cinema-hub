import React from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const MovieList = () => {
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