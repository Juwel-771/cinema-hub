import React, { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);

     useEffect(() => {
             async function fetchMovies(){
                 const response = await fetch(url);
                 const json = await response.json();
                 setData(json.results);
             }
             fetchMovies(); 
         }, [url])

    return { data }
};

export default useFetch;