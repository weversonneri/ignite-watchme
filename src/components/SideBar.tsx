import { memo, useCallback, useEffect, useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';

import { Button } from './Button';

import '../styles/sidebar.scss';

interface Props {
	setSelectedGenreId: (genreId: number) => void;
	selectedGenreId: number;
}

function SideBarComponent({ setSelectedGenreId, selectedGenreId }: Props) {
	// Complete aqui
	const [genres, setGenres] = useState<GenreResponseProps[]>([]);

	useEffect(() => {
		api.get<GenreResponseProps[]>('genres').then((response) => {
			setGenres(response.data);
		});
	}, []);

	const handleClickButton = useCallback((id: number) => {
		setSelectedGenreId(id);
	}, []);

	return (
		<nav className='sidebar'>
			<span>
				Watch<p>Me</p>
			</span>

			<div className='buttons-container'>
				{genres.map((genre) => (
					<Button
						key={String(genre.id)}
						title={genre.title}
						iconName={genre.name}
						onClick={() => handleClickButton(genre.id)}
						selected={selectedGenreId === genre.id}
					/>
				))}
			</div>
		</nav>
	);
}

export const SideBar = memo(SideBarComponent);
