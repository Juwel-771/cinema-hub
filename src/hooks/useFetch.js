import React, { useEffect, useState } from 'react';

const useFetch = (apiPath, queryTerm = " ") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=abef22202ef4bbd29941b8c79553fc53&query=${queryTerm}`

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