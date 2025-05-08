import React from "react";
import { Link } from 'react-router-dom';

const Card = ({movie}) => {

  const {id, original_title, poster_path, overview} = movie;
  const image = `https://image.tmdb.org/t/p/w400/${poster_path}`;

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg"
          src={image}
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to={`/movie/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {original_title}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {overview}
        </p>
        <Link
          to={`/movie/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <button>
            Show Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
