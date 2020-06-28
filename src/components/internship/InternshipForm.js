import React from 'react';
import { Button, Modal, Icon } from 'semantic-ui-react';

import { useForm } from '../../hooks/useForm';

import InternshipFormContent, { initialInfo } from './InternshipFormContent';

export default function InternshipForm({ data, setData }) {
	const [
		info,
		error,
		modalOpen,
		setModalOpen,
		handleChange,
		handleRadio,
		handleSubmit,
	] = useForm(initialInfo, data, setData);

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
				<InternshipFormContent
					info={info}
					error={error}
					handleChange={handleChange}
					handleRadio={handleRadio}
				/>
			</Modal.Content>
			<Modal.Actions>
				<Button content='Submit' onClick={handleSubmit} />
			</Modal.Actions>
		</Modal>
	);
}
