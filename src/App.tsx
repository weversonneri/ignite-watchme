import { useEffect, useState } from 'react';
import { api } from './services/api';

import { Content } from './components/Content';
import { Header } from './components/Header';
import { SideBar } from './components/SideBar';

import './styles/global.scss';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreId}`).then(response => {
      setMovies(response.data);
    });

    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, [selectedGenreId]);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar
        setSelectedGenreId={setSelectedGenreId}
        selectedGenreId={selectedGenreId} />

      <div className="container">

        <Header title={selectedGenre.title} />
        <Content data={movies} />

      </div>
    </div>
  )
}