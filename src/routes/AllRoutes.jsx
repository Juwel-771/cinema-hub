import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { MovieDetails, MovieList, PageNotFound, Search } from "../pages";

const router = createBrowserRouter ([
    {
      path: '',
      element: <MovieList></MovieList>
    },
    {
      path: 'movie/:id',
      element: <MovieDetails></MovieDetails>
    },
    {
      path: 'movie/popular',
      element: <MovieList></MovieList>
    },
    {
      path: 'movie/top',
      element: <MovieList></MovieList>
    },
    {
      path: 'movie/upcoming',
      element: <MovieList></MovieList>
    },
    {
      path: 'search',
      element: <Search></Search>
    },
    {
      path: '*',
      element: <PageNotFound></PageNotFound>
    }
  ]);

  export default router