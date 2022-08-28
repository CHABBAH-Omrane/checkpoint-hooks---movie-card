import React from 'react';

const Filter = (props) => {
	return (
		<div>
			<form class="d-flex" role="search">
				<input
					class="form-control me-2"
					type="search"
					placeholder="Search"
					aria-label="Search"
					onChange={(e) => props.handleFilter(e.target.value)}
				/>
				<button class="btn btn-outline-success" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default Filter;
