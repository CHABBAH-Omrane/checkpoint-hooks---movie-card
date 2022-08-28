import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const AddCard = (props) => {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [inputs, setInputs] = useState([
		{
			title: '',
			description: '',
			posterURL: '',
			rating: '',
		},
	]);

	const handleChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};
	const handleSave = () => {
		props.handleAddMovie(inputs);
		setInputs({ title: '', description: '', posterURL: '', rating: '' });
		handleClose();
	};
	return (
		<div>
			<Button variant="primary" onClick={handleShow}>
				Add New Movie
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Add New Movie</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Form>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Title</Form.Label>
							<Form.Control
								type="text"
								placeholder="Put Title of the movie "
								name="title"
								onChange={handleChange}
								autoFocus
							/>
						</Form.Group>
						<Form.Group
							className="mb-3"
							controlId="exampleForm.ControlTextarea1"
						>
							<Form.Label>Description</Form.Label>
							<Form.Control
								as="textarea"
								rows={3}
								name="description"
								onChange={handleChange}
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>PosterURL</Form.Label>
							<Form.Control
								type="url"
								placeholder="Images of Film Cover"
								name="posterURL"
								onChange={handleChange}
								autoFocus
							/>
						</Form.Group>
						<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
							<Form.Label>Rating</Form.Label>
							<Form.Control
								type="text"
								placeholder="Rate"
								name="ratinr"
								onChange={handleChange}
								autoFocus
							/>
						</Form.Group>
					</Form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
					</Button>
					<Button variant="primary" onClick={handleSave}>
						ADD MOVIE
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);
};

export default AddCard;
