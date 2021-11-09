import { Clock, Star } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export function MovieCard(movie: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={movie.poster}
        alt={movie.title}
      />

      <div>
        <div className="movie-info">
          <span>{movie.title}</span>
          <div className="meta">
            <div>
              <Star /> {movie.rating}
            </div>

            <div>
              <Clock /> {movie.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}