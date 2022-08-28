import React from 'react';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ list, remove }) => {
	return (
		<div className="movie-container">
			{list.length ? (
				list.map((elm) => <MovieCard elm={elm} />)
			) : (
				<img
					src="https://th.bing.com/th/id/R.c174fb042e613eac5a6ce5a9df4e1a39?rik=vmb0iITYw1UVCQ&pid=ImgRaw&r=0"
					alt="Smiley face"
					style={{ width: '300px', paddingTop: '100px' }}
				></img>
			)}
		</div>
	);
};

export default MovieList;
