import React from 'react';
import { useParams } from 'react-router-dom';

const Description = ({ movieList }) => {
	const params = useParams();

	const discrMov = movieList.find((el) => el.id === params.movId);
	console.log(discrMov);
	return (
		<div style={{ color: 'white' }}>
			{discrMov.trailerLink}
			<br></br>
			<div style={{ width: '500px' }}>{discrMov.description}</div>
		</div>
	);
};

export default Description;
