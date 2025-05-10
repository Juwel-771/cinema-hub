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
    element: <MovieList apiPath = "movie/now_playing"></MovieList>,
    title: "Home"
  },
  {
    path: 'movie/:id',
    element: <MovieDetails></MovieDetails>
  },
  {
    path: 'movie/popular',
    element: <MovieList apiPath = "movie/popular"></MovieList>,
    title: "Popular"
  },
  {
    path: 'movie/top',
    element: <MovieList apiPath = "movie/top_rated"></MovieList>,
    title: "Top Rated"
  },
  {
    path: 'movie/upcoming',
    element: <MovieList apiPath = "movie/upcoming"></MovieList>,
    title: "Upcoming"
  },
  {
    path: 'search',
    element: <Search apiPath= "search/movie"></Search>
  },
  {
    path: '*',
    element: <PageNotFound title = "Page Not Found"></PageNotFound>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
