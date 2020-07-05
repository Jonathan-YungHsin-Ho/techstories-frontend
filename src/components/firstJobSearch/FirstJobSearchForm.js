import React from 'react';
import { Form } from 'semantic-ui-react';

export const initialFirstJobSearchInfo = {};

export default function FirstJobSearchForm({
	info,
	error,
	handleChange,
	handleRadio,
}) {
	return (
		<Form>
			<Form.Group widths='equal'>
				<Form.Input
					fluid
					label='Your Name'
					placeholder='Your name'
					name='name'
					onChange={handleChange}
				/>
				<Form.Input
					fluid
					label='Email'
					placeholder='Email'
					name='email'
					onChange={handleChange}
				/>
			</Form.Group>
		</Form>
	);
}
