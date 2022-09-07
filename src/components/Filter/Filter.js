import React from 'react';
import { Router, Routes, Route, Link, Outlet } from 'react-router-dom';

import StarRatingComponent from 'react-star-rating-component';

const Filter = (props) => {
	return (
		<div>
			<form class="d-flex" role="search">
				<Link to="/">
					<button class="btn btn-outline-success" type="submit">
						Home
					</button>
				</Link>
				<Outlet />
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => props.handleFilter(e.target.value)}
				/>

				<StarRatingComponent
					name="star"
					onStarClick={(value) => props.handleRating(value)}
					emptyStarColor={'#F4EBD0'}
					starColor={'#D6AD60'}
					starCount={5}
				/>
				<button class="btn btn-outline-success" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default Filter;
