import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MovieList from './pages/MovieList.jsx'
import MovieDetails from './pages/MovieDetails.jsx'
import Search from './pages/Search.jsx'
import PageNotFound from './pages/PageNotFound.jsx'

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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
