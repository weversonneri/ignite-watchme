import { MovieProps } from "../App";
import { MovieCard } from "./MovieCard";

import '../styles/content.scss';

interface Props {
  movies: MovieProps[];
}

export function Content({ movies }: Props) {
  // Complete aqui

  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard
            key={movie.imdbID}
            title={movie.Title}
            poster={movie.Poster}
            runtime={movie.Runtime}
            rating={movie.Ratings[0].Value}
          />
        ))}
      </div>
    </main>
  )
}