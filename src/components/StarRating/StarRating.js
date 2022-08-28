import React from 'react';
import { FaStar } from 'react-icons/fa';
const StarRating = ({ elm }) => {
	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1;
				return (
					<FaStar color={ratingValue <= elm.rating ? '#ffc107' : '#A39D95'} />
				);
			})}
		</div>
	);
};

export default StarRating;
