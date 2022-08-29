import './App.css';
import MovieList from './components/MovieList/MovieList';
import { useState } from 'react';
import Filter from './components/Filter/Filter';
import AddCard from './components/AddCard/AddCard';

function App() {
	const [filter, setFilter] = useState('');
	const [rating, setRating] = useState(1);
	const [movieList, setMovieList] = useState([
		{
			title: 'The Boss Baby',
			description:
				'The Templeton brothers have become adults and drifted away from each other, but a new boss baby with a cutting-edge approach is about to bring them together again - and inspire a new family business',
			posterURL:
				'https://m.media-amazon.com/images/M/MV5BYWY1N2I5MGUtZTBmNS00MWZmLWEyNzAtZjliNzk0ZDVkYzI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX140_CR0,0,140,209_AL_.jpg',
			rating: '4',
		},
		{
			title: 'Wrath of Man',
			description:
				'The plot follows H, a cold and mysterious character working at a cash truck company responsible for moving hundreds of millions of dollars around Los Angeles each week.',
			posterURL:
				'https://m.media-amazon.com/images/M/MV5BNGVkOTlhOTktNjZiNS00NDg3LWIxMDAtZTY5Y2E0YjllN2IxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
			rating: '5',
		},
		{
			title: 'Spider-Man',
			description:
				"With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.",
			posterURL:
				'https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_UY209_CR0,0,140,209_AL_.jpg',
			rating: '3',
		},
		{
			title: 'The Matrix',
			description:
				'Return to a world of two realities: one, everyday life; the other, what lies behind it. To find out if his reality is a construct, to truly know himself, Mr. Anderson will have to choose to follow the white rabbit once more.',
			posterURL:
				'https://m.media-amazon.com/images/M/MV5BMGJkNDJlZWUtOGM1Ny00YjNkLThiM2QtY2ZjMzQxMTIxNWNmXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
			rating: '4',
		},
		{
			title: 'Red Notice',
			description:
				"An Interpol agent successfully tracks down the world's most wanted art thief, with help from a rival thief. But nothing is as it seems, as a series of double-crosses ensue.",
			posterURL:
				'https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
			rating: '5',
		},
	]);

	const handleFilter = (val) => {
		setFilter(val);
	};
	const handleAddMovie = (val) => {
		setMovieList([...movieList, val]);
	};

	const handleRating = (number) => {
		setRating(number);
	};

	return (
		<div className="App">
			<header className="App-header">
				<Filter handleFilter={handleFilter} handleRating={handleRating} />
				<MovieList
					list={movieList.filter(
						(elm) =>
							elm.title
								.toLocaleLowerCase()
								.includes(filter.toLocaleLowerCase()) && elm.rating >= rating
						// ||elm.rating.includes(filter)
					)}
				/>
				<AddCard handleAddMovie={handleAddMovie} />
			</header>
		</div>
	);
}

export default App;
