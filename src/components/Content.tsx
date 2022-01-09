import { MovieProps } from '../App';
import { MovieCard } from './MovieCard';

import '../styles/content.scss';
import { memo } from 'react';

interface Props {
	movies: MovieProps[];
}

function ContentComponent({ movies }: Props) {
	// Complete aqui

	return (
		<main>
			<div className='movies-list'>
				{movies.map((movie) => (
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
	);
}

export const Content = memo(ContentComponent, (prevProps, nextProps) => {
	return Object.is(prevProps.movies, nextProps.movies);
});
