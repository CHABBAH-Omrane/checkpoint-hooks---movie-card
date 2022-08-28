import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../MovieCard/MovieCard.css';
import StarRating from '../StarRating/StarRating';

const MovieCard = ({ elm, remove }) => {
	return (
		<div className="elm">
			<Card className="card">
				<Card.Img variant="top" src={elm.posterURL} className="card-img" />
				<Card.Body>
					<Card.Title style={{ color: 'orange' }}>{elm.title}</Card.Title>
					<Card.Text style={{}} className="discription">
						{elm.description}
					</Card.Text>
					<Card.Body className="info">
						<Button variant="primary" onClick={() => elm.removeCardMovie()}>
							Remove Movie
						</Button>
						<Card.Text className="note">
							<StarRating elm={elm} />
						</Card.Text>
					</Card.Body>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;
