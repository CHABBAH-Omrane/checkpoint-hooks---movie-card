import React from 'react';
import { Button, Card } from 'react-bootstrap';
import '../MovieCard/MovieCard.css';
import StarRating from '../StarRating/StarRating';
import StarRatingComponent from 'react-star-rating-component';

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
							Movie
						</Button>
						<Card.Text className="note">
							{/* <StarRating elm={elm} /> */}
							<StarRatingComponent
								name="star" /* name of the radio input, it is required */
								value={
									elm.rating
								} /* number of selected icon (`0` - none, `1` - first) */
							/>
						</Card.Text>
					</Card.Body>
				</Card.Body>
			</Card>
		</div>
	);
};

export default MovieCard;
