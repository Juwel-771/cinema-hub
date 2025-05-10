import React, { useEffect } from 'react';
import Headers from '../components/Headers';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const PageNotFound = () => {

    useEffect(()=> {
        document.title = `Page not found / Cine Hub`
    });

    return (
        <>
        <Headers></Headers>
            <main className='dark:bg-slate-800'>
                <section className='flex flex-col justify-center px-2'>
                    <div className='flex flex-col items-center my-4'>
                        <p className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404, Page Not Found</p>
                    </div>
                    <div className='flex justify-center my-4'>
                        <Link to='/'>
                            <Button>Back To Home</Button>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer></Footer>
        </>
    );
};

export default PageNotFound;