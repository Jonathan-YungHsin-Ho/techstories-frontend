import React, { useState } from 'react';
import axios from 'axios';
import { Button, Modal, Icon } from 'semantic-ui-react';

export default function FormWrapper({
	data,
	setData,
	page,
	FormComponent,
	initialInfo,
}) {
	const [info, setInfo] = useState(initialInfo);
	const [error, setError] = useState(false);
	const [modalOpen, setModalOpen] = useState(false);

	const handleChange = (e) =>
		setInfo({ ...info, [e.target.name]: e.target.value });

	const handleRadio = (field, value) => setInfo({ ...info, [field]: value });

	const handleSubmit = () => {
		if (!info.experience) {
			setError(true);
			return;
		}

		// console.log(info);
		axios
			.post(`${process.env.REACT_APP_BACKEND_API}/${page}`, info)
			.then((res) => {
				setData([...data, res.data.onboarding]);
				setInfo(initialInfo);
				setModalOpen(false);
			})
			.catch((err) => console.log(err));
	};

	return (
		<Modal
			trigger={
				<Button onClick={() => setModalOpen(true)} content='Share Your Story' />
			}
			size='tiny'
			dimmer='inverted'
			open={modalOpen}
			onClose={() => setModalOpen(false)}
			closeIcon>
			<Modal.Header>Share Your Story</Modal.Header>
			<Modal.Content>
				<p>
					<Icon name='warning circle' size='large' />
					Thank you for sharing your experience! Please note that only the{' '}
					<span style={{ fontWeight: 'bold' }}>Your Experience</span> field is
					required. The other fields are optional but would be public, so please
					only share what you're comfortable with others seeing!
				</p>
				<FormComponent
					handleChange={handleChange}
					handleRadio={handleRadio}
					error={error}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Submit' onClick={handleSubmit} />
			</Modal.Actions>
		</Modal>
	);
}
